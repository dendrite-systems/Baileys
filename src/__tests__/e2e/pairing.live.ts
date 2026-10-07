import makeWASocket, { type BaileysEventMap, Browsers, fetchLatestWaWebVersion, initAuthCreds } from '../../index'

const logger = { level: 'silent', child: () => logger, trace() {}, debug() {}, info() {}, warn() {}, error() {} }

it('completes the real WhatsApp handshake and receives a pairing QR without linking an account', async () => {
	const version = await fetchLatestWaWebVersion({ signal: AbortSignal.timeout(7000) })
	expect(version.isLatest).toBe(true)
	const socket = makeWASocket({
		version: version.version,
		browser: Browsers.macOS('Chrome'),
		auth: { creds: initAuthCreds(), keys: { get: async () => ({}), set: async () => {} } },
		logger,
		markOnlineOnConnect: false,
		connectTimeoutMs: 15000
	})
	let timer: ReturnType<typeof setTimeout> | undefined
	let onUpdate: (update: BaileysEventMap['connection.update']) => void = () => {}

	try {
		const fields = await new Promise<number>((resolve, reject) => {
			timer = setTimeout(() => reject(new Error('Timed out waiting for pairing QR')), 25000)
			onUpdate = update => {
				if (update.qr) {
					resolve(update.qr.split(',').length)
				} else if (update.connection === 'close') {
					reject(new Error('WhatsApp closed the connection before issuing a pairing QR'))
				}
			}

			socket.ev.on('connection.update', onUpdate)
		})
		expect(fields).toBe(5)
	} finally {
		clearTimeout(timer)
		socket.ev.off('connection.update', onUpdate)
		await socket.end(undefined)
	}
}, 35000)
