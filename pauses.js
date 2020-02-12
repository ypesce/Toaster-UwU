var CronJob = require('cron').CronJob;
const Discord = require('discord.js');
const client = new Discord.Client();

var job = new CronJob('30 10 * * 1-5', function () {
    console.log('You will see this message every second');
}, null, true, 'Europe/Paris');
job.start();