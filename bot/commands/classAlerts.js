module.exports = {
    name: 'classAlert',
    description: "Class alerts command",
    execute(message, args) {
        if (message.member.roles.cache.some(role => role.name === 'moderateur' || role.name === 'enseignant')) {
            if (args.length < 2) return message.channel.send('il manque des arguments!');
            const roleExist = message.guild.roles.cache.some(r => r.id === args[1].substring(3, args[1].length - 1));
            //console.log(args);
            if (!roleExist) {
                message.channel.send("le role n'existe pas");
                return;
            };
            const roleTarget = message.guild.roles.cache.find(r => r.id === args[1].substring(3, args[1].length - 1));
            //const isMentionable = roleTarget.mentionable;
            //if (isMentionable) {
            const channelcible = message.member.guild.channels.cache.find(ch => ch.name === roleTarget.name);
            const roleId = roleTarget.id;
            if(channelcible) return channelcible.send("Bonjour, " + `<@&${roleId}>` + " votre UE " + args[0] + " à débuté un cours");
            else return message.channel.send("Bonjour, " + `<@&${roleId}>` + " votre UE " + args[0] + " à débuté un cours");

        } else {
            message.channel.send('Vous n\'avez pas la permission d\'executer cette commande');
        }
        //} else { message.channel.send('Le role n\'est pas mentionnable'); }
    }
}