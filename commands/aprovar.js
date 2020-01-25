const Discord = require ("discord.js")
exports.run = async (client, message, args) => {

    const msg = args.join(' ');

    const embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name)
    .setDescription(`Você Aprovou o id: ${msg}`);
    message.channel.send(embed)

    const sql = `UPDATE vrp_users SET whitelisted = '1' WHERE id = '${msg}'`;
    con.query(sql)
}
