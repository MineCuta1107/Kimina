module.exports.run = async (client, message) => { //AKHIRNYA BERES

    const radio = {
         "rfm": "http://rfm-live-mp3-128.scdn.arkena.com/rfm.mp3",
        "fun": "http://streaming.radio.funradio.fr/fun-1-44-128",
        "virgin": "http://vr-live-mp3-128.scdn.arkena.com/virginradio.mp3",
       "jpop": "http://listen.moe/opus",
      "kpop": "http://listen.moe/kpop/opus",
        //list RADIONYA INI CUK!
    }

    if (!message.member.voiceChannel) return message.channel.send(`You must be connected in a Voice room!`)

    if(!message.member.voiceChannel.joinable) return message.channel.send(`I don't have permission to join in this Voice room!`);

    if(!message.member.voiceChannel.speakable) return message.channel.send(`I don't have permission to talk in this Voice room!`);

    let args = message.content.split(" ").slice(1).join(" ").toLowerCase();

    if (!args) return message.channel.send('Please specify a radio name, here is the list of available radios:\n • **rfm,**\n • **fun,**\n • **virgin**')

    if (!radio[args]) return message.channel.send('Invalid radio, here is the list of available radios:\n • **rfm,**\n • **fun,**\n • **virgin**')


    message.member.voiceChannel.join().then(connection => {

        require('http').get(radio[args], (res) => {

            connection.playStream(res);

            message.channel.send(`Listening To : **${args}**  Enjoy The Music`);

        });

    });

}

module.exports.help = {
    name: "play",
    category: "music"

}
