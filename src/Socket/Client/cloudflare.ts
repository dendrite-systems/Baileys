import { DEFAULT_ORIGIN } from '../../Defaults'
import { AbstractSocketClient } from './types'

type AcceptedWebSocket = WebSocket & { accept(): void }
type UpgradeResponse = Response & { webSocket?: AcceptedWebSocket }

/** Cloudflare's fetch upgrade preserves Origin and headers without a Node ws dependency. */
export class CloudflareWebSocketClient extends AbstractSocketClient {
	private socket: AcceptedWebSocket | undefined
	private upgrade: AbortController | undefined
	private state: 'closed' | 'connecting' | 'open' = 'closed'

	get isOpen() {
		return this.state === 'open'
	}
	get isClosed() {
		return this.state === 'closed'
	}
	get isClosing() {
		return this.socket?.readyState === WebSocket.CLOSING
	}
	get isConnecting() {
		return this.state === 'connecting'
	}

	connect() {
		if (this.state !== 'closed') {
			return
		}

		if (this.config.agent) {
			throw new Error('Cloudflare WebSockets do not support Node proxy agents')
		}

		this.state = 'connecting'
		const controller = new AbortController()
		this.upgrade = controller
		void this.open(controller)
	}

	private async open(controller: AbortController) {
		const timer = setTimeout(() => controller.abort(), this.config.connectTimeoutMs)
		try {
			const url = new URL(this.url)
			url.protocol = url.protocol === 'wss:' ? 'https:' : 'http:'
			const headers = new Headers(this.config.options?.headers)
			headers.set('Upgrade', 'websocket')
			headers.set('Origin', DEFAULT_ORIGIN)
			const response: UpgradeResponse = await fetch(url, { headers, signal: controller.signal, redirect: 'manual' })
			const socket = response.webSocket
			if (response.status !== 101 || !socket) {
				await response.body?.cancel()
				throw new Error(`WebSocket upgrade failed with status ${response.status}`)
			}

			if (controller.signal.aborted || this.upgrade !== controller) {
				socket.accept()
				socket.close(1000, 'Connection cancelled')
				return
			}

			this.socket = socket
			socket.binaryType = 'arraybuffer'
			socket.addEventListener('message', event => {
				if (this.socket !== socket) {
					return
				}

				if (event.data instanceof ArrayBuffer) {
					this.emit('message', Buffer.from(event.data))
				} else if (typeof event.data === 'string') {
					this.emit('message', Buffer.from(event.data))
				}
			})
			socket.addEventListener('error', () => {
				if (this.socket === socket) {
					this.emit('error', new Error('WebSocket connection failed'))
				}
			})
			socket.addEventListener('close', event => {
				if (this.socket !== socket) {
					return
				}

				this.socket = undefined
				this.state = 'closed'
				this.emit('close', event.code, Buffer.from(event.reason))
			})
			socket.accept()
			this.state = 'open'
			this.emit('open')
		} catch (error) {
			if (this.upgrade !== controller) {
				return
			}

			this.state = 'closed'
			this.emit('error', error instanceof Error ? error : new Error('WebSocket upgrade failed'))
			this.emit('close', 1006, Buffer.alloc(0))
		} finally {
			clearTimeout(timer)
			if (this.upgrade === controller) {
				this.upgrade = undefined
			}
		}
	}

	close() {
		const upgrade = this.upgrade
		this.upgrade = undefined
		upgrade?.abort()
		const socket = this.socket
		this.socket = undefined
		if (this.isClosed) {
			return
		}

		// A peer may never answer the close frame. Release the owner without waiting for it.
		this.state = 'closed'
		try {
			socket?.close(1000)
		} finally {
			this.emit('close', 1000, Buffer.alloc(0))
		}
	}

	send(data: Uint8Array | string, callback?: (error?: Error) => void): boolean {
		if (!this.socket || !this.isOpen) {
			callback?.(new Error('WebSocket is not open'))
			return false
		}

		try {
			this.socket.send(typeof data === 'string' ? data : Uint8Array.from(data))
		} catch (error) {
			callback?.(error instanceof Error ? error : new Error('WebSocket send failed'))
			return false
		}

		callback?.()
		return true
	}
}
