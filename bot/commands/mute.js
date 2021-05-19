module.exports = {
    name: 'mute',
    description: "mute command",
    execute(message, args) {
        if (message.member.roles.cache.some(role => role.name === 'moderateur' || role.name === 'enseignant')) {
            if (!args.length) return message.channel.send('il manque des arguments!');
            const member = message.mentions.users.first();
            if (member) {

                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.roles.add(message.guild.roles.cache.find(role => role.name === 'puni')).catch(console.error);
                //memberTarget.roles.remove('role unmute').catch(console.error);
                message.channel.send(`${member} a été mute`);

            } else { message.channel.send('Le memebre n\'existe pas'); }
        } else {
            message.channel.send('Vous n\'avez pas la permission d\'executer cette commande');
        }
    }
}