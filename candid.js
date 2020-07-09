const Discord = require('discord.js');
const config = require('./config.json');
const {
    type
} = require('os');
const client = new Discord.Client();

client.on('ready', () => console.log(`Logged in as ${client.user.tag}!`))

client.on('message', msg => {
    if (!msg.content.startsWith(config.prefix) || msg.author.bot) return;

    const args = msg.content.slice(config.prefix.length).split(/ +/);
    console.log(args)

    if (args[0] === 'candid') {
        if (!args[1]) return msg.reply('Ajoute le pseudo de ton perso principal merci')
        msg.guild.createChannel(args.slice(0).join("-"), {
            type: 'text'
        }), msg.channel.send('Channel created')
        console.log('aaaa')
    } else {
        if (args[0] === 'ping') {
            console.log('pong')
        }
    }
});


client.login(config.token);