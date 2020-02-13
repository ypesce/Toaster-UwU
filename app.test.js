/* ----- CONFIG and REQUIRED FILESS ----- */
const Discord = require('discord.js')
const client = new Discord.Client()
const cron = require('./pauses.js')
const config = require("./config.json")

/* ---- check if the bot booted ---------*/
client.on('ready', () => console.log('salut fréro')) 
  
client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.indexOf(config.prefix) !== 0) return
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase()

  if (command === 'ping') {
    message.channel.send('Pong!')
  } else
  if (command === 'git') {
    message.channel.send('https://github.com/ypesce/Toaster-UwU')
  } else
  if (command === "delete") {
    let [size] = args
    if (size > 99) 
      message.channel.send('taille trop importante').then(msg => msg.delete(3000))
    size ++
    message.channel.bulkDelete(size)
  }
});
cron.cronPauses();

client.login(config.token);