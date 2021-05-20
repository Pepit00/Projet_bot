module.exports = {
    name: 'addgroup',
    description: 'salut',
    execute(message, args) {
        if (message.member.roles.cache.some(role => role.name === 'moderateur' || role.name === 'enseignant')) {
            if (!args.length) return message.channel.send('il manque des arguments!');
            if (message.guild.roles.cache.some(role => role.name === `groupe-${args[0]}`)) return message.channel.send(`Le groupe existe deja sur le serveur`);
            message.guild.channels.create(`groupe ${args[0]}`, { type: 'text', }).then((channel) => {
                channel.setParent(message.guild.channels.cache.find(c => c.name === "salons textuels groupes" && c.type === "category").id)
            });

            message.guild.channels.create(`groupe-${args[0]}`, { type: 'voice', }).then((channel) => {
                channel.setParent(message.guild.channels.cache.find(c => c.name === "salons vocaux groupes" && c.type === "category").id)
            });

            message.guild.roles.create({
                data: {
                    name: `groupe-${args[0]}`,
                    color: 'WHITE',
                },
            });


            return message.channel.send('création d\'un nouveau groupe.');

        } else {
            message.channel.send('Vous n\'avez pas la permission d\'executer cette commande');
        }

    }
}
