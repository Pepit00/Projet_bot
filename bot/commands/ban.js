module.exports = {
    name: 'ban',
    description: "ban command",
    execute(message, args) {
        if (message.member.roles.cache.some(role => role.name === 'moderateur' || role.name === 'enseignant')) {
            if (!args.length) return message.channel.send('il manque des arguments!');
            const member = message.mentions.users.first();
            if (member) {
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.ban();
                message.channel.send(`${member} a été banis`);
            } else {
                message.channel.send('L\'utilisateur n\'existe pas');
            }
        } else {
            message.channel.send('Vous n\'avez pas la permission d\'executer cette commande');
        }
    }
}