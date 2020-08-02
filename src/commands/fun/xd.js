const { Command } = require('klasa');
const {MessageEmbed} = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'xd',
            enabled: true,
            runIn: ['text'],
            cooldown: 0,
            deletable: false,
            bucket: 1,
            aliases: ['xD', 'Xd', 'XD'],
            guarded: false,
            nsfw: false,
            permissionLevel: 0,
            requiredPermissions: [],
            requiredSettings: [],
            subcommands: false,
            description: 'pos xd',
            quotedStringSupport: false,
            extendedHelp: 'Muestra un xd'
        });
    }

    async run(message, [...params]) {
        //embed
        message.send(
            new MessageEmbed()
                .setTitle('xdddd')
                .setColor('RANDOM')
        );
    }

}