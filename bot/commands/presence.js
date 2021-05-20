module.exports = {
    name: 'presence',
    description: 'check who is present',
    async execute(command, message) {
        const voice_channel = message.member.voice.channel;
        let presenceList = [];

        if(command === '!presentlist' ) {
            if (message.member.roles.cache.some(role => role.name === 'moderateur' || role.name === 'enseignant')) {
                presenceList = [];
                return message.channel.send('Tapez !present pour émarger.');
            } else {
                return message.channel.send('Seul un enseignant ou un modérateur peut utiliser cette commande.');
            }
        }

        if(command === '!present') {
            if (!voice_channel) {
                return message.channel.send('Il faut être sur un channel vocal pour assister au cours !');
            }
            else {
                presenceList.push(message.member.nickname);
            }
        }

        if(command === '!closelist'){
            if (message.member.roles.cache.some(role => role.name === 'moderateur' || role.name === 'enseignant')) {
                return message.channel.send(presenceList);
                presenceList = [];
            }
            else {
                return message.channel.send('Seul un enseignant ou un modérateur peut utiliser cette commande.');
            }
        }

    }
}