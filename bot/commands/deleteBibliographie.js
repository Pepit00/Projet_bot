var dbQuery = require('../BD/dbQuery');

module.exports = {
	name: 'deleteBibliographie',
	description: 'supprime un document d\'une UE',
	execute(message, args) {
		if (message.member.roles.cache.some(role => role.name === 'moderateur' || role.name === 'enseignant')) {
			if (args.length < 2) return message.channel.send('il manque des arguments!');
			try {
				var info = dbQuery.deleteBibliographie(message.guild.id, args[0], args[1]);
			} catch (e) {
				message.channel.send("error : " + e);
				console.log(e);
			}
			if (info != -1 && info.changes != 0) message.channel.send("élément supprimé");
			if (info != -1 && info.changes == 0) message.channel.send("élément non existant");
		} else {
			message.channel.send('Vous n\'avez pas la permission d\'executer cette commande');
		}
	}
}
