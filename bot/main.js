const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFile = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFile){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Pepibot2.0 est en ligne !!!');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command ==='yo'){
        client.commands.get('yo').execute(message,args);
    }
    if(command ==='regles'){
        client.commands.get('regles').execute(message,args, Discord);
    }

});


client.login('ODM0MDQ3MTI4MzE3MzI5NDE4.YH7M6w.xeF0tHOvqxv1rJayUHIraSL7m_Y')
