import { jest } from '@jest/globals'
import { once } from 'events'
import { DEFAULT_CONNECTION_CONFIG, DEFAULT_ORIGIN } from '../../Defaults'
import { CloudflareWebSocketClient } from '../../Socket/Client/cloudflare'
import { initAuthCreds } from '../../Utils/auth-utils'

const makeClient = () =>
	new CloudflareWebSocketClient(new URL('wss://example.test/ws/chat'), {
		...DEFAULT_CONNECTION_CONFIG,
		options: { headers: { 'X-Test': 'transport' } },
		auth: { creds: initAuthCreds(), keys: { get: async () => ({}), set: async () => {} } }
	})

const makeUpgrade = () => {
	const socket = Object.assign(new EventTarget(), {
		binaryType: 'blob',
		readyState: 1,
		accept: jest.fn(),
		send: jest.fn<(data: Uint8Array | string) => void>(),
		close: jest.fn()
	})
	const response = Object.assign(new Response(), { webSocket: socket })
	Object.defineProperty(response, 'status', { value: 101 })
	return { socket, response }
}

afterEach(() => jest.restoreAllMocks())

describe('Cloudflare WebSocket transport', () => {
	it('upgrades with the origin and forwards binary frames and send completion', async () => {
		const { socket, response } = makeUpgrade()
		const fetch = jest.spyOn(globalThis, 'fetch').mockResolvedValue(response)
		const client = makeClient()
		const opened = once(client, 'open')
		client.connect()
		await opened
		const [url, options] = fetch.mock.calls[0]!
		expect(String(url)).toBe('https://example.test/ws/chat')
		expect(new Headers(options?.headers).get('Origin')).toBe(DEFAULT_ORIGIN)
		expect(new Headers(options?.headers).get('Upgrade')).toBe('websocket')
		expect(new Headers(options?.headers).get('X-Test')).toBe('transport')
		expect(socket.accept).toHaveBeenCalledTimes(1)
		expect(socket.binaryType).toBe('arraybuffer')
		const received = once(client, 'message')
		socket.dispatchEvent(new MessageEvent('message', { data: new Uint8Array([1, 2, 3]).buffer }))
		expect(await received).toEqual([Buffer.from([1, 2, 3])])
		const sent = jest.fn()
		expect(client.send(Buffer.from([4, 5]), sent)).toBe(true)
		expect(socket.send).toHaveBeenCalledWith(new Uint8Array([4, 5]))
		expect(sent).toHaveBeenCalledWith()
		client.close()
	})

	it('closes without waiting for a peer acknowledgement and ignores late events', async () => {
		const { socket, response } = makeUpgrade()
		jest.spyOn(globalThis, 'fetch').mockResolvedValue(response)
		const client = makeClient()
		const opened = once(client, 'open')
		client.connect()
		await opened
		const closed = jest.fn()
		const message = jest.fn()
		client.on('close', closed)
		client.on('message', message)
		client.close()
		client.close()
		expect(client.isClosed).toBe(true)
		expect(socket.close).toHaveBeenCalledTimes(1)
		expect(closed).toHaveBeenCalledTimes(1)
		socket.dispatchEvent(new MessageEvent('message', { data: new ArrayBuffer(1) }))
		socket.dispatchEvent(new Event('error'))
		socket.dispatchEvent(new Event('close'))
		expect(message).not.toHaveBeenCalled()
		expect(closed).toHaveBeenCalledTimes(1)
		const rejected = jest.fn()
		expect(client.send('after-close', rejected)).toBe(false)
		expect(rejected).toHaveBeenCalledWith(expect.any(Error))
	})

	it('aborts a pending upgrade and closes a late response without reopening', async () => {
		const { socket, response } = makeUpgrade()
		let finish: (response: Response) => void = () => {
			throw new Error('Fetch was not called')
		}

		const fetch = jest.spyOn(globalThis, 'fetch').mockImplementation(
			() =>
				new Promise(resolve => {
					finish = resolve
				})
		)
		const client = makeClient()
		const opened = jest.fn()
		client.on('open', opened)
		client.connect()
		client.close()
		expect(fetch.mock.calls[0]![1]?.signal?.aborted).toBe(true)
		finish(response)
		await Promise.resolve()
		expect(socket.close).toHaveBeenCalledWith(1000, 'Connection cancelled')
		expect(opened).not.toHaveBeenCalled()
		expect(client.isClosed).toBe(true)
	})

	it('reports failed upgrades and leaves the transport closed', async () => {
		jest.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(null, { status: 403 }))
		const client = makeClient()
		const failed = new Promise<Error>(resolve => client.once('error', resolve))
		client.connect()
		expect((await failed).message).toBe('WebSocket upgrade failed with status 403')
		expect(client.isClosed).toBe(true)
	})
})
