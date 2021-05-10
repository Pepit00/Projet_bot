var dbQuery = require('../BD/dbQuery');

module.exports={
    name: 'getMCC',
    description: 'recuperer le MCC d\'un UE',
    execute(message, args){
	if(!args.length) return message.channel.send('il manque des arguments!');
	let results = dbQuery.getMCC(message.guild.id, args[0]);
	if (results == -1) message.channel.send('UE invalide ou notation non renseigner');
	else message.channel.send(args[0] + ' : ' + results.notation);
    }
}
