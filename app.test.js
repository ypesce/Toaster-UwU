const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json")
const cron = require("./pauses")
const activities_list = [
    "with the &help command.", 
    "with the developers console",
    "with some code", 
    "with JavaScript"
    ]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 10000); // Runs this every 10 seconds.
});
	client.on("message", message => {
	if (message.author.bot) return;
	if (message.content.indexOf(config.prefix) !== 0) return
	const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
	const command = args.shift().toLowerCase()

	if (command === 'ping') 
		message.channel.send('Pong!')
	 else
	if (command === 'git') 
		message.channel.send('https://github.com/ypesce/Toaster-UwU')
	 else
	if (command === "delete") {
		let [size] = args
		if (size > 98) {
		message.channel.send('taille trop importante').then(msg => msg.delete(3000))
		return
		} else
		message.channel.bulkDelete(size)
	}
	})
	cron.cronPauses()

	client.login(config.token)