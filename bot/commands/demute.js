module.exports = {
    name: 'demute',
    description: "demute command",
    execute(message, args) {
        if (message.member.roles.cache.some(role => role.name === 'moderateur' || role.name === 'enseignant')) {
            if (!args.length) return message.channel.send('il manque des arguments!');
            const member = message.mentions.users.first();
            if (member) {
                const memberTarget = message.guild.members.cache.get(member.id);
                if (!memberTarget.roles.cache.some((role => role.name === 'puni'))) return message.channel.send('L\'utilisateur est deja demute'); 
                memberTarget.roles.remove(message.guild.roles.cache.find(role => role.name === 'puni')).catch(console.error);
                memberTarget.roles.add(message.guild.roles.cache.find(role => role.name === 'etudiant')).catch(console.error);
                //memberTarget.roles.add('role unmute').catch(console.error);
                message.channel.send(`${member} a été demute`);
            }  else if (!member) { message.channel.send('L\'utilisateur n\'existe pas'); }
        }
        else {
            message.channel.send('Vous n\'avez pas la permission d\'executer cette commande');
        }
    }
}