import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
  if (!text) throw `y el link?\nEj: *${usedPrefix}${command} https://www.instagram.com/reel/CsC2PQCNgM1/?igshid=NTc4MTIwNjQ2YQ==*`
  m.reply(wait)
  try {
    let anu = await (await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${api.lol}&url=${text}`)).json()
    let cap = `_Aqui tiene su video >,<_`
    
    for ( let i of anu.result ) {
      await conn.sendMsg(m.chat, { video: { url: i }, caption: cap }, { quoted: m })
    }
  } catch (e) {
    m.reply(`Se produjo un error, no se pueden recuperar datos de la URL/enlace que ingresó`)
  }
}
handler.menudownload = ['instagram <url>']
handler.tagsdownload = ['search']
handler.command = /^(instagram|igdl|ig|instagramdl)$/i
handler.limit = true

export default handler