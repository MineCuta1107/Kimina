var express = require('express');
var http = require('http');
var app = express();

// Glitch Ping
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received > Bot Online 24 Jam");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);


// Request Listener
//var listener = app.listen(process.env.PORT, function() {
  console.log('Kimina Kekasih Dah siap Woi!!');//ASHIAPP
//});
setInterval(() => {
    http.get(`http://kimina-kekasih.glitch.me/`);
}, 280000);

const Discord = require("discord.js");
const TOKEN = process.env.BOT_TOKEN
const PREFIX = process.env.BOT_PREFIX
var bot = new Discord.Client()  

bot.on("ready", function() {
  function randStatus() {
  let status = [
   `>help || Music 24/7`,
  `Streaming 24/7`]; //SETTING STATUS BOT
    let rstatus = Math.floor(Math.random() * status.length);
    bot.user.setActivity(status[rstatus], {
          type: "Listening",
    });
  }
  setInterval(randStatus, 10000)
});
bot.on("message", function(message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(PREFIX)) return;

    let args = message.content.slice(PREFIX.length).trim().split(' ');
    let command = args[0].toLowerCase();
    try {
        let commands = require(`./commands/${command}.js`); // Run command folder
        commands.run(bot, message, args); // Runs [Client, Message, Args]
    } catch (e) {
        bot.channels.get("566251883744854016").send(e.stack); // Throws the error in console
    } finally {
    //   bot.channels.get("566251883744854016").send(`${message.author.tag} used ${command} command di channel ${message.channel.name}, shard (1) ${message.guild.name}[${message.guild.id}]`); // Logs if the command has been used.
    }

    if (!command) return message.channel.send("invalid command");
});

bot.login(process.env.BOT_TOKEN);
