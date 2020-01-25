const Discord = require('discord.js');
const client = new Discord.Client();
module.exports.run = (client, message, args) => {
    
    if (!message.member.hasPermission("ADMINISTRATOR", false, true, true)) {
        message.channel.send("⚠️ Você não tem este poder!")
        return 0;
    }
    
    if (!message.guild.me.hasPermission("ADMINISTRATOR", false, true)) {
      message.channel.send("⚠️ Você não me deu este poder!")
      return 0;
    }
  
  message.delete().catch();

 let sugestao = args.join(" ");
 if (!sugestao) return message.reply("insira sua mensagem.")

 let embed = new Discord.RichEmbed()
 .setColor("#0051FF")
 .addField("**AVISO**", `${sugestao}`)
 .setFooter(`AVISO criada por: ${message.author.tag}`, `${message.author.avatarURL}`)
 .setTimestamp(new Date())

  message.delete();
 
  message.channel.send(embed);
}