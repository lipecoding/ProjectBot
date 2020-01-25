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
  
    let totalDelMsg = parseInt(args[0]) + 1;
    let apagadas = totalDelMsg - 1;
  
    async function clear() {
        try {
        message.delete();
        const fetched = await message.channel.fetchMessages({limit: totalDelMsg});
        message.channel.bulkDelete(fetched);
        message.reply(`✔️  ${apagadas} Mensagens apagadas.`);
        } catch(e) {
            return message.reply("🤔 Algo de errado não está certo!");
        }
    }
    clear();
}
