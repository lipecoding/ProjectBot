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
        let role = message.mentions.roles.first();
    
    if(!role) {
         message.author.send("Nenhum Cargo selecionado!");
        return;
    }
    let msg = args.slice(1).join(" ")
    if(!msg) {
        message.author.send("Faltou a mensagem!");
        return;
    }
    role.members.forEach(member => {
        setTimeout(function() {
            if(member.id == client.user.id) return;
            console.log(`DMing ${member.user.username}`);
            let embed = new Discord.RichEmbed()
            .setAuthor("Project RolePlay")
            .setTitle("Anuncio!")
            .addField("Mensagem:", msg)
            member.send(embed);
        });
    });
}
