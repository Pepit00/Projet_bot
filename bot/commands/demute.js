module.exports ={
    name:'demute',
    description:"demute command",
    execute(message,args){
        const member = message.mentions.users.first();
        if(member){
            if(message.member.roles.cache.some(role => role.name === 'moderateur')){
                const memberTarget= message.guild.members.cache.get(member.id);
                memberTarget.roles.remove(message.guild.roles.cache.find(role => role.name === 'puni')).catch(console.error);
                //memberTarget.roles.add('role unmute').catch(console.error);
                message.channel.send(`${member} a été demute`);
            
            }else {
                message.channel.send('Vous n\'avez pas la permission d\'executer cette commande');
    }}else{message.channel.send('Le memebre n\'existe pas');}
}
}