module.exports={
    name: 'finpresentation',
    description: 'pour la presentation orale',
    execute(message, args){
        message.channel.send("Fin de la demonstration!", {files: ['https://i.imgur.com/Teg1941.png']});
    }
}
