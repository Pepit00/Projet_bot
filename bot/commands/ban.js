module.exports ={
    name:'ban',
    description:"ban command",
    execute(message,args){
        const member = message.mentions.users.first();
        if(member){
            if(message.member.roles.cache.some(role => role.name === 'moderateur')){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.ban();
                message.channel.send(`${member} a été banis`);
            
            }else {
                message.channel.send('Vous n\'avez pas la permission d\'executer cette commande');
    }}else{message.channel.send('Le memebre n\'existe pas');}
}
}