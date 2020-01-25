const Discord = require ("discord.js")
module.exports = (client, member) => {
	
	let canal = member.guild.channels.find(canal => canal.name === "🏡lounge");


	let avatar = member.user.avatarURL
	let embed = new Discord.RichEmbed()
		.setColor('RANDOM')
		.setThumbnail(avatar)
		.setTitle("**Project RolePlay**")
		.addField('Bem vindo(a)!', `Bem vindo(a) ${member} Ao servidor :)`)
		.setFooter(`Bom RolePlay e Leia as Regras!`)
		.addField('Você é o Visitante de numero:', member.guild.memberCount)
		.setDescription("Servidor novo caso ocorra BUGS entre em contato com um de nossos Admins e sera recompensado!")
		.setTimestamp()
    canal.send(embed);
    
	member.addRole(member.guild.roles.find(role => role.name === "Viajante"));
}