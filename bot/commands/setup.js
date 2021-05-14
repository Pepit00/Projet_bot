module.exports = {
    name: 'setup',
    description: 'setup',
    execute(message, args) {
        if (message.guild.roles.cache.some(role => role.name === 'enseignant')) {
            return message.channel.send(`le setup du serveur a déja été fait`);
        } else {

            if (!args.length) return message.channel.send('il manque des arguments!');
            if (args.length > 1) return message.channel.send("trop d'arguments");

            message.guild.channels.create(`salons textuels groupes`, { type: 'category', });
            message.guild.channels.create(`salons vocaux groupes`, { type: 'category', });

            message.guild.roles.create({
                data: {
                    name: 'enseignant',
                    color: 'RED',
                    permissions: ['ADMINISTRATOR'],
                },
            });

            message.guild.roles.create({
                data: {
                    name: 'etudiant',
                    color: 'BLUE',
                },
            });


            for (let index = 1; index <= args[0]; index++) {
                message.guild.channels.create(`groupe ${index}`, { type: 'text', }).then((channel) => {
                    channel.setParent(message.guild.channels.cache.find(c => c.name === "salons textuels groupes" && c.type === "category").id)
                });

                message.guild.channels.create(`groupe ${index}`, { type: 'voice', }).then((channel) => {
                    channel.setParent(message.guild.channels.cache.find(c => c.name === "salons vocaux groupes" && c.type === "category").id)
                });

                message.guild.roles.create({
                    data: {
                        name: `groupe-${index}`,
                        color: 'WHITE',
                    },
                });
            };

            return message.channel.send(`setup du serveur terminé`);

        }
    }
}