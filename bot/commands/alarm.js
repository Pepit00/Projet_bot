module.exports = {
    name: 'alarm',
    description: "alarm commands",
    execute(message, args) {
        const time = args[0];
        console.log(args);
        if (!Number.isInteger(parseInt(time))) { message.channel.send("Ce n'est pas un nombre"); }//verifie si c'est un nombre
        else {
            if (message.member.roles.cache.some(role => role.name === 'moderateur')) {
                const roleExist = message.guild.roles.cache.some(r => r.name === args[1]);
                if (!roleExist) {
                    message.channel.send("le role n'existe pas");
                    return;
                };
                const roleTarget = message.guild.roles.cache.find(r => r.name === args[1]);
                const isMentionable = roleTarget.mentionable;
                const roleId = roleTarget.id;

                if (isMentionable) {
                    message.channel.send('L\'alarme de ' + time + " à été mis en place");
                    setTimeout(() => {
                        message.channel.send(`<@&${roleId}>` + " fin");
                    }, time * 1000 * 60);
                }
                else { message.channel.send("Je ne peux pas mentionner ce role"); }
            } else {
                message.channel.send('Vous n\'avez pas le role pour utiliser cette commande');
            }
        }
    }
}