import protobuf from 'protobufjs/minimal.js'
import { proto } from '../../WAProto/index.js'

// Wire fixtures below come from the standard protobufjs bindings for WAProto.proto.
describe('shared protobuf wire codecs', () => {
	it('encodes packed numbers and accepts packed and unpacked input', () => {
		const Type = proto.ADVKeyIndexList
		expect(Buffer.from(Type.encode({ validIndexes: [1, 128] }).finish()).toString('hex')).toBe('2203018001')
		for (const wire of ['2203018001', '2001208001', '220101208001']) {
			expect(Type.decode(Buffer.from(wire, 'hex')).validIndexes).toEqual([1, 128])
		}
	})

	it('retains all 64 bits and unknown negative enum values', () => {
		const Type = proto.ADVDeviceIdentity
		const max = Type.fromObject({ timestamp: '18446744073709551615' })
		expect(Buffer.from(Type.encode(max).finish()).toString('hex')).toBe('10ffffffffffffffffff01')
		expect(Type.toObject(Type.decode(Type.encode(max).finish()), { longs: String }).timestamp).toBe(
			'18446744073709551615'
		)
		const wire = Buffer.from('20f9ffffffffffffffff01', 'hex')
		const unknown = Type.decode(wire)
		expect(unknown.accountType).toBe(-7)
		expect(Buffer.from(Type.encode(unknown).finish())).toEqual(wire)
	})

	it('preserves empty optional values and detached codec calls', () => {
		const { encode, decode } = proto.Message
		expect(encode({}).finish()).toHaveLength(0)
		expect(Buffer.from(encode({ conversation: '' }).finish()).toString('hex')).toBe('0a00')
		expect(Object.hasOwnProperty.call(decode(Buffer.from('0a00', 'hex')), 'conversation')).toBe(true)
		expect(Object.hasOwnProperty.call(decode(Buffer.alloc(0)), 'conversation')).toBe(false)
	})

	it('reads nested fields within the supplied reader length', () => {
		const wire = Buffer.from('0a091a076669787475726512070a0568656c6c6f', 'hex')
		const writer = protobuf.Writer.create().uint32(7)
		expect(proto.WebMessageInfo.encode({ key: { id: 'fixture' }, message: { conversation: 'hello' } }, writer)).toBe(
			writer
		)
		expect(Buffer.from(writer.finish())).toEqual(Buffer.concat([Buffer.from([7]), wire]))
		const reader = protobuf.Reader.create(Buffer.concat([writer.finish(), Buffer.from([255])]))
		expect(reader.uint32()).toBe(7)
		const decoded = proto.WebMessageInfo.decode(reader, wire.length)
		expect(decoded).toBeInstanceOf(proto.WebMessageInfo)
		expect(decoded.message).toBeInstanceOf(proto.Message)
		expect(decoded.message?.conversation).toBe('hello')
		expect(reader.pos).toBe(wire.length + 1)
	})

	it('skips future fields and rejects truncated varints', () => {
		const writer = protobuf.Writer.create()
			.uint32(7994)
			.bytes(Buffer.from([1, 2, 3]))
			.uint32(10)
			.string('hello')
		expect(proto.Message.decode(writer.finish()).conversation).toBe('hello')
		expect(() => proto.ADVDeviceIdentity.decode(Buffer.from([8, 128]))).toThrow(RangeError)
	})

	it('decodes dangerous map keys as data and retains missing map-entry defaults', () => {
		const Type = proto.SyncActionValue.MusicUserIdAction
		const wire = Buffer.from('12110a095f5f70726f746f5f5f120473616665', 'hex')
		const message = Type.decode(wire)
		expect(Object.getPrototypeOf(message.musicUserIdMap)).toBe(Object.prototype)
		expect(Object.hasOwnProperty.call(message.musicUserIdMap, '__proto__')).toBe(true)
		expect(message.musicUserIdMap['__proto__']).toBe('safe')
		expect(Buffer.from(Type.encode(message).finish())).toEqual(wire)
		expect(Type.decode(Buffer.from([18, 0])).musicUserIdMap).toEqual({ '': '' })
	})

	it('enforces the reader nesting limit across nested message types', () => {
		const previous = protobuf.Reader.recursionLimit
		try {
			protobuf.Reader.recursionLimit = 1
			const wire = proto.Message.encode({ ephemeralMessage: { message: { conversation: 'nested' } } }).finish()
			expect(() => proto.Message.decode(wire)).toThrow('maximum nesting depth exceeded')
		} finally {
			protobuf.Reader.recursionLimit = previous
		}
	})
})
