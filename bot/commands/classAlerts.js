module.exports ={
name:'classAlert',
    description:"Class alerts command",
    execute(message,args){
        const roleExist=message.guild.roles.cache.some(r=> r.name === args[0]);
        console.log(args);
        if (!roleExist){
            message.channel.send("le role n'existe pas");
            return;
    };
        const roleTarget=message.guild.roles.cache.find(r=> r.name === args[0]);
        const isMentionable=roleTarget.mentionable;
        if(isMentionable){
            if(message.member.roles.cache.some(role => role.name === 'moderateur')){
                const roleId=roleTarget.id;
                message.channel.send("Bonjour, "+`<@&${roleId}>`+" votre UE "+args[1]+" à débuté un cours");
            
            }else {
                message.channel.send('Vous n\'avez pas la permission d\'executer cette commande');
    }}else{message.channel.send('Le role n\'est pas mentionnable');}
}
}