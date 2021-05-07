const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

var loop = false;
const queue = new Map();
//queue(message.guild.id, queue_constructor object {voide_channel, text_channel, connection, song[]});

module.exports = {
    name: 'musique',
    //aliases
    //cooldown
    description : "commande musique",
    async execute(command,message, args, client, Discord){
        const voice_channel = message.member.voice.channel;
        if(!voice_channel) return message.channel.send('faut être sur un channel vocal pour jouer de la musique!!');
        //const permissions = voice_channel.permissionsFor(message.client.user);
        const server_queue = queue.get(message.guild.id);
        if(command === 'play'){
            if(!args.length) return message.channel.send('il manque des arguments!');
            let song = {};

            if(ytdl.validateURL(args[0])) {
                const song_info = await ytdl.getInfo(args[0]);
                song = {title: song_info.videoDetails.title, url : song_info.videoDetails.video_url}
                message.channel.send(song.title);
            }else{
                const video_finder = async (query) =>{
                    const videoResult = await ytSearch(query);
                    return(videoResult.videos.length > 1) ? videoResult.videos[0] : null;
                }
                const video = await video_finder(args.join(' '));
                if (video) {
                    song = { title: video.title, url: video.url}
                    //return message.channel.send(song.title);
                }else{
                    message.channel.send('erreur g pas trouvé de video :(');
                }
            }

            if(!server_queue){
                const queue_constructor = {
                    voice_channel: voice_channel,
                    text_channel : message.channel,
                    connection: null,
                    songs: []
                }
                queue.set(message.guild.id, queue_constructor);
                queue_constructor.songs.push(song);

                try{
                    const connection = await voice_channel.join();
                    queue_constructor.connection = connection;
                    video_player(message.guild, queue_constructor.songs[0]);
                }catch (error){
                    queue.delete(message.guild.id);
                    message.channel.send('erreur de connection au vocal');
                    throw error;
                }
            }else{
                server_queue.songs.push(song);
                return message.channel.send(`**${song.title}** ajouté a la file!!`);
            }
        }
        else if(command === 'skip') skip_song(message, server_queue);
        else if(command === 'stop') stop_song(message, server_queue);
        else if(command === 'loop') loop_song(message);
    }


}

const video_player = async (guild, song) => {
    const song_queue = queue.get(guild.id);
    if(!song){
        song_queue.voice_channel.leave();
        queue.delete(guild.id);
        return;
    }
    const stream = ytdl(song.url, {filter: 'audioonly'});
    song_queue.connection.play(stream, {seek: 0, volume: 0.5}).on('finish', () => {
        if (!loop) song_queue.songs.shift();
        video_player(guild, song_queue.songs[0]);
    });
    await song_queue.text_channel.send(`en train de jouer **${song.title}**`);
}

const skip_song = (message, server_queue) =>{
    if(!message.member.voice.channel) return message.channel.send('tu dois etre sur un salon vocal pour executer cette commande!');
    if(!server_queue) return message.channel.send("il n'y a rien dans la queue!");
    server_queue.connection.dispatcher.end();
}

const stop_song = (message, server_queue) =>{
    if(!message.member.voice.channel) return message.channel.send('tu dois etre sur un salon vocal pour executer cette commande!');
    server_queue.songs = [];
    server_queue.connection.dispatcher.end();
}

const loop_song = (message) =>{
    if(!message.member.voice.channel) return message.channel.send('tu dois etre sur un salon vocal pour executer cette commande!');
    if (!loop){
        loop = true;
        message.channel.send('boucle activée');
    }
    else if (loop){
         loop = false;
         message.channel.send('boucle désactivée');
    }
}
