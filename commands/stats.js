const Discord = require("discord.js")

const {
    version
} = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")
const ms = require("ms")//dah

exports.run = (client, message, args) => {
    let cpuLol;
    cpuStat.usagePercent(function(err, percent, seconds) {
        if (err) {
            return console.log(err);
        }
        const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        const embedStats = new Discord.RichEmbed()
            .setAuthor("Kimina Kekasih Stats")
            .setTitle("**BOT Stats**")
            .setColor("RANDOM")
//            .addField(`<:6445_ModWarning:551796071383302146> Connected to **shard ${client.shard.id+1}/${client.shard.count}**`)
            .addField("> Mem Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
            .addField("> Uptime Bot ", `${duration}`, true)
            .addField("> Users", `${client.users.size.toLocaleString()}`, true)
            .addField("> Servers", `${client.guilds.size.toLocaleString()}`, true)
            .addField("> Channels ", `${client.channels.size.toLocaleString()}`, true)
            .addField("> Eris", `v0.10.1`)
            .addField("> Node", `${process.version}`, true)
            .addField("> CPU", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
            .addField("> CPU usage", `\`${percent.toFixed(2)}%\``, true)
            .addField("> Arch", `\`${os.arch()}\``, true)
            .addField("> Platform", `\`\`${os.platform()}\`\``, true)
        message.channel.send(embedStats) //Thank for helping guys
    }); 
};


exports.help = { 
   name: "stats",
   description:"stats bots",
    usage: "stats"
}; 
