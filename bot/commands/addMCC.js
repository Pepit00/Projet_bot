var dbQuery = require('../BD/dbQuery');

module.exports = {
	name: 'addMCC',
	description: 'ajoute le MCC d\'un UE',
	execute(message, args) {
		if (message.member.roles.cache.some(role => role.name === 'moderateur' || role.name === 'enseignant')) {
			if (args.length < 2) return message.channel.send('il manque des arguments!');
			var note = args[1];
			for (let i = 2; i < args.length; ++i) {
				note = note + " " + args[i];
			}
			try {
				var info = dbQuery.createMCC(message.guild.id, args[0], note);
			} catch (e) {
				message.channel.send("error : " + e);
				console.log(e);
			}
			if (info != -1) message.channel.send("élément ajouté");
		} else {
			message.channel.send('Vous n\'avez pas la permission d\'executer cette commande');
		}
	}
}
