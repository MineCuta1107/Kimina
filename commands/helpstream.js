const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  const embed = new Discord.RichEmbed()
  .setTitle("==========>**STREAMING LIST**<==========")
  
  .setColor("RANDOM")
  .setDescription("Hi,My Name is Kimina Kekasih. My prefix is `/`")
  .setFooter("©Kimina Kekasih 2019")
  
  .setTimestamp()
  .addField(":musical_note: Stream List",  
  '**Kpop** | **Jpop** | **rfm** | **fun** | **virgin**')
  .addField("Usage", '**/play [list stream]**')
  .addField("**Example** :", '/play kpop')
 .addField(":musical_note:**Stream List** 2",
  '**Nightcore** | **Ncs** | **RDI** | **Top Songs**')
  .addField("Usage :", '**/stream [list]**')
.addField("**Example :**", '/stream nightcore')
  
  message.channel.send(embed)
}

exports.conf = {
    aliases: ['h'],
    cooldown: "2"
}
  module.exports.help = {
    name: "helpstream",
    description: 'List Streaming',
  usage: 'helpstream'
  }
