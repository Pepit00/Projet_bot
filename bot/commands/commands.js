module.exports= {
    name: 'commands',
    description: 'display commands',
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#4beddc')
        .setTitle('LES COMMANDES')
        .setDescription('Voici les commandes utilisable par ce bot')
        .addFields(
            {name: 'Afficher les commandes ', value : '!commands'},
            {name: 'Kick un membre', value : '!kick @lemembre '},
            {name: 'Ban un membre', value : '!ban @lemembre '},
            {name: 'mute un membre', value : '!mute @lemembre '},
            {name: 'demute un membre', value : '!demute @lemembre '},
            {name: 'jouer de la musique en vocal', value : '!play <lien youtube> | !play <nom musique>'},
            {name: 'stoper la musique en vocal', value : '!stop'},
            {name: 'passer la musique actuelle', value : '!skip'},
            {name: 'jouer la musique en boucle (deuxième fois pour annuler la boucle)', value : '!loop'},
            
            
        )
        //.setImage('https://animeland.fr/wp-content/uploads/2017/03/hamtaro2.png')

        message.channel.send(newEmbed);

    }

    
}