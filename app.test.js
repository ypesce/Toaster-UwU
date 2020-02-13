const Discord = require('discord.js')
const client = new Discord.Client()
const cron = require('./pauses.js')
const config = require("./config.json");


client.on('ready', () => console.log(`Logged in as ${client.user.tag}!`))

client.on("message", message => {
  if (message.author.bot) return;
  // This is where we'll put our code.
  if (message.content.indexOf(config.prefix) !== 0) return;
 
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
 
  if(command === 'ping') {
    message.channel.send('Pong!');
  } else
  if (command === 'git') {
    message.channel.send('https://github.com/ypesce/Toaster-UwU');
  }
});
cron.cronPauses();

client.login(config.token);