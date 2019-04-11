const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  const embed = new Discord.RichEmbed()
  .setTitle("==========>**Commands List**<==========")
  
  .setColor("RANDOM")
  .setDescription("Hi,My Name is Kimina Kekasih. My prefix is `/`")
  .setFooter("©Kimina Kekasih 2019")
  
  .setTimestamp()
  .addField(":earth_africa: General", '`help` | `ping` | `stats` | `invite`')
  .addField(":musical_note: Streaming",  '`helpstream`')
  .addField(":tools: Moderation", '`ban`| `kick`')
  .addField("Kimina Kekasih Support"," [Invite Me](https://bit.ly/2HU7eTH) | [Vote Me](https://bit.ly/2TZfmJR) | [Support Server](https://bit.ly/2Fsqczu) | [Website](https://bit.ly/2CCGALS)")

  
  message.channel.send(embed)
}

exports.conf = {
    aliases: ['h'],
    cooldown: "2"
}
  module.exports.help = {
    name: "help",
    description: 'List Help',
  usage: 'help'
  }
