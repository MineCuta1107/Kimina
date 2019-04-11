const { RichEmbed: SharifEmbed } = require('discord.js');

exports.run = async (client, message, args) => {

let embed = new SharifEmbed()
      .setColor("RANDOM")
      .setAuthor("Want to Invite Kimina Kekasih To your server?")
      .setDescription("**[Invite](https://bit.ly/2HU7eTH)** **[|Support Bots](https://bit.ly/2Fsqczu)**")
      .setFooter(`Requested By : ${message.author.username}`);             
     message.channel.send(embed);
     
}

exports.conf = {
  aliases: ['invitebot'],
  cooldown: "5"

}

exports.help = {
  name: "invite",
  description: 'To invite Kimina Kekasih to Your Server',
  usage: 'invite'

}
