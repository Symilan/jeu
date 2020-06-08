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
        this.filename = 'brainfile' + id + '.rive' 
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

    start()
    {
        this.chatBot = new RiveScript();
        fs.appendFile(this.filename, this.brain, function (err) {
            if (err) throw err;
            console.log('Saved!');
          });
        fs.writeFileSync('uselessFile.rive', this.brain);
        let transmissionDeThisALInterieurDeLaFonctionLoadFileQuiArriveJusteApres = this;
        this.chatBot.loadFile('uselessFile.rive').then(function(){
                transmissionDeThisALInterieurDeLaFonctionLoadFileQuiArriveJusteApres.chatBot.sortReplies();
            }).catch(function(error)
            {
                console.log("Erreur lors de l'ouverture du brain : " + error);
            });
        
    }

    async ask(question)
    {
        await sleep(100);
        let reply = this.chatBot.reply('local-user', question);
        return reply;
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}