const Discord = require('discord.js');
const Canvas = require('canvas');


const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });



const prefix = '!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFile = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFile) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Open Bot Room est en ligne !!!');
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
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	switch (command) {
		case 'ban':
			client.commands.get('ban').execute(message, args);
			break;
		case "commands":
			client.commands.get('commands').execute(message, args, Discord);
			break;
		case "kick":
			client.commands.get('kick').execute(message, args);
			break;
		case 'play':
		case 'skip':
		case 'stop':
		case 'loop':
			client.commands.get('musique').execute(command, message, args, client, Discord);
			break;
		case "mute":
			client.commands.get('mute').execute(message, args);
			break;
		case 'regles':
			client.commands.get('regles').execute(message, args, Discord);
		case "demute":
			client.commands.get('demute').execute(message, args);
			break;
		case 'yo':
			client.commands.get('yo').execute(message, args);
			break;
		case 'getmcc':
			client.commands.get('getMCC').execute(message, args);
			break;
		case 'addmcc':
			client.commands.get('addMCC').execute(message, args);
			break;
		case 'deletemcc':
			client.commands.get('deleteMCC').execute(message, args);
			break;
		case 'getbibliographie':
			client.commands.get('getBibliographie').execute(message, args);
			break;
		case 'addbibliographie':
			client.commands.get('addBibliographie').execute(message, args);
			break;
		case 'deletebibliographie':
			client.commands.get('deleteBibliographie').execute(message, args);
			break;
		case 'deleteuebibliographie':
			client.commands.get('deleteUEBibliographie').execute(message, args);
			break;
		case 'join':
			client.emit('guildMemberAdd', message.member);
			break;
		case 'setup':
			client.commands.get('setup').execute(message, args);
			break;
		case "classalert":
			client.commands.get('classAlert').execute(message, args);
			break;
		case "alarm":
			client.commands.get('alarm').execute(message, args);
			break;
		case "addgroup":
			client.commands.get('addgroup').execute(message, args);
			break;
		case "reactionrole":
			client.commands.get('reactionRole').execute(message, args, Discord, client);
			break;
		case "presentlist":
		case "present":
		case "closelist":
			client.commands.get('presence').execute(message, args);
			break;
		case "test":
			client.commands.get('test').execute(message, args);
			break;
		default:
			return message.channel.send('commmande non reconnue, !commands pour la liste des commandes disponibles');
	}
});


client.login('ODM0MDQ3MTI4MzE3MzI5NDE4.YH7M6w.IaQp36QJLR8agRysIMF_YgFYcxk');
