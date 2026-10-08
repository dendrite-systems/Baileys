import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import protobuf from 'protobufjs'

const root = await protobuf.load(fileURLToPath(new URL('./WAProto.proto', import.meta.url)))
root.resolveAll()
const scalars = new Set([
	'double',
	'float',
	'uint32',
	'fixed32',
	'int32',
	'sint32',
	'sfixed32',
	'uint64',
	'int64',
	'sint64',
	'fixed64',
	'sfixed64',
	'bytes',
	'string',
	'bool'
])
const definitions = []
let oneofCount = 0
function visit(namespace) {
	if (namespace instanceof protobuf.Type) {
		const name = namespace.fullName.slice(1)
		const fields = namespace.fieldsArray
		oneofCount += namespace.oneofsArray.length
		const descriptors = fields.map(field => {
			if (field.required || field.delimited) throw Error('Review required or group wire fields: ' + field.fullName)
			if (field.repeated && !field.packed) throw Error('Review unpacked wire fields: ' + field.fullName)
			if (field.map && !['uint32', 'string'].includes(field.keyType))
				throw Error('Review map key type: ' + field.fullName)
			if (field.options?.default !== undefined) throw Error('Review conversion defaults for ' + field.fullName)
			const type = field.resolvedType ? field.resolvedType.fullName.slice(1) : JSON.stringify(field.type)
			if (!field.resolvedType && !scalars.has(field.type)) throw Error('Unsupported scalar: ' + field.type)
			const rule = field.map ? 'map' : field.repeated ? 'array' : null
			// One description serves conversion and wire codecs: name, type, number, collection, oneof, map key.
			const parts = [JSON.stringify(field.name), type, field.id]
			if (rule || field.partOf) parts.push(rule ? JSON.stringify(rule) : 'undefined')
			if (field.partOf || field.map) parts.push(field.partOf ? JSON.stringify(field.partOf.name) : 'undefined')
			if (field.map) parts.push(JSON.stringify(field.keyType))
			return '[' + parts.join(', ') + ']'
		})
		const order = fields
			.map((field, index) => ({ id: field.id, index }))
			.sort((a, b) => a.id - b.id)
			.map(item => item.index)
		const orderArg = order.some((index, position) => index !== position) ? ', ' + JSON.stringify(order) : ''
		definitions.push('[' + name + ', ' + JSON.stringify(name) + ', [' + descriptors.join(', ') + ']' + orderArg + ']')
	}
	for (const child of namespace.nestedArray || []) visit(child)
}
visit(root)
const file = new URL('./index.js', import.meta.url)
let source = readFileSync(file, 'utf8')
if (/\.(fromObject|encode|decode) =/.test(source))
	throw Error('Generate constructors without conversion or wire codecs first')
// These accessors are derived from the field descriptions above. Fail closed if
// a future protobufjs generator changes the expected shape of its static output.
let removedOneofs = 0
source = source
	.replace(
		/\s*(?:\/\/ Virtual OneOf for proto3 optional field\s*)?Object\.defineProperty\(\w+\.prototype, "[^"]+", \{\s*get: \$util\.oneOfGetter\(\$oneOfFields = \[[^\]]+\]\),\s*set: \$util\.oneOfSetter\(\$oneOfFields\)\s*\}\);/g,
		() => {
			removedOneofs++
			return ''
		}
	)
	.replace(/\s*let \$oneOfFields;/g, '')
if (removedOneofs !== oneofCount || /\$oneOfFields/.test(source)) {
	throw Error('Review generated oneof accessors before compacting them')
}
writeFileSync(
	file,
	'import { installMessageHelpers } from "./message-helpers.js";\n' +
		source +
		'\ninstallMessageHelpers([\n' +
		definitions.join(',\n') +
		'\n]);\n'
)
