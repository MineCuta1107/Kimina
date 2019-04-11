const Discord = require("discord.js")

const {
    version
} = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")
const ms = require("ms")//dah

exports.run = (bot, message, args) => {
    let cpuLol;
    cpuStat.usagePercent(function(err, percent, seconds) {
        if (err) {
            return console.log(err);
        }
        const duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        const embedStats = new Discord.RichEmbed()
            .setAuthor("Kimina Kekasih Stats")
            .setTitle("**BOT Stats**")
            .setColor("RANDOM")
            .addField(":floppy_disk: > Mem Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
            .addField(":clock1: > Uptime ", `${duration}`, true)
            .addField(":busts_in_silhouette: > Users", `${bot.users.size.toLocaleString()}`, true)
            .addField(":satellite: > Servers", `${bot.guilds.size.toLocaleString()}`, true)
            .addField(":pencil: > Channels ", `${bot.channels.size.toLocaleString()}`, true)
            .addField(":file_folder: > Discord.js", `v${version}`, true)
            .addField(":chains:  > Node", `${process.version}`, true)
            .addField(":ballot_box_with_check:  > CPU", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
            .addField(":computer: > CPU usage", `\`${percent.toFixed(2)}%\``, true)
            .addField(":desktop: > Arch", `\`${os.arch()}\``, true)
            .addField(":printer: > Platform", `\`\`${os.platform()}\`\``, true)
        message.channel.send(embedStats) //Thank for helping guys
    }); 
};


exports.help = { 
   name: "stats",
   description:"stats bots",
    usage: "stats"
};   
