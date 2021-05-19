module.exports = {
    name: 'alarm',
    description: "alarm commands",
    execute(message, args) {
        const time = args[0];
        //console.log(args);
        //console.log(args[1].substring(3, args[1].length - 1));
        if (message.member.roles.cache.some(role => role.name === 'moderateur' || role.name === 'enseignant')) {
            if (args.length < 2) return message.channel.send('il manque des arguments!');
            if (!Number.isInteger(parseInt(time))) { return message.channel.send("Ce n'est pas un nombre"); }//verifie si c'est un nombre
            const roleExist = message.guild.roles.cache.some(r => r.id === args[1].substring(3, args[1].length - 1));
            if (!roleExist) {
                message.channel.send("le role n'existe pas");
                return;
            };
            const roleTarget = message.guild.roles.cache.find(r => r.id === args[1].substring(3, args[1].length - 1));
            const isMentionable = roleTarget.mentionable;
            const roleId = roleTarget.id;
            
            //if (isMentionable) {
            message.channel.send('L\'alarme de ' + time + " minutes à été mise en place");
            setTimeout(() => {
                message.channel.send(`<@&${roleId}>` + " fin");
            }, time * 1000 * 60);
            //}
            //else { message.channel.send("Je ne peux pas mentionner ce role"); }
        } else {
            message.channel.send('Vous n\'avez pas la permission d\'executer cette commande');
        }

    }
}