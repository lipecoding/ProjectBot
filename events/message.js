module.exports = (client, message) => {
  
  const sqlcfg = require("./sqlcfg.json")
  var mysql = require('mysql');

  var cnt = mysql.createConnection(sqlcfg);


  if (message.author.bot) return;
  if (message.content.indexOf(client.config.prefix) !== 0) return;

  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  const cmd = client.commands.get(command);

  if (!cmd) return;

  cmd.run(client, message, args, cnt);

  const reg = /(discord.gg|discordapp.com)\/(invite)?/ig
   
	if (reg.test(message.content.toLowerCase().replace(/\s+/g, ''))) {
	message.reply('você não pode divulgar outros servidores aqui!!').then(msg => {msg.delete(5000)})
	message.delete();
	}
};