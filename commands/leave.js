const Discord = require("discord.js");
const { ownerID } = require('../config.json');
const opusscript = require("opusscript");

exports.run = (client, message, args) => {
      if (message.member.voiceChannel) {
        message.member.voiceChannel.leave()
      message.reply('Left Voice Channel.');
    };
}

module.exports.help = {
  name:"leave"
}
