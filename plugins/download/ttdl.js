import fetch from 'node-fetch'

let handler = async (m, {conn, usedPrefix, command, text}) => {
    if (!text) throw `Link?\nEj: *${usedPrefix}${command} https://vt.tiktok.com/ZSwWCk5o/*`
    m.reply(wait)
    try {
        let anu = await(await fetch(`https://api.lolhuman.xyz/api/tiktok2?apikey=${api.lol}&url=${text}`)).json()
           conn.sendMsg(m.chat, { video: { url: anu.result } }, {quoted: m})
          // conn.sendMesaage(m.chat, { text : `Si quieres convertir este video a un audio escribe *${usedPrefix}tovn* marcando el video` }, { quoted : vidtiktok })
    } catch (e) {
        m.reply('URL no válida/servidor caído')
    }
    
}

handler.menudownload = ['tiktok <url>']
handler.tagsdownload = ['search']
handler.command = /^(tiktok|ttdl|tt|tiktokdl)$/i

handler.limit = true

export default handler