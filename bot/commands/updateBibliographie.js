var dbQuery = require('../BD/dbQuery');

module.exports = {
	name: 'updateBibliographie',
	description: 'modifier un document d\'une UE',
	execute(message, args) {
		if (message.member.roles.cache.some(role => role.name === 'moderateur' || role.name === 'enseignant')) {
			if (args.length < 2) return message.channel.send('il manque des arguments!');
			if (dbQuery.getBibliographie(message.guild.id, args[0]).length === 0) return message.channel.send('élément non existant');
			let lien;
			if (args.length < 3) lien = "null";
			else lien = args[2];
			try {
				var info = dbQuery.updateBibliographie(message.guild.id, args[0], args[1], lien);
			} catch (e) {
				message.channel.send("error : " + e);
				console.log(e);
			}
			if (info != -1) message.channel.send("élément modifié");
		} else {
			message.channel.send('Vous n\'avez pas la permission d\'executer cette commande');
		}
	}
}
