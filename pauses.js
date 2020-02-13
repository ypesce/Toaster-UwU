const cron = require('node-cron');
const Discord = require('discord.js');
const client = new Discord.Client();

    const cronPauses = () =>{
    cron.schedule('30 10 * * 1-5', () => {
        client.login("Njc3MTE3NjYzOTQzODUyMDMz.XkUTXg.vZz7pUP31ChOTfWMb3PCzHy7M-I").then(() => {
            let guild = client.guilds.get('664564548132667422');
            if (guild && guild.channels.get('664564548606361602')) {
                guild.channels.get('664564548606361602').send("@everyone Pause !!!").then(() => client.destroy());
            } else {
                console.log("nope");
                //if the bot doesn't have guild with the id guildid
                // or if the guild doesn't have the channel with id channelid
            }
            client.destroy();
        });
    }, {
        scheduled: true,
        timezone: "Europe/Paris"
    });
    cron.schedule('30 14 * * 1-5', () => {
        client.login("Njc3MTE3NjYzOTQzODUyMDMz.XkUEOw.2VX1rdpGzd8oBn0Z8PvzseyFXVA").then(() => {
            var guild = client.guilds.get('664564548132667422');
            if (guild && guild.channels.get('664564548606361602')) {
                guild.channels.get('664564548606361602').send("@everyone Pause !!!").then(() => client.destroy());
            } else {
                console.log("nope");
                //if the bot doesn't have guild with the id guildid
                // or if the guild doesn't have the channel with id channelid
            }
            client.destroy();
        });
    }, {
        scheduled: true,
        timezone: "Europe/Paris"
    });

    cron.schedule('0 16 * * 1-5', () => {
        client.login("Njc3MTE3NjYzOTQzODUyMDMz.XkUEOw.2VX1rdpGzd8oBn0Z8PvzseyFXVA").then(() => {
            var guild = client.guilds.get('664564548132667422');
            if (guild && guild.channels.get('664564548606361602')) {
                guild.channels.get('664564548606361602').send("@everyone Pause !!!").then(() => client.destroy());
            } else {
                console.log("nope");
                //if the bot doesn't have guild with the id guildid
                // or if the guild doesn't have the channel with id channelid
            }
            client.destroy();
        });
    }, {
        scheduled: true,
        timezone: "Europe/Paris"
    });
}

exports.cronPauses = cronPauses