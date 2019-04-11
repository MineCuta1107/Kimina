const {RichEmbed} = require ('discord.js');

exports.run = async (client, message, args) => {
  if (! message.member.hasPermission ("BAN_MEMBERS")) {
    let embed = new RichEmbed ()
      .setColor ("RANDOM")
      .setDescription ("Sorry, You Don't Have Permissions For Members Tires");
return message.channel.send (embed);
  }
  if (! message.guild.member (client.user) .hasPermission ("BAN_MEMBERS")) return message.channel.send (`** ${message.author.tag} ** Sorry, Kimina Kekasih Doesn t Have Permissions \ BAN_MEMBERS Please give Kimina Kekasih Permissions to Member Tires:) `) .then (msg => msg.delete (5000))
  
  let toBan = message.guild.member (message.mentions.users.first ()) || message.guild.members.get (args [0]);
  if (! toBan) return message.channel.sendMessage ("Cannot Find User! First User Mention!");
  let reason = args.join ("") .slice (22);
  if (toBan.hasPermission ("BAN_MEMBERS")) return message.channel.send ("This User Cannot Be Banned :(");
  
  if (toBan.highestRole.position <message.guild.member (client.user) .highestRole.position) {
   message.guild.member (toBan) .ban (reason);
   try {
    if (! reason) {
      toBan.send (`** $ {toBan.user.tag} ** You Have Been Baned From ** ${message.guild.name} **`)
    } else {
      toBan.send (`**${toBan.user.tag}** You Have Been Baned From ** ${message.guild.name} **
Reason: "${reason}" `);
    }
    let embedB = new RichEmbed ()
    .setColor ('RANDOM')
    .setTitle ('User Has Been Banned From Server')
    .addField ('username', toBan.user.username, true)
    .addField ('ID', toBan.id, true)
    message.channel.send (embedB);
  } catch (e) {
    console.log (e.message)
  }
  } else {
   message.channel.send (`I Cannot Ban ** $ toBan.user.tag} ** Because the Role Is Higher Than My Roll.`)
  }
}
 
exports.conf = {
  aliases: ['ban'],
  cooldown: '5'
}

exports.help = {
  name: "ban",
  description: 'Someone s Tire From Your Server [PERMISSION BAN MEMBERS ONLY]',
  usage: 'ban [@mention someone]'
}
