module.exports= {
    name: 'regles',
    description: 'display les regles',
    execute(message, args, Discord){
        //if(message.member.roles.cache.has('244592625577885697')){
        //a peu pres tt les trucs possibles pr les embed
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#4beddc')
        .setTitle('LES REGLES')
        .setURL('https://www.youtube.com/watch?v=qMQ-y9dHE2k')
        .setDescription('c est les regles la en fait @everyone')
        .addFields(
            {name: 'Règle 1 ', value : 'blablabla'},
            {name: 'Règle 2 ', value : 'blablabla'},
            
            
        )
        .setImage('https://animeland.fr/wp-content/uploads/2017/03/hamtaro2.png')
        .setFooter('slt teste en');

        message.channel.send(newEmbed);
        //}
        //else {
            //message.channel.send("t'as pas le droit");
        //}
    }

    
}