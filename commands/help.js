const Discord = require("discord.js") 

module.exports.run = async (bot, message, args) => {
  let pages = [`
 Hai, My Name is Kimina Kekasih.
I am bot streaming, on 24/7

 By <@407106326045655050>
`, `
 Kimina Kekasih's Command List
Core Commands

•help
•invite
•kick
•ping
•stast


`, `
 Kimina Kekasih's Command List
Play Commands

|LIST RADIO |
•**Kpop** | **Jpop** | **Nightcore** | **Ncs** | **RDI** | **Top Songs**•

•Usage : /play [list]
•Example : /play Kpop

`, `
Kimina Kekasih's Support
**Support Kimina Kekasih**

**[Invite Me](https://bit.ly/2HU7eTH)**
**[Support Server](https://bit.ly/2Fsqczu)**
**[Website](https://bit.ly/minekimina)**
**[Vote Kimina Kekasih on DBL](https://discordbots.org/bot/543013335210393600/vote)**
**[Invite Mine Cuta Support](https://bit.ly/2OqNto6)**

**:diamond_shape_with_a_dot_inside:Team:diamond_shape_with_a_dot_inside:**
**NewStars Trix Development**
`]
let page = 1;
  
  const embed = new Discord.RichEmbed() 
    .setThumbnail(bot.user.displayAvatarURL)
    .setColor(0xff2f2f) 
    .setAuthor("Help commands list", bot.user.displayAvatarURL)
    .setFooter(`Page ${page} of ${pages.length} • Kimina Kekasih`)
    .setDescription(pages[page-1])
 
  message.channel.send(embed).then(msg => {
   
    msg.react('⏪').then( r => {
          msg.react(`❎`).then( r => { 
      msg.react('⏩')
     
      // Filters - These make sure the variables are correct before running a part of code
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
      const delFilter = (reaction, user) => reaction.emoji.name === `❎` && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;
     
      const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 });
      const dels = msg.createReactionCollector(delFilter, { time:100000 });

      
      backwards.on('collect', r => { 
        if (page === 1) return; 
        page--;
	embed.setAuthor("Help commands list", bot.user.displayAvatarURL)
        embed.setDescription(pages[page-1])
        embed.setFooter(`Page ${page} of ${pages.length} • Kimina Kekasih`)
        embed.setThumbnail(bot.user.displayAvatarURL);
        msg.edit(embed) 
      })
     
      forwards.on('collect', r => {
        if (page === pages.length) return; 
        page++;
	embed.setAuthor("Help commands list", bot.user.displayAvatarURL)
          embed.setThumbnail(bot.user.displayAvatarURL)
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Page ${page} of ${pages.length} • Kimina Kekasih`);
        msg.edit(embed) 
   
    })
          dels.on('collect', r => {
          msg.delete(1000)
        })
 
  }) 
 
})
  
})

}

exports.help = {
 name: "help",
  aliases: "h"
}
