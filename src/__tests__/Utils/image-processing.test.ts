import { Jimp } from 'jimp'
import { Readable } from 'stream'
import { extractImageThumb, generateProfilePicture } from '../../Utils/messages-media'

describe('optional JavaScript image processing', () => {
	it('creates a JPEG thumbnail from a stream and preserves original dimensions', async () => {
		const source = await new Jimp({ width: 80, height: 40, color: 0xff0000ff }).getBuffer('image/png')
		const result = await extractImageThumb(Readable.from(source), 20)
		const thumbnail = await Jimp.read(result.buffer)
		expect(result.original).toEqual({ width: 80, height: 40 })
		expect({ width: thumbnail.width, height: thumbnail.height }).toEqual({ width: 20, height: 10 })
	})

	it('crops a profile picture to the requested dimensions without Sharp', async () => {
		const source = await new Jimp({ width: 80, height: 40, color: 0xff0000ff }).getBuffer('image/png')
		const result = await generateProfilePicture(source, { width: 24, height: 24 })
		const picture = await Jimp.read(result.img)
		expect({ width: picture.width, height: picture.height }).toEqual({ width: 24, height: 24 })
	})
})
