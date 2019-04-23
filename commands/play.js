const Discord = require("discord.js");
const opusscript = require("opusscript");
const ytdl = require("ytdl-core");
const config = require('../config.json');

exports.run = (client, message, args) => {
    var option = args.join(" ")
    if (!option) {
        var embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(`${client.user.username} Stream List`, client.user.displayAvatarURL)
        .setDescription(`**jpop**
**kpop**
**noisefm**


**Usage:** ${config.prefix}play [list]
**Example:** ${config.prefix}play kpop`)
        message.channel.send(embed)
    } else {
         if (option.match("RDI")) {
            
            if (message.member.voiceChannel) {
                message.member.voiceChannel.join()
                .then(connection => {
                    message.channel.send('Listening to : **RDI**.. Enjoy');
                    const stream = ytdl('https://www.youtube.com/watch?v=dRiadQACqk8');
                    connection.playStream(stream);
                })
                .catch(console.log);
        } else {
                message.channel.send('You are not in a voice channel!');
        }
    }
    }
    if (option.match("jpop")) {
            var streamJPOP = `http://listen.moe/opus`;
            if (message.member.voiceChannel) {
                message.member.voiceChannel.join()
                .then(connection => {
                    message.channel.send('Listening to : **jpop**.. Enjoy');
                    connection.playArbitraryInput(`${streamJPOP}`);
                })
                .catch(console.log);
        } else {
                message.channel.send('You are not in a voice channel!');
        }
    }
   if (option.match("Top Songs")) {
            
            if (message.member.voiceChannel) {
                message.member.voiceChannel.join()
                .then(connection => {
                    message.channel.send('Listening to : **Top Songs **.. Enjoy');
                    const stream = ytdl('https://youtu.be/cyglCt8PR7I');
                    connection.playStream(stream);
                })
                .catch(console.log);
        } else {
                message.channel.send('You are not in a voice channel!');
        }
    }
     if (option.match("ncs")) {
            
            if (message.member.voiceChannel) {
                message.member.voiceChannel.join()
                .then(connection => {
                    message.channel.send('Listening to : **Ncs**.. Enjoy');
                    const stream = ytdl('https://www.youtube.com/watch?v=U5_usIN8bRA');
                    connection.playStream(stream);
                })
                .catch(console.log);
        } else {
                message.channel.send('You are not in a voice channel!');
        }
    }
   if (option.match("kpop")) {
        var streamKPOP = `http://listen.moe/kpop/opus`;
        if (message.member.voiceChannel) {
            message.member.voiceChannel.join()
            .then(connection => {
                message.channel.send('Listening to : **kpop**.. Enjoy');
                connection.playArbitraryInput(`${streamKPOP}`);
            })
            .catch(console.log);
    } else {
            message.channel.send('You are not in a voice channel!');
    }
    }
   if (option.match("noisefm")) {
        var streamKPOP = `https://play.sas-media.ru/play`;
        if (message.member.voiceChannel) {
            message.member.voiceChannel.join()
            .then(connection => {
                message.channel.send('Listening to : **noisefm**.. Enjoy');
                connection.playArbitraryInput(`${streamKPOP}`);
            })
            .catch(console.log);
    } else {
            message.channel.send('You are not in a voice channel!');
    }
    }
    if (option.match("nightcore")) {
            
            if (message.member.voiceChannel) {
                message.member.voiceChannel.join()
                .then(connection => {
                    message.channel.send('Listening to : **Nightcore**.. Enjoy');
                    const stream = ytdl('https://www.youtube.com/watch?v=UEK0ipXk21k');
                    connection.playStream(stream);
                })
                .catch(console.log);
        } else {
                message.channel.send('You are not in a voice channel!');
        }
    }

}
  
module.exports.help = {
  name:"play"
}

