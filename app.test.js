const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => console.log(`Logged in as ${client.user.tag}!`))

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
import { cronPauses } from "./pauses";
cronPauses();

client.login('Njc3MTE3NjYzOTQzODUyMDMz.XkPmjA.FUVRtCSDCF-bYRyEccGzy0Eh6ls');