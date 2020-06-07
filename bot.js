const FileReader = require('./fileReader.js');
const RiveScript = require('rivescript');
const Database = require('./database')
const fs = require('fs');

module.exports = class Bot{
    constructor(id, brain, channel){
        this.id = id;
        this.brain = brain;
        this.channel = channel;
        this.chatBot = "";
    }

    static getBotFromDB(id)
    {
        let bot = new Bot(0,"","");
        Object.assign(bot, Database.getBot(id));
        return bot;
    }

    setBrainFromFile(brainFile)
    {
        this.brain = FileReader.textFromPath(brain);
    }

    async start()
    {
        this.chatBot = new RiveScript();
        fs.writeFile('uselessFile.rive', this.brain, function (err) {
            if (err) return console.log(err);
        });
        let transmitionDeThisALInterieurDeLaFonctionLoadFileQuiArriveJusteApres = this;
        this.chatBot.loadFile('uselessFile.rive').then(function(){
                transmitionDeThisALInterieurDeLaFonctionLoadFileQuiArriveJusteApres.chatBot.sortReplies();
            }).catch(function(error)
            {
                console.log("Erreur lors de l'ouverture du brain : " + error);
            });
        
    }

    async ask(question)
    {
        await sleep(100);
        let reply = this.chatBot.reply('local-user', question).then(function(reply){
            console.log("reply inside : "+reply);
        });
        await sleep(1000);
        console.log("reply outside : "+reply);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}