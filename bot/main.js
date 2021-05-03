const Discord = require('discord.js');
const Canvas = require('canvas');


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

const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');

	// Declare a base size of the font
	let fontSize = 70;

	do {
		// Assign the font to the context and decrement it so it can be measured again
		ctx.font = `${fontSize -= 10}px sans-serif`;
		// Compare pixel width of the text to the canvas minus the approximate avatar size
	} while (ctx.measureText(text).width > canvas.width - 300);

	// Return the result to use in the actual canvas
	return ctx.font;
};

client.on('guildMemberAdd', async member => {
    
	const channel = member.guild.channels.cache.find(ch => ch.name === 'accueil');

	if (!channel) return;

	const canvas = Canvas.createCanvas(859, 605);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./wallpaper.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = '35px sans-serif';
	ctx.fillStyle = '#000000';
	ctx.fillText('Bienvenue mon pote !', 400, 200);

	// Add an exclamation point here and below
	ctx.font = applyText(canvas, `${member.displayName}!`);
	ctx.fillStyle = '#000000';
	ctx.fillText(`${member.displayName}!`, 430, 500);

	ctx.beginPath();
	ctx.arc(575, 345, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 475, 245, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(`Bienvenue mon pote, ${member}!`, attachment);
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
    if(command ==='join'){
        client.emit('guildMemberAdd',message.member);
    }

});


client.login('TOKEN HERE');
