const Discord = require('discord.js')
const client = new Discord.Client()
const cron = require('./pauses.js')

client.on('ready', () => console.log(`Logged in as ${client.user.tag}!`))

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

cron.cronPauses();

client.login('Njc3MTE3NjYzOTQzODUyMDMz.XkUTXg.vZz7pUP31ChOTfWMb3PCzHy7M-I');