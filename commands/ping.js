const Discord = require('discord.js')

exports.run = async (bot, message, args) => {

  let start = Date.now(); message.channel.send(':ping_pong:').then(message => {
    message.delete();
    let diff = (Date.now() - start).toLocaleString();
    let API = (bot.ping).toFixed(2)
    let embed = new Discord.RichEmbed()
    .setTitle(`🏓 | Pong!`)
    .setColor("RANDOM")
    .addField("📡 | Latency", `${diff}ms`, true)
    .addField("💻 | API", `${API}ms`, true)
    message.channel.send(embed);
  });
}

exports.conf = {
    aliases: [],
    cooldown: ""
}

exports.help = {
    name: "ping",
    description: "Cek status sinyal",
    usage: "ping"
}
