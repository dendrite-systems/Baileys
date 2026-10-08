import { readFileSync, writeFileSync } from 'node:fs'

const file = new URL('./index.js', import.meta.url)
const content = readFileSync(file, 'utf8')
	.replace(/import \* as (\$protobuf) from/g, 'import $1 from')
	.replace(/(['"])protobufjs\/minimal(['"])/g, '$1protobufjs/minimal.js$2')
writeFileSync(file, content)
