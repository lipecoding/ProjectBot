const Discord = require ("discord.js")
module.exports.run = async (client,  message) => {

    message.delete().catch();

    const autor = new Discord.RichEmbed ()
    .setTitle('O meu criador é:')
    .addField('O gado do', `<@378655017298690049>`)
    .setColor('RANDOM')
    .setImage(`${Image.guild.owner}`)
    .setFooter("Gosto neh bb!")

    message.channel.send(autor)
}