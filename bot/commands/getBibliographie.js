var dbQuery = require('../BD/dbQuery');

module.exports={
    name: 'getBibliographie',
    description: 'recuperer un document de la bibliographie',
    execute(message, args){
	if(!args.length) return message.channel.send('il manque des arguments!');
	let results = dbQuery.getBibliographie(message.guild.id, args[0]);
	if (results == -1 || results.length === 0) message.channel.send('document pour l\'UE introuvable ou UE invalide');
	else {
		var returnString = args[0] + ' : \n';
		for (let i = 0 ; i < results.length ; ++i) {
			returnString = returnString + 'nom : ' + results[i].nom + ', lien : ' + results[i].lien + '\n';
		}
		message.channel.send(returnString);
	}
    }
}
