import { proto } from '../../WAProto/index.js'

describe('protobuf object conversion', () => {
	it('retains detached creation and type URL helpers', () => {
		const { create, getTypeUrl } = proto.Message.ImageMessage
		const message = create({ caption: 'fixture' })
		expect(message).toBeInstanceOf(proto.Message.ImageMessage)
		expect(message.caption).toBe('fixture')
		expect(getTypeUrl()).toBe('type.googleapis.com/proto.Message.ImageMessage')
		expect(getTypeUrl('custom')).toBe('custom/proto.Message.ImageMessage')
	})

	it('retains unknown enum numbers and fills unknown repeated enum names with their default', () => {
		const message = proto.BotModeSelectionMetadata.fromObject({ mode: ['REASONING_MODE', 'future', 77] })
		expect(message.mode).toEqual([1, 0, 77])
		expect(message.toJSON()).toEqual({ mode: ['REASONING_MODE', 'UNKNOWN_MODE', 77] })
		const status = proto.WebMessageInfo.fromObject({ status: 'future' })
		expect(Object.hasOwnProperty.call(status, 'status')).toBe(false)
	})

	it('preserves map keys without changing object prototypes', () => {
		const input = JSON.parse('{"musicUserIdMap":{"__proto__":"preserved","ordinary":"value"}}')
		const message = proto.SyncActionValue.MusicUserIdAction.fromObject(input)
		const output = message.toJSON()
		expect(JSON.stringify(output)).toBe(JSON.stringify(input))
		expect(Object.getPrototypeOf(message.musicUserIdMap)).toBe(Object.prototype)
		expect(Object.getPrototypeOf(output.musicUserIdMap)).toBe(Object.prototype)
	})

	it('distinguishes absent optional fields from explicitly set defaults', () => {
		const absent = proto.Message.toObject(proto.Message.create(), { defaults: true, oneofs: true })
		expect(Object.hasOwnProperty.call(absent, 'conversation')).toBe(false)
		const present = proto.Message.toObject(proto.Message.fromObject({ conversation: '' }), { oneofs: true })
		expect(present).toEqual({ conversation: '', _conversation: 'conversation' })
	})

	it('exposes optional presence without treating inherited or hidden fields as set', () => {
		const message = proto.Message.fromObject({ conversation: '' })
		expect(Reflect.get(message, '_conversation')).toBe('conversation')
		Reflect.set(message, '_conversation', 'conversation')
		expect(message.conversation).toBe('')
		Reflect.set(message, '_conversation', undefined)
		expect(Reflect.get(message, '_conversation')).toBeUndefined()
		expect(Object.hasOwnProperty.call(message, 'conversation')).toBe(false)
		Object.defineProperty(message, 'conversation', { value: 'hidden', enumerable: false })
		expect(Reflect.get(message, '_conversation')).toBeUndefined()
		expect(Reflect.get(proto.Message.create(), '_conversation')).toBeUndefined()
	})

	it('preserves selection and clearing of mutually exclusive fields', () => {
		const message = proto.Message.ButtonsMessage.create({ text: 'fixture', imageMessage: {} })
		expect(message.header).toBe('imageMessage')
		message.header = 'text'
		expect(message.header).toBe('text')
		expect(Object.hasOwnProperty.call(message, 'imageMessage')).toBe(false)
		message.header = undefined
		expect(message.header).toBeUndefined()
		expect(Object.hasOwnProperty.call(message, 'text')).toBe(false)
	})

	it('roundtrips byte fields through JSON and preserves requested array output', () => {
		const message = proto.Message.ImageMessage.fromObject({ fileSha256: 'AAEC/w==' })
		const encoded = proto.Message.ImageMessage.encode(message).finish()
		const decoded = proto.Message.ImageMessage.decode(encoded)
		expect(decoded.toJSON().fileSha256).toBe('AAEC/w==')
		expect(proto.Message.ImageMessage.toObject(decoded, { bytes: Array }).fileSha256).toEqual([0, 1, 2, 255])
	})

	it('reports the offending field for invalid arrays and nested messages', () => {
		expect(() => proto.BotModeSelectionMetadata.fromObject({ mode: 'REASONING_MODE' })).toThrow(
			'.proto.BotModeSelectionMetadata.mode: array expected'
		)
		expect(() => proto.WebMessageInfo.fromObject({ message: 1 })).toThrow(
			'.proto.WebMessageInfo.message: object expected'
		)
	})
})
