const {Command} = require('klasa'); //klasa

const client = require('nekos.life'); //nekos.life
const neko = new client(); //nekos.life

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'test',
            enabled: true,
            runIn: ['text'],
            cooldown: 0,
            deletable: false,
            bucket: 1,
            aliases: ['commandtest', 'testcommand'],
            guarded: false,
            nsfw: false,
            permissionLevel: 0,
            requiredPermissions: [],
            requiredSettings: [],
            subcommands: false,
            description: 'Comando de prueva',
            quotedStringSupport: false,
            extendedHelp: 'No extended help available ;-; .'
        });
    }
        
    async run(message, [...params]) {
        // This is where you place the code you want to run for your command
        message.send('Comando test. Revisa el terminal Bash :3');
        async function test() {
            console.log(await neko.sfw.hug());
        }
        test();
    }
        
}