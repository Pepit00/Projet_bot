module.exports = {
    name: 'commands',
    description: 'display commands',
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#4beddc')
            .setTitle('LES COMMANDES')
            .setDescription('Voici les commandes utilisable par ce bot, les commandes comportant un (M) ne peuvent êtres utilisées seulement par un moderateur.')
            .addFields(
                { name: '(M) mettre en place le serveur pour le bot (à lancer lors de l\'invitation du bot)):', value: '!setup <nombre de groupes>' },
                { name: '(M) creer un nouveau groupe :', value: '!addgroup  <numero de groupe>' },
                { name: '(M) Kick un utilisateur :', value: '!kick @utilisateur ' },
                { name: '(M) Bannir un utilisateur :', value: '!ban @utilisateur ' },
                { name: '(M) mute un utilisateur :', value: '!mute @utilisateur ' },
                { name: '(M) demute un utilisateur :', value: '!demute @utilisateur ' },
                { name: '(M) envoyer un message de debut de cours pour le groupe concerné :', value: '!classalert <ue> @role' },
                { name: '(M) mettre en place une alarme pour un groupe :', value: '!alarm <min> @role' },
                { name: '(M) ajouter un document a la bibliographie d\' une ue :', value: '!addBibliographie  <ue> <document> <lien optionnel>' },
                { name: '(M) mettre à jour un document de la bibliographie d\'une ue :', value: '!updatebibliographie <ue> <document> <lien optionnel>' },
                { name: '(M) supprimer un document de la bibliographie d\'une ue :', value: '!deletebibliographie <ue> <document>' },
                { name: '(M) supprimer tous les documents de la bibliographie d\'une UE :', value: '!deleteUEbibliographie <ue>' },
                { name: 'obtenir la bibliographie d\'une ue :', value: '!getbibliographie <ue>' },
                { name: '(M) ajouter les modalitées de contrôle des connaissances d\'une UE :', value: '!addMCC <ue> <notation>' },
                { name: '(M) mettre à jour les modalitées de contrôle des connaissances d\'une UE :', value: '!updateMCC <ue> <notation>' },
                { name: '(M) suprimer les les modalitées de contrôle des connaissances d\'une UE :', value: '!deleteMCC <ue>' },
                { name: '(M) initialiser la liste de présence', value: '!presentlist'},
                { name: 's\'inscrire sur la liste de présente', value: '!present'},
                { name: '(M) afficher la liste de présence', value: '!closelist'},
                { name: 'obtenir les modalitées de contrôle des connaissances d\'une UE :', value: '!getmcc <ue>' },
                { name: 'jouer de la musique sur un salon vocal :', value: '!play <lien youtube> | !play <nom musique>' },
                { name: 'stoper la musique du salon vocal :', value: '!stop' },
                { name: 'passer la musique actuelle :', value: '!skip' },
                { name: 'jouer la musique en boucle (deuxième fois pour annuler la boucle) :', value: '!loop' },
                { name: 'Afficher les commandes :', value: '!commands' },

            )
            .setImage('https://i.imgur.com/vzhDFmt.jpg')

        message.channel.send(newEmbed);

    }


}