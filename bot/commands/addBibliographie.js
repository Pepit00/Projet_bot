var dbQuery = require('../BD/dbQuery');

module.exports = {
	name: 'addBibliographie',
	description: 'ajoute un document à un UE',
	execute(message, args) {
		if (message.member.roles.cache.some(role => role.name === 'moderateur' || role.name === 'enseignant')) {
			if (args.length < 2) return message.channel.send('il manque des arguments!');
			let lien;
			if (args.length < 3) lien = "null";
			else lien = args[2];
			try {
				var info = dbQuery.createBibliographie(message.guild.id, args[0], args[1], lien);
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
