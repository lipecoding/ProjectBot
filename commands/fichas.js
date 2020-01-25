const Discord = require("discord.js");
const client = new Discord.Client();
module.exports.run = async(bot, message, channels) => {

    message.delete().catch();

    message.channel.send({embed: {description:`${message.author}, Enviei uma mensagem para você no privado.`}}).then(msg => msg.delete(9000));
	let member = message.author;
	message.delete().catch();
	await message.author.createDM();

    let embed1 = new Discord.RichEmbed()
    .setTitle(`${message.guild.name} | Ficha Criminal`)
    .setDescription("◾| Digite o `Ok` Para começar!")
    message.author.send(embed1)

    var ok = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { time: 10000 * 50, max: 1});
		ok.on('collect', r => {
		if (r.content.toLowerCase() == "ok") {
            let embed2 = new Discord.RichEmbed()
            .setTitle(`${message.guild.name} | Ficha Criminal`)
            .setDescription(`◾| Qual passaporte do suspeito?`)
            message.author.send(embed2);

            var tazer1 = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { time: 10000 * 50, max: 1 });
            tazer1.on('collect', r => {
                let id = r.content;
                let embed3 = new Discord.RichEmbed()
                .setTitle(`${message.guild.name} | Ficha Criminal`)
                .setDescription(`◾| Qual telefone do suspeito?`)
                message.author.send(embed3);

                var tazer2 = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { time: 10000 * 50, max: 1 });
                tazer2.on('collect', r => {
                    let tel = r.content;
                    let embed4 = new Discord.RichEmbed()
                    .setTitle(`${message.guild.name} | Ficha Criminal`)
                    .setDescription(`◾| Qual suspeita/crime cometido?`)
                    message.author.send(embed4);

                    var tazer3 = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { time: 10000 * 50, max: 1 });
                        tazer3.on('collect', r => {
                        let crime = r.content;
                        let embed5 = new Discord.RichEmbed()
                        .setTitle(`${message.guild.name} | Ficha Criminal`)
                        .setDescription(`◾| Quanto tempo de prisão?`)
                        message.author.send(embed5);

                        var tazer4 = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { time: 10000 * 50, max: 1 });
                            tazer4.on('collect', r => {
                            let tempo = r.content;
                            let embed6 = new Discord.RichEmbed()
                            .setTitle(`${message.guild.name} | Ficha Criminal`)
                            .setDescription(`◾| Qual Réu(1°, 2°, 3°)?`)
                            message.author.send(embed6);

                            var tazer5 = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { time: 10000 * 50, max: 1 });
                                tazer5.on('collect', r => {
                                let reu = r.content;
                                let embed7 = new Discord.RichEmbed()
                                .setTitle(`${message.guild.name} | Ficha Criminal`)
                                .setDescription("◾| *Para enviar sua ficha digite ** `Confirmar`, **para cancelar digite `Cancelar`**.")
                                message.author.send(embed7);

                                var confirm = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { time: 10000 * 50, max: 1});
			 				    confirm.on('collect', r => {
                                if (r.content.toLowerCase() == "cancelar") {
                                    message.author.send({embed: {description: "cancelado."}});
                                };
			 					if (r.content.toLowerCase() == "confirmar") {
			 						message.author.send({embed: {description: " Sua ficha foi `enviada`. Aguarde ela ser analizada."}});
			 						let servericon = message.guild.iconURL;
			 						const ficha = new Discord.RichEmbed()
			 						.setTitle(`${message.guild.name} | Ficha Criminal`)
			 						.addField("Passaporte:", id)
			 						.addField("Telefone:", tel)
			 						.addField("Suspeita/Crime::", crime)
			 						.addField("Tempo de prisão:", tempo)
			 						.addField("Réu:", reu)
									.addBlankField()
                                    .setFooter(`${message.guild.name} | Ficha Criminal`)
                                    .setTimestamp()
								
			 						.setThumbnail(servericon)
                                    .setColor('RANDOM')

									let canal = message.guild.channels.find(canal => canal.name === "📑ficha-criminal"); 
			 						canal.send(ficha).then(async msg => {
			 						 	await msg.react("✔")
			 						 	await msg.react("❌")
			 						 	const collector = msg.createReactionCollector((r, u) => (r.emoji.name === '✔', '❌') && (u.id !== bot.user.id && u.id === message.author.id))
			 						 	collector.on("collect", r => {
			 						 	 	switch(r.emoji.name) {
			 						 	 		case '✔':
			 						 	 		message.author.createDM().then(dm => dm.send({embed: {description: "Sua ficha foi aceita!" }}))
			 						 	 		break;

			 						 	 		case '❌':
			 						 	 		message.author.createDM().then(dm => dm.send({embed: {description: "Sua ficha foi recusada!" }}))
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
