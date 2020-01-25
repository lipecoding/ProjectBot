const Discord = require("discord.js");
const config = require("./config.json");
const Enmap = require("enmap");
const fs = require("fs");
const client = new Discord.Client();
const sqlcfg = require("./sqlcfg.json")
var mysql = require('mysql');

var cnt = mysql.createConnection(sqlcfg);

cnt.connect(err =>{
	if(err) throw err;
	console.log("SQL ON!")
})

client.config = config;

fs.readdir("./events/", (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
	  const event = require(`./events/${file}`);
	  let eventName = file.split(".")[0];
	  client.on(eventName, event.bind(null, client));
	});
});
  
client.commands = new Enmap();
  
  fs.readdir("./commands/", (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
	  if (!file.endsWith(".js")) return;
	  let props = require(`./commands/${file}`);
	  let commandName = file.split(".")[0];
	  console.log(`carregando ${commandName}`);
	  client.commands.set(commandName, props);
	});
});

client.login(config.token);