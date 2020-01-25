const Discord = require('discord.js');
const client = new Discord.Client();
module.exports.run = (client, message, args) => {

    message.delete().catch();

 let sugestao = args.join(" ");
 if (!sugestao) return message.reply("insira sua sugestão.")

 let embed = new Discord.RichEmbed()
 .setColor("#0051FF")
 .addField("**ReportBug**", `${sugestao}`)
 .setFooter(`ReportBug enviada por: ${message.author.tag}`, `${message.author.avatarURL}`)
 .setTimestamp(new Date())

 let canal = message.guild.channels.find(canal => canal.name === "💡sugestões");
 if (!canal) return message.reply("não existe nenhum canal para enviar a sua sugestão.");

 message.delete();
 canal.send(embed);
 message.reply({embed: {description: "Sua reportbug foi enviada com sucesso! Obrigado!" }});
}