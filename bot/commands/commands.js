module.exports= {
    name: 'commands',
    description: 'display commands',
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#4beddc')
        .setTitle('LES COMMANDES')
        .setDescription('Voici les commandes utilisable par ce bot, les commandes comportant un (M) ne peuvent êtres utilisées seulement par un moderateur.')
        .addFields(
            {name: '(M) ajouter un document a la bibliographie d\' une ue :', value : '!addBibliographie  <ue> <document> <lien>'},
            {name: '(M) ajouter les modalitées de contrôle des connaissances d\'une UE :', value : '!addMCC <ue> <notation>'},
            {name: '(M) mettre en place une alarme pour un groupe :', value : '!alarm <min> @role'},
            {name: '(M) Bannir un membre :', value : '!ban @utilisateur '},
            {name: '(M) envoyer un message de debut de cours pour le groupe concerné :', value : '!classalert <ue> @role'},
            {name: 'Afficher les commandes :', value : '!commands'},
            {name: '(M) supprimer un document de la bibliographie d\'une ue :', value : '!deletebibliographie <ue> <document>'},
            {name: '(M) suprimer les les modalitées de contrôle des connaissances d\'une UE :', value : '!deleteMCC <ue>'},
            {name: '(M) supprimer tous les documents de la bibliographie d\'une UE :', value : '!deleteUEbibliographie <ue>'},
            {name: '(M) demute un membre :', value : '!demute @utilisateur '},
            {name: 'obtenir la bibliographie d\'une ue :', value : '!getbibliographie <ue>'},
            {name: 'obtenir les modalitées de contrôle des connaissances d\'une UE :', value : '!getmcc <ue>'},
            {name: '(M) Kick un membre :', value : '!kick @utilisateur '},
            {name: 'jouer de la musique sur un salon vocal :', value : '!play <lien youtube> | !play <nom musique>'},
            {name: 'stoper la musique du salon vocal :', value : '!stop'},
            {name: 'passer la musique actuelle :', value : '!skip'},
            {name: 'jouer la musique en boucle (deuxième fois pour annuler la boucle) :', value : '!loop'},
            {name: '(M) mute un membre :', value : '!mute @utilisateur '},
            {name: '(M) mettre en place le serveur pour le bot (à lancer lors de l\'invitation du bot)):', value : '!setup <nombre de groupes>'},            
        )
        .setImage('https://i.imgur.com/vzhDFmt.jpg')

        message.channel.send(newEmbed);

    }

    
}