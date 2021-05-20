module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    requiredPermissions: ['ADMINISTRATOR'],
    async execute(message, args, Discord, client) {
       if (message.member.roles.cache.some(role => role.name === 'moderateur' || role.name === 'enseignant' )) {
            const channel = message.channel;

            const roleOne = message.guild.roles.cache.find(role => role.name === "groupe-1");
            const roleTwo = message.guild.roles.cache.find(role => role.name === "groupe-2");
            const roleThree = message.guild.roles.cache.find(role => role.name === "groupe-3");

            const roleOneEmoji = ':one:';
            const roleTwoEmoji = ':two:';
            const roleThreeEmoji = ':three:';

            let embed = new Discord.MessageEmbed()
                .setColor('#0000FF')
                .setTitle('Choisir son groupe')
                .setDescription('Cliquez sur une réaction pour sélectionner votre groupe :\n\n'
                    + `${roleOneEmoji} pour le groupe-1 \n`
                    + `${roleTwoEmoji} pour le groupe-2 \n`
                    + `${roleThreeEmoji} pour le groupe-3`);

            let messageEmbed = await message.channel.send(embed);
            messageEmbed.react(roleOneEmoji);
            messageEmbed.react(roleTwoEmoji);
            messageEmbed.react(roleThreeEmoji);

            if(guild.me.hasPermission('MANAGE_MESSAGES')){
                message.delete()}
            if(!guild.me.hasPermission('MANAGE_ROLES')){
                message.reply("Le bot ne peut pas gérer les rôles.")
                return
            }


            client.on('messageReactionAdd', async (reaction, user) => {
                if (reaction.message.partial) await reaction.message.fetch();
                if (reaction.partial) await reaction.fetch();
                if (user.bot) return;
                if (!reaction.message.guild) return;

                if (reaction.message.channel.id == channel) {
                    if (reaction.emoji.name === roleOneEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(roleOne);
                    }
                    if (reaction.emoji.name === roleTwoEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(roleTwo);
                    }
                    if (reaction.emoji.name === roleThreeEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(roleThree);
                    }
                } else {
                    return;
                }

            });

            client.on('messageReactionRemove', async (reaction, user) => {

                if (reaction.message.partial) await reaction.message.fetch();
                if (reaction.partial) await reaction.fetch();
                if (user.bot) return;
                if (!reaction.message.guild) return;


                if (reaction.message.channel.id == channel) {
                    if (reaction.emoji.name === roleOneEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(roleOne);
                    }
                    if (reaction.emoji.name === roleTwoEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(roleTwo);
                    }
                    if (reaction.emoji.name === roleThreeEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(roleThree);
                    }

                } else {
                    return;
                }
            });
        }
        else {
            message.channel.send("Vous n'avez pas la permission d'executer cette commande.");
        }
    }

}
