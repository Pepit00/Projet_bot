module.exports = {
    name: 'yo',
    description: 'salut',
    execute(message, args) {
        if (!args.length) return message.channel.send('il manque des arguments!');
        if (message.guild.roles.cache.some(role => role.name === `groupe ${args[0]}`)) return message.channel.send(`Le groupe existe deja sur le serveur`);
        return message.channel.send('création d\'un nouveau groupe!');



    }
}
