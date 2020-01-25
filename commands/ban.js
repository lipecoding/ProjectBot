const Discord = require ("discord.js")
module.exports.run = async (client,  message , args) => {

    message.delete()
    
    var DBuser;
    if (message.mentions.members.size > 0) {
        if (/<@!?[\d]{18}>/.test(args[0]) && args[0].length <= 22) {
            DBuser = message.mentions.members.first();
        }
    } else if (/[\d]{18}/.test(args[0]) && args[0].length === 18) {
        DBuser = message.guild.members.get(args[0]) || args[0];
    } else {
        message.channel.send("Mencione alguém do servidor ou use o ID");
        return 0;
    }

	if (!message.member.hasPermission("BAN_MEMBERS", false, true, true)) {
		message.channel.send("Você não tem permissão para banir alguém!")
		return 0;
	}

	if (!message.guild.me.hasPermission("BAN_MEMBERS", false, true)) {
		message.channel.send("Eu não tenho permissão para banir alguém!")
		return 0;
	}

	if (DBuser.id === client.user.id) {
		message.channel.send("Você não pode me banir!")
		return 0;
	}

	if (DBuser.id === message.author.id) {
		message.channel.send("Você não pode se banir")
		return 0;
	}
	let dbEx = message.member.highestRole,
    dbEm = DBuser.highestRole,
    clientRole = message.guild.member(client.user.id).highestRole

    if (clientRole.comparePositionTo(dbEm) <= 0) {
    	message.channel.send("Eu não tenho permissão para banir este usuário!")
    	return 0;
    }
    
    if (dbEx.comparePositionTo(dbEm) <= 0) {
    	message.channel.send("O usuário tem um cargo maior ou igual que o seu!")
    	return 0;
    }

    let dbMotivo = args.join(" ").slice(22)
    if (!dbMotivo) {
    	dbMotivo = `O motivo não foi informado`
    }

    var embed = new Discord.RichEmbed()
    .setDescription(`Você tem certeza de banir o\n **Usuário:** \`${DBuser.user.tag}\`\n **Motivo:** \`${dbMotivo}\`\n\n _**Se sim, basta clicar na reação**_ :white_check_mark:`)
    .setColor("RED")
    message.channel.send(embed).then(async dbmsg => {
        dbmsg.delete(60000)
    	await dbmsg.react("✅")
        await dbmsg.react("❌")
        const db = await dbmsg.awaitReactions((r, user) => user.id === message.author.id, { max: 1, time: 60000, errors: ['time'] });
        if (db) {
            let r = db.first()
            if (r.emoji.name === "✅") {
                dbmsg.delete()
                message.guild.member(DBuser).ban(dbMotivo);
                let embeddb = new Discord.RichEmbed()
                .setAuthor(`${DBuser.user.tag} | BANIDO`, DBuser.user.avatarURL)
                .setDescription(`:pencil: Quebrou as regras da ${message.guild.name} e foi banido\n **Author:** \`${message.author.tag}\`\n **Banido:** \`${DBuser.user.tag}\`\n **Motivo:** \`${dbMotivo}\`` )
                .setFooter(`ID do usuário: ${DBuser.user.id}`)
                .setColor("RED")
                message.channel.send(embeddb)
            }

            if (r.emoji.name === "❌") {
                dbmsg.delete()
            }
        }
    })
}