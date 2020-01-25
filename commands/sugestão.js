const Discord = require('discord.js');
const client = new Discord.Client();
module.exports.run = (client, message, args) => {

    message.delete().catch();

 let sugestao = args.join(" ");
 if (!sugestao) return message.reply("insira sua sugestão.")

 let embed = new Discord.RichEmbed()
 .setColor("#0051FF")
 .addField("**Sugestão**", `${sugestao}`)
 .setFooter(`Sugestão enviada por: ${message.author.tag}`, `${message.author.avatarURL}`)
 .setTimestamp(new Date())

 let canal = message.guild.channels.find(canal => canal.name === "💡sugestões");
 if (!canal) return message.reply("não existe nenhum canal para enviar a sua sugestão.");

 message.delete();
 canal.send(embed).then(async msg => {
    await msg.react("✔")
    await msg.react("❌")
    const collector = msg.createReactionCollector((r, u) => (r.emoji.name === '✔', '❌') && (u.id !== client.user.id && u.id === message.author.id))
    collector.on("collect", r => {
         switch(r.emoji.name) {
             case '✔':
             message.author.createDM().then(dm => dm.send({embed: {description: "Sua sugestão foi aceita!" }}))
             break;

             case '❌':
             message.author.createDM().then(dm => dm.send({embed: {description: "Sua sugestão foi Recusada!" }}))
             break;
         }
    })
 })
 message.reply({embed: {description: "Sua sugestão foi enviada com sucesso!" }});
}