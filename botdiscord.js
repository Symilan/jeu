const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = "+";
const Bot = require('./bot')

module.exports = class BotDiscord{
    constructor(){
        client.login(NzE1MTgwNzIxNzk0MTg3Mjg2.Xs5o9A.s-TZUKTeoNfmMUXBgbaJxdJ9QzI);
        this.bots = []; // Je met ici en place la liste des bots de discussions qui sont présents sur le serveur.
    }

    static addChatBot(id, brain, channel){
        let newbot = new Bot(id, brain, channel);
        this.bots.push(newbot);
    }
}