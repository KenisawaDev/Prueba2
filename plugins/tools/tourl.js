import uploadImage from '../../lib/uploadImage.js'
import { niceBytes } from '../../lib/func.js'

let handler = async (m, { usedPrefix, command }) => {
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if (!mime || mime == 'conversation') return m.reply('que desea subir ?')
	let img = await q.download?.()
	let out = await uploadImage(img, true)
	if (!out) throw 'Medio no admitido.'
	if (typeof out === 'string' || out instanceof String) m.reply(`[ LINK ]\n${out}`)
	else {
		out = out.result
		let txt = `*[ Archivo subido ]*\n`
		+ `\n*host :* ${out.host}`
		+ `\n*Nombre :* ${out.filename}`
		+ `\n*Tamaño :* ${isNaN(out.filesize) ? out.filesize : niceBytes(out.filesize)}`
		+ `\n*Link :* _${out.url}_`
		m.reply(txt)
	}
}

handler.help = ['tourl','subir']
handler.tags = ['tools']
handler.command = /^(to(url|link)|subir)$/i

handler.limit = true

export default handler