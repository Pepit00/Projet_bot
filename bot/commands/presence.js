let presenceList = [];

module.exports = {
    name: 'presence',
    description: 'check who is present',
    async execute(command, message) {
        
        const voice_channel = message.member.voice.channel;

        if(command === 'presentlist' ) {
            if (message.member.roles.cache.some(role => role.name === 'moderateur' || role.name === 'enseignant')) {
                presenceList = [];
                return message.channel.send('Tapez !present pour émarger.');
            } else {
                message.channel.send('Vous n\'avez pas la permission d\'executer cette commande');
            }
        }

        if(command === 'present') {
            if (!voice_channel) return message.channel.send('Il faut être sur un salon vocal pour assister au cours !');
            if (message.member.nickname) {
                if (!presenceList.includes(message.member.nickname)) presenceList.push(message.member.nickname);
            }else{
                if (!presenceList.includes(message.member.user.name)) presenceList.push(message.member.user.username);
            } 
        }

        if(command === 'closelist'){
            if (message.member.roles.cache.some(role => role.name === 'moderateur' || role.name === 'enseignant')) {
                console.log(presenceList);
                return message.channel.send(presenceList);
                
               
            }
            else {
                message.channel.send('Vous n\'avez pas la permission d\'executer cette commande');
            }
        }
        

    }
}