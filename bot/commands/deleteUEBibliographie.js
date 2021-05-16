var dbQuery = require('../BD/dbQuery');

module.exports = {
	name: 'deleteUEBibliographie',
	description: 'supprime tout les documents d\'une UE',
	execute(message, args) {
		if (message.member.roles.cache.some(role => role.name === 'moderateur' || role.name === 'enseignant')) {
			if (!args.length) return message.channel.send('il manque des arguments!');
			try {
				var info = dbQuery.deleteUEBibliographie(message.guild.id, args[0]);
			} catch (e) {
				message.channel.send("error : " + e);
				console.log(e);
			}
			if (info != -1 && info.changes != 0) message.channel.send("élément supprimé");
			if (info != -1 && info.changes == 0) message.channel.send("élément non existant");
		}
		else {
			message.channel.send('Vous n\'avez pas la permission d\'executer cette commande');
		}
	}
}
