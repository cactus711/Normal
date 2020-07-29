const {
    Command
} = require('klasa');
const {
    MessageEmbed
} = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'f',
            enabled: true,
            runIn: ['text'],
            cooldown: 0,
            deletable: false,
            bucket: 1,
            aliases: ['F'],
            guarded: false,
            nsfw: false,
            permissionLevel: 0,
            requiredPermissions: [],
            requiredSettings: [],
            subcommands: false,
            description: 'Una gran F en el chat',
            quotedStringSupport: false,
            extendedHelp: 'Muestra un gif de una F'
        });
    }

    async run(message, [...params]) {
        // This is where you place the code you want to run for your command

        var fgifarray = [
            'https://media.giphy.com/media/hStvd5LiWCFzYNyxR4/giphy.gif',
            'https://media.giphy.com/media/xTiQylEqfhsP1MQHug/giphy.gif',
            'https://media.giphy.com/media/l3fzM2wgd6TygHbYA/giphy.gif',
            'https://media.giphy.com/media/l3fzM2wgd6TygHbYA/giphy.gif'
        ];

        var fgif = fgifarray[Math.floor(fgifarray.length * Math.random())];

        message.send(
            new MessageEmbed()
                .setTitle(message.language.get('COMMAND_F'))
                .setImage(fgif)
                .setColor('RANDOM')
        );
    }

}

