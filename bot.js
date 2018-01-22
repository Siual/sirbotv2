const Discord = require('discord.js');
const Client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});
    
client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setGame(`+ | SirBot`);
    }
});

client.login(process.env.BOT_TOKEN);
