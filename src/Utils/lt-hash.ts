import { hkdf } from './crypto'

/**
 * LT Hash is a summation based hash algorithm that maintains the integrity of a piece of data
 * over a series of mutations. You can add/remove mutations and it'll return a hash equal to
 * if the same series of mutations was made sequentially.
 */
export const LT_HASH_ANTI_TAMPERING = {
	subtractThenAdd(base: Uint8Array, subtract: Uint8Array[], add: Uint8Array[]): Uint8Array {
		if (base.byteLength !== 128) {
			throw new RangeError('App-state integrity hash must contain 128 bytes')
		}

		const result = Uint8Array.from(base)
		const hash = new DataView(result.buffer)
		const apply = (values: Uint8Array[], sign: 1 | -1) => {
			for (const value of values) {
				const expanded = hkdf(value, 128, { info: 'WhatsApp Patch Integrity' })
				const points = new DataView(expanded.buffer, expanded.byteOffset, expanded.byteLength)
				for (let offset = 0; offset < result.byteLength; offset += 2) {
					hash.setUint16(offset, hash.getUint16(offset, true) + sign * points.getUint16(offset, true), true)
				}
			}
		}

		apply(subtract, -1)
		apply(add, 1)
		return result
	}
}
