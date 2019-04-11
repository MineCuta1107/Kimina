const {RichEmbed} = require ('discord.js');

exports.run = async (client, message, args) => {
  if (! message.member.hasPermission ("MANAGE_MESSAGES")) {
    let embed = new RichEmbed ()
      .setColor ("RANDOM")
      .setTitle ("Sorry, You Don't Have Permissions For Kick Members");
return message.channel.send (embed);
  }
  if (! message.guild.member (client.user) .hasPermission ("MANAGE_NICKNAMES")) return message.channel.send (`** ${message.author.tag} ** Sorry, My Bots doesn't have Permissions \ KICK_MEMBERS \ Please Give Permissions \` KICK_MEMBERS \ First.`). Then (msg => msg.delete (5000))
  
  let toKick = message.guild.member (message.mentions.users.first ()) || message.guild.members.get (args [0]);
  if (! toKick) return message.channel.sendMessage ("Cannot Find User! Please Pre-empt Mention!");
  let reason = args.join ("") .slice (22);
  if (toKick.hasPermission ("KICK_MEMBERS")) return message.channel.send ("Hmm, He Cannot Click :(");
  
  if (toKick.highestRole.position <message.guild.member (client.user) .highestRole.position) {
   message.guild.member (toKick). kick (reason);
   try {
    if (! reason) {
      toKick.send (`**${toKick.user.tag} ** You've KickFrom **${message.guild.name}**`)
    } else {
      toKick.send (`**${toKick.user.tag} ** You've Kick From **${message.guild.name}**
Reason: "$ {reason}" `);
    }
    let embedB = new RichEmbed ()
    .setColor('RANDOM')
    .setTitle('User has been Kicked from server')
    .addField('username', toKick.user.username, true)
    .addField('ID', toKick.id, true)
    message.channel.send (embedB);
  } catch (e) {
    console.log (e.message)
  }
  } else {
   message.channel.send (`I Cannot Kick ** ${toKick.user.tag}** Because the Rollover Is Higher Than Me Or The Roly Is The Same As Me.`)
  }
}
 
exports.conf = {
  aliases: ['kick'],
  cooldown: '5'
}

exports.help = {
  name: "kick",
  description: 'Kick Someone From Your Server [ADMIN ONLY]',
  usage: 'Kick [@mention someone]'
}
