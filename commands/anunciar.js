const Discord = require ("discord.js")
exports.run = async (client, message, args) => {

    message.delete().catch();
    
    if (!message.member.hasPermission("ADMINISTRATOR", false, true, true)) {
        message.channel.send("⚠️ Você não tem este poder!")
        return 0;
    }
    
    if (!message.guild.me.hasPermission("ADMINISTRATOR", false, true)) {
        message.channel.send("⚠️ Você não me deu este poder!")
        return 0;
    }
        let dmGuild = message.guild;
        let msg = args.join(' ');

        if(!msg || msg.length <= 0) return message.author.send("Você não enviou a mensagem!");

        dmGuild.members.forEach(member => {
            setTimeout(function(){
                if(member.id == client.user.id) return;
                console.log(`DMing ${member.user.username}`);
                let embed = new Discord.RichEmbed()
                .setAuthor("Project RolePlay")
                .setTitle("Anuncio!")
                .addField("Mensagem:", msg)
                member.send(embed);
            }, 30000);
        });
}