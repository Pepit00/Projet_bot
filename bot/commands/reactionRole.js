module.exports = {
    name: 'reactionRole',
    expectedArgs: '<Emoji> <Role tag, or ID>',
    requiredPermissions: ['ADMINISTRATOR'],
    async execute(command, message, args, Discord, client) {
        if (message.member.roles.cache.some(role => role.name === 'moderateur' || role.name === 'enseignant')) {
            const { guild } = message
            const emojirole = new Map();
            const targetChannel = message.channel


            if (!guild.me.hasPermission('MANAGE_ROLES')) {
                message.reply('The bot requires access to manage roles to work correctly')
                return
            }

            console.log(args);
            let emoji = args.shift();
            let role = args.shift();
            if (role === '' || role === undefined) {
                return message.channel.send('Il manque au moins un argument, votre commande doit être de la forme `!addrole [message ID]');
            }

            console.log(emoji);
            if (emoji.includes(':')) {
                const emojiName = emoji.split(':')[1]

                emoji = guild.emojis.cache.find((e) => {
                    //      console.log('emoji name : ' + emojiName);
                    return e.name === emojiName
                })
            }



            if (role.startsWith('<@&')) {
                role = role.substring(3, role.length - 1)
                //console.log(role)
            }

            const newRole =
                guild.roles.cache.find((r) => {
                    return r.name === role || r.id === role
                }) || null

            if (!newRole) {
                message.reply(`Could not find a role for "${role}"`)
                return
            }
            role = newRole;

            let embed = new Discord.MessageEmbed()
                .setColor('#0000FF')
                //  .setTitle('Choisir son groupe')
                .setTitle('Cliquez sur la réaction pour avoir le rôle ' + role.name)
                .setDescription('Retirez votre réaction puis recliquez dessus pour retirer le rôle.');

            let messageEmbed = await message.channel.send(embed);
            messageEmbed.react(emoji);


            message.delete();
            emojirole.set(emoji.id, role.id);
            console.log(emojirole);


            client.on('messageReactionAdd', async (reaction, user) => {
                if (reaction.message.partial) await reaction.message.fetch();
                if (reaction.partial) await reaction.fetch();
                if (user.bot) return;
                if (!reaction.message.guild) return;
                if (reaction.message.channel.id == targetChannel) {
                    let emoji = reaction.emoji.id;
                    if (emojirole.has(emoji)) {
                        let newRole = emojirole.get(emoji);
                        if (message.member.roles.cache.some(r => r.id === newRole)) {
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(newRole);
                        }
                        else {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(newRole);
                        }
                    } else {
                        return;
                    }
                }
            })

        } else {
            message.channel.send('Vous n\'avez pas la permission d\'executer cette commande');
        }
    }
}