import { proto } from '../../../WAProto/index.js'
import { decodeSyncdPatch, newLTHashState } from '../../Utils/chat-utils'
import { hkdf, md5 } from '../../Utils/crypto'
import { LT_HASH_ANTI_TAMPERING } from '../../Utils/lt-hash'
import appStateFixture from './fixtures/app-state-rust.json'
import hashFixture from './fixtures/lt-hash-rust.json'

describe('runtime crypto compatibility', () => {
	it('matches the RFC 5869 SHA-256 vector with empty salt and info', () => {
		const result = hkdf(Buffer.alloc(22, 0x0b), 42, {})
		expect(Buffer.from(result).toString('hex')).toBe(
			'8da4e775a563c18f715f802a063c5a31b8a11f5c5ee1879ec3454e5f3c738d2d9d201395faa4b61a96c8'
		)
	})

	it('preserves empty expansion and rejects oversized expansion', () => {
		expect(hkdf(Buffer.alloc(32), 0, {})).toEqual(new Uint8Array())
		expect(() => hkdf(Buffer.alloc(32), 8161, {})).toThrow()
	})

	it('matches the MD5 reference vector', () => {
		expect(Buffer.from(md5(Buffer.from('abc'))).toString('hex')).toBe('900150983cd24fb0d6963f7d28e17f72')
	})

	it('matches Rust integrity hashing with subtraction and 16-bit overflow', () => {
		const base = Buffer.from(hashFixture.base, 'hex')
		const result = LT_HASH_ANTI_TAMPERING.subtractThenAdd(
			base,
			hashFixture.subtract.map(value => Buffer.from(value, 'hex')),
			hashFixture.add.map(value => Buffer.from(value, 'hex'))
		)
		expect(Buffer.from(result).toString('hex')).toBe(hashFixture.expected)
		expect(base.toString('hex')).toBe(hashFixture.base)
	})

	it('cancels added mutations and respects sliced buffer offsets', () => {
		const base = Buffer.alloc(132, 0xff).subarray(2, 130)
		const values = [Buffer.from('first'), Buffer.from('second')]
		const added = LT_HASH_ANTI_TAMPERING.subtractThenAdd(base, [], values)
		expect(Buffer.from(LT_HASH_ANTI_TAMPERING.subtractThenAdd(added, values, []))).toEqual(base)
	})

	it('rejects an invalid integrity hash length', () => {
		expect(() => LT_HASH_ANTI_TAMPERING.subtractThenAdd(Buffer.alloc(127), [], [])).toThrow(RangeError)
	})

	it('decrypts and authenticates an app-state patch produced by the Rust-backed release', async () => {
		const patch = proto.SyncdPatch.fromObject(appStateFixture.patch)
		const indexes: string[][] = []
		const result = await decodeSyncdPatch(
			patch,
			'regular_low',
			newLTHashState(),
			async keyId =>
				keyId === appStateFixture.keyId ? { keyData: Buffer.from(appStateFixture.keyData, 'hex') } : null,
			mutation => {
				indexes.push(mutation.index)
				expect(mutation.syncAction.value?.archiveChatAction?.archived).toBe(true)
			},
			true
		)
		expect(indexes).toEqual([appStateFixture.index])
		expect(result.hash.toString('hex')).toBe(appStateFixture.hash)
	})

	it('rejects a changed patch MAC from the Rust-backed release', async () => {
		const patch = proto.SyncdPatch.fromObject(appStateFixture.patch)
		patch.patchMac = Buffer.alloc(32)
		await expect(
			decodeSyncdPatch(
				patch,
				'regular_low',
				newLTHashState(),
				async () => ({ keyData: Buffer.from(appStateFixture.keyData, 'hex') }),
				() => {},
				true
			)
		).rejects.toThrow('Invalid patch mac')
	})
})
