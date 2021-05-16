module.exports = {
    name: 'setup',
    description: 'setup',
    execute(message, args) {
        if (message.guild.roles.cache.some(role => role.name === 'enseignant')) return message.channel.send(`le setup du serveur a déja été fait`);
        
        if (!args.length) return message.channel.send('il manque des arguments!');
        
        message.guild.channels.create(`salons utilitaires`, { type: 'category', });
        message.guild.channels.create(`salons textuels groupes`, { type: 'category', });
        message.guild.channels.create(`salons vocaux groupes`, { type: 'category', });


        message.guild.roles.create({
            data: {
                name: 'enseignant',
                color: 'GREEN',
                permissions: ['ADMINISTRATOR'],
            },
        });

        message.guild.roles.create({
            data: {
                name: 'moderateur',
                color: 'RED',
                permissions: ['ADMINISTRATOR'],
            },
        });

        message.guild.roles.create({
            data: {
                name: `puni`,
                color: 'GRAY',
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

            message.guild.channels.create(`groupe-${index}`, { type: 'voice', }).then((channel) => {
                channel.setParent(message.guild.channels.cache.find(c => c.name === "salons vocaux groupes" && c.type === "category").id)
            });

            message.guild.roles.create({
                data: {
                    name: `groupe-${index}`,
                    color: 'WHITE',
                },
            });
        };
        message.guild.channels.create(`rôles`, { type: 'text', }).then((channel) => {
            channel.setParent(message.guild.channels.cache.find(c => c.name === "salons utilitaires" && c.type === "category").id)
        });
        message.guild.channels.create(`règles`, { type: 'text', }).then((channel) => {
            channel.setParent(message.guild.channels.cache.find(c => c.name === "salons utilitaires" && c.type === "category").id)
        });
        message.guild.channels.create(`accueil`, { type: 'text', }).then((channel) => {
            channel.setParent(message.guild.channels.cache.find(c => c.name === "salons utilitaires" && c.type === "category").id)
        });
        message.guild.channels.create(`informations`, { type: 'text', }).then((channel) => {
            channel.setParent(message.guild.channels.cache.find(c => c.name === "salons utilitaires" && c.type === "category").id)
        });
        message.guild.channels.create(`commandes`, { type: 'text', }).then((channel) => {
            channel.setParent(message.guild.channels.cache.find(c => c.name === "Salons textuels" && c.type === "category").id)
        });

        return message.channel.send(`setup du serveur terminé`);


    }
}