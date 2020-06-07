const Bot = require('./bot')

module.exports = class BotDiscord{
    constructor(){
        this.bots = []; // Je met ici en place la liste des bots de discussions qui sont présents sur le serveur.
    }

    static addChatBot(id, brain, channel){
        let newbot = new Bot(id, brain, channel);
        this.bots.push(newbot);
    }
}