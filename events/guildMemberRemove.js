const Discord = require ("discord.js")
module.exports = (client, member) => {
    /*let canal = member.guild.channels.find(canal => canal.name === `Membros:`);
    let Membros = member.guild.memberCount;
    canal.setName(`Membros:` + Membros)
    .then(result => console.log(result))
    .catch(error => console.log(error));*/

    let canal = member.guild.channels.find(canal => canal.name === "🏡lounge");

    let embed = new Discord.RichEmbed()
    .setAuthor(member.guild.name, member.user.displayAvatarURL)
    .setTitle(` Af ${member.user.tag} saiu ;-;`)
    .setDescription(`Saiu perdendo rs...`)
    .setFooter("Data de saida", client.user.displayAvatarURL)
    .setTimestamp();
    canal.send(embed);

 
}