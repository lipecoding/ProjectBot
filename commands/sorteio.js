const Discord = require ("discord.js")
module.exports.run = async (client,  message, args) => {

    message.delete().catch();
    
    if (!message.guild.me.hasPermission("ADMINISTRATOR", false, true, true))
    return message.reply("⚠️ Você não tem este poder!");

    let msg = args.join(' ');
    if(!msg || msg.length <= 0) return message.author.send("Você não enviou a mensagem!");

    let mem = message.guild.members.random().user
    let embed = new Discord.RichEmbed()
                .setTitle(`Sorteio de ${msg} `)
                .addField("Membro sorteado:", mem.tag)
                .setFooter("Parabéns!")
                .setTimestamp()
                message.channel.send(embed);
}