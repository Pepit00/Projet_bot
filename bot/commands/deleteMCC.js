var dbQuery = require('../BD/dbQuery');

module.exports={
    name: 'deleteMCC',
    description: 'supprime le MCC d\'un UE',
    execute(message, args){
	if(!args.length) return message.channel.send('il manque des arguments!');
	try {
		var info = dbQuery.deleteMCC(message.guild.id, args[0]);
	}catch (e) {
		message.channel.send("error : " + e);
		console.log(e);
	}
	if (info != -1 && info.changes != 0) message.channel.send("élément supprimé");
	if (info != -1 && info.changes == 0) message.channel.send("élément non existant");
    }
}
