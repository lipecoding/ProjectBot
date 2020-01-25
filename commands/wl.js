const Discord = require("discord.js");
const mysql = require('mysql'); 
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'vrp'
});
const client = new Discord.Client();
module.exports.run = async(bot, message, channels) => {


  message.channel.send({embed: {description:`${message.author}, Enviei uma mensagem para você no privado.`}}).then(msg => msg.delete(9000));
	message.delete().catch();
	await message.author.createDM();

    let embed1 = new Discord.RichEmbed()
    .setTitle(`${message.guild.name} | White List`)
    .setDescription("◾| Digite o `Ok` Para começar!")
    message.author.send(embed1)

    var ok = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { time: 10000 * 50, max: 1});
		ok.on('collect', r => {
		if (r.content.toLowerCase() == "ok") {
            let embed2 = new Discord.RichEmbed()
            .setTitle(`${message.guild.name} | White List`)
            .setDescription(`◾| Qual seu passaporte(ID)?`)
            message.author.send(embed2);

            var tazer1 = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { time: 10000 * 50, max: 1 });
            tazer1.on('collect', r => {
                let id = r.content;
                let embed3 = new Discord.RichEmbed()
                .setTitle(`${message.guild.name} | White List`)
                .setDescription(`◾| Idade?`)
                message.author.send(embed3);

                var tazer2 = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { time: 10000 * 50, max: 1 });
                tazer2.on('collect', r => {
                    let tel = r.content;
                    let embed4 = new Discord.RichEmbed()
                    .setTitle(`${message.guild.name} | White List`)
                    .setDescription(`◾| Qual seu nome no RP?`)
                    message.author.send(embed4);

                    var tazer3 = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { time: 10000 * 50, max: 1 });
                        tazer3.on('collect', r => {
                        let crime = r.content;
                        let embed5 = new Discord.RichEmbed()
                        .setTitle(`${message.guild.name} | White List`)
                        .setDescription(`◾| Quanto tempo de RP?`)
                        message.author.send(embed5);

                        var tazer4 = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { time: 10000 * 50, max: 1 });
                            tazer4.on('collect', r => {
                            let tempo = r.content;
                            let embed6 = new Discord.RichEmbed()
                            .setTitle(`${message.guild.name} | White List`)
                            .setDescription(`◾| Qual sua história de personagem(**minimo de 3 linhas**)?`)
                            message.author.send(embed6);

                            var tazer5 = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { time: 10000 * 50, max: 1 });
                                tazer5.on('collect', r => {
                                let reu = r.content;
                                let embed7 = new Discord.RichEmbed()
                                .setTitle(`${message.guild.name} | White List`)
                                .setDescription("◾| *Para enviar sua ficha digite ** `Confirmar`, **para cancelar digite `Cancelar`**.")
                                message.author.send(embed7);

                                var confirm = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { time: 10000 * 50, max: 1});
			 				    confirm.on('collect', r => {
                                if (r.content.toLowerCase() == "cancelar") {
                                    message.author.send({embed: {description: "cancelado."}});
                                };
			 					if (r.content.toLowerCase() == "confirmar") {
			 						message.author.send({embed: {description: " Sua WL foi `enviada`. Aguarde ela ser analizada e Adicione ao seu apelido no discord seu id/passaporte."}});
			 						let servericon = message.guild.iconURL;
			 						const ficha = new Discord.RichEmbed()
			 						.setTitle(`${message.guild.name} | White List`)
			 						.addField("Passaporte:", id)
			 						.addField("Idade:", tel)
			 						.addField("Nome do RP:", crime)
			 						.addField("Tempo de RP:", tempo)
			 						.addField("História:", reu)
                                    .addField("Discord:", `${message.author.tag}`)
									.addBlankField()
                                    .setFooter(`${message.guild.name} | White List`)
                                    .setTimestamp()
								
			 						.setThumbnail(servericon)
                                    .setColor('RANDOM')

									let canal = message.guild.channels.find(canal => canal.name === "📝ғᴏʀᴍᴜʟᴀʀɪᴏ-ᴡl-aprovação"); 
                                    let canal3 = message.guild.channels.find(canal => canal.name === "❌ʀᴇᴘʀᴏᴠᴀᴅᴏs"); 
			 						canal.send(ficha).then(async msg => {
			 						 	await msg.react("✔")
			 						 	await msg.react("❌")
			 						 	const collector = msg.createReactionCollector((r, u) => (r.emoji.name === '✔', '❌') && (u.id !== bot.user.id && u.id === message.author.id))
			 						 	collector.on("collect", r => {
			 						 	 	switch(r.emoji.name) {
			 						 	 		case '✔':
                                            message.author.createDM().then(dm => dm.send({embed: {description: "Sua ficha foi aceita!" }}))

                                            connection.query(`UPDATE vrp_users SET whitelisted = '1' WHERE id = '${id}'`, (err, rows) => {
                                            });

                                            message.member.addRole(message.guild.roles.find(role => role.name === "Cidadão"));
			 						 	 		break;

			 						 	 		case '❌':
			 						 	 	message.author.createDM().then(dm => dm.send({embed: {description: "Sua WL foi recusada, tente novamente!" }}))
                                            const reprovados = new Discord.RichEmbed()
			 						        .setTitle(`${message.guild.name} | Reprovado`)
			 						        .addField("Discord: ", `${message.author.tag}` )
			 						        .addField("Id:", id)
                                            .addField(`${message.author.tag} Tente Novamente!`)
									        .addBlankField()
                                            .setFooter(`${message.guild.name} | Reprovado`)
                                            .setTimestamp()
								
			 						        .setThumbnail(servericon)
                                            .setColor('RANDOM')
                          
                                            canal3.send(reprovados)
                                            break;
                                               }
                                           })   
                                        })
                                    }
                                })
                            })
                        })
                    })
                })
            })
        }
    })





}
