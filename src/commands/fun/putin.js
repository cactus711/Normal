const {
    Command
} = require('klasa');
const {
    MessageEmbed
} = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'putin',
            enabled: true,
            runIn: ['text'],
            cooldown: 0,
            deletable: false,
            bucket: 1,
            aliases: ['Putin'],
            guarded: false,
            nsfw: false,
            permissionLevel: 0,
            requiredPermissions: [],
            requiredSettings: [],
            subcommands: false,
            description: 'Un meme de Putin',
            quotedStringSupport: false,
            extendedHelp: 'Muestra un meme de Putin y Minecraft'
        });
    }

    async run(message, [...params]) {


        message.send(
            new MessageEmbed()
            .setTitle('<:comunismo:704342128901357630>・Putin xdddddd')
            .setColor('RANDOM')
        );
        message.send('https://cdn.discordapp.com/attachments/734479749212012584/735568347843788901/b775c50cce9c8e87e6c414516c16afaf.mp4');
    }

}






//https://cdn.discordapp.com/attachments/734479749212012584/735568347843788901/b775c50cce9c8e87e6c414516c16afaf.mp4