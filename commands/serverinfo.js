const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    message.delete().catch();
    
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("Server info")
        .setThumbnail()
        .setAuthor(`${message.guild.name} info`, message.guild.iconURL)
        .addField("**Nome Server: **", `${message.guild.name}`, true)
        .addField("**Dono Do Server: **", `${message.guild.owner}`, true)
        .addField("**Membros Do Discord: **", `${message.guild.memberCount}`, true)
        .addField("**Contagem De Funçao: **", `${message.guild.roles.size}`, true)
        .setFooter(`Comando Solicitador Por: ${message.author.username}`, message.author.displayAvatarURL);
message.channel.send({embed});
}