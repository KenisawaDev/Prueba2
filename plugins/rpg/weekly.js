import db from '../../lib/database.js'

const rewards = {
	exp: 35000,
	money: 27000,
	potion: 7,
	wood: 4,
	rock: 4,
	string: 3,
	iron: 3,
	sand: 5,
	bibitmangga: 150,
	bibitapel: 150,
	bibitpisang: 150,
	bibitjeruk: 150,
	bibitanggur: 150,
}
const cooldown = 604800000
let handler = async (m) => {
	let user = db.data.users[m.sender]
	if (new Date - user.lastweekly < cooldown) throw `¡Ya has reclamado este reclamo semanal!, espera *${((user.lastweekly + cooldown) - new Date()).toTimeString()}*`
	let text = ''
	for (let reward of Object.keys(rewards)) {
		if (!(reward in user)) continue
		user[reward] += rewards[reward]
		text += `*+${rewards[reward]}* ${global.rpg.emoticon(reward)}${reward}\n`
	}
	m.reply(text.trim())
	user.lastweekly = new Date * 1
}

handler.menufun = ['semanal']
handler.tagsfun = ['rpg']
handler.command = /^(semanal)$/i

handler.cooldown = cooldown

export default handler
