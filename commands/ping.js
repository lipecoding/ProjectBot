exports.run = async (client, message) => {
	message.delete().catch();
	
    const ms = await message.channel.send("Ping?");
	const clientms = ms.createdTimestamp - message.createdTimestamp;
	ms.edit('📡 Seu ping é: ' + clientms + 'ms / 🖥 Ping do bot com Server:' + Math.round(client.ping) + 'ms');
}