// Shared equivalents of protobufjs's generated encoder/decoder. See LICENSE-protobufjs.
import protobuf from 'protobufjs/minimal.js'

const { Reader, Writer, util } = protobuf
const wireTypes = {
	double: 1,
	float: 5,
	int32: 0,
	uint32: 0,
	sint32: 0,
	fixed32: 5,
	sfixed32: 5,
	int64: 0,
	uint64: 0,
	sint64: 0,
	fixed64: 1,
	sfixed64: 1,
	bool: 0,
	string: 2,
	bytes: 2
}

function scalarType(type) {
	return typeof type === 'object' ? 'int32' : type
}

function wireType(type) {
	return typeof type === 'function' ? 2 : wireTypes[scalarType(type)]
}

function writeValue(writer, type, value) {
	if (typeof type === 'function') type.encode(value, writer.fork()).ldelim()
	else writer[scalarType(type)](value)
}

function readValue(reader, type, depth) {
	return typeof type === 'function'
		? type.decode(reader, reader.uint32(), undefined, depth + 1)
		: reader[scalarType(type)]()
}

function mapDefault(type) {
	if (typeof type === 'function') return null
	if (type === 'string') return ''
	if (type === 'bool') return false
	if (type === 'bytes') return []
	return 0
}

function encode(fields, message, writer) {
	writer ||= Writer.create()
	for (const [key, type, id, collection, , keyType] of fields) {
		const value = message[key]
		if (value == null) continue
		const wire = wireType(type)
		if (collection === 'array') {
			if (!value.length) continue
			if (wire !== 2) {
				writer.uint32(((id << 3) | 2) >>> 0).fork()
				for (let i = 0; i < value.length; i++) writer[scalarType(type)](value[i])
				writer.ldelim()
			} else {
				for (let i = 0; i < value.length; i++) writeValue(writer.uint32(((id << 3) | wire) >>> 0), type, value[i])
			}
		} else if (Object.hasOwnProperty.call(message, key)) {
			if (collection === 'map') {
				for (const mapKey of Object.keys(value)) {
					writer
						.uint32(((id << 3) | 2) >>> 0)
						.fork()
						.uint32(8 | wireTypes[keyType])
						[keyType](mapKey)
					writeValue(writer.uint32(16 | wire), type, value[mapKey])
					writer.ldelim()
				}
			} else writeValue(writer.uint32(((id << 3) | wire) >>> 0), type, value)
		}
	}
	return writer
}

function readMap(reader, message, key, type, keyType, depth) {
	if (message[key] === util.emptyObject) message[key] = {}
	const end = reader.uint32() + reader.pos
	let mapKey = mapDefault(keyType)
	let value = mapDefault(type)
	while (reader.pos < end) {
		const tag = reader.uint32()
		switch (tag >>> 3) {
			case 1:
				mapKey = reader[keyType]()
				break
			case 2:
				value = readValue(reader, type, depth)
				break
			default:
				reader.skipType(tag & 7, depth)
		}
	}
	if (mapKey === '__proto__') util.makeProp(message[key], mapKey)
	message[key][mapKey] = value
}

function decode(Message, fieldsById, reader, length, endTag, depth = 0) {
	if (!(reader instanceof Reader)) reader = Reader.create(reader)
	if (depth > Reader.recursionLimit) throw Error('maximum nesting depth exceeded')
	const end = length === undefined ? reader.len : reader.pos + length
	const message = new Message()
	while (reader.pos < end) {
		const tag = reader.uint32()
		if (tag === endTag) break
		const field = fieldsById[tag >>> 3]
		if (!field) {
			reader.skipType(tag & 7, depth)
			continue
		}
		const [key, type, , collection, , keyType] = field
		if (collection === 'map') readMap(reader, message, key, type, keyType, depth)
		else if (collection === 'array') {
			if (!(message[key] && message[key].length)) message[key] = []
			if (wireType(type) !== 2 && (tag & 7) === 2) {
				const packedEnd = reader.uint32() + reader.pos
				while (reader.pos < packedEnd) message[key].push(reader[scalarType(type)]())
			} else message[key].push(readValue(reader, type, depth))
		} else message[key] = readValue(reader, type, depth)
	}
	return message
}

// Conversion and wire operations retain the same field descriptions. The index
// holds references only; there is no reflection graph or runtime source compiler.
export function installWireCodecs(Message, fields) {
	const fieldsById = Object.create(null)
	for (const field of fields) fieldsById[field[2]] = field
	Message.encode = function (message, writer) {
		return encode(fields, message, writer)
	}
	Message.decode = function (reader, length, endTag, depth) {
		return decode(Message, fieldsById, reader, length, endTag, depth)
	}
}
