module.exports = class bot{
    
    constructor(name, code){

        this.ReadLine = require('readline');
        this.RiveScript = require('rivescript');
        this.Chalk = require('chalk');
        this.Bot = new RiveScript();
        this.readLine = ReadLine.createInterface({
            input : process.stdin,
            output : process.stdout
        })

        this.Bot.loadFile(code, function() {
            console.log(Chalk.green("Succès de la lecture"));
            bot.sortReplies();
            ask();
        }, function(error) {
            console.log("Erreur lors de la lecture du fichier : "+error);
        });
    }

    static ask(){
        readLine.question('Votre message : ' , (message) => {
            reply = bot.reply('local-user', message).then(function(reply) {
                console.log(Chalk.red("Bot : " + reply));
            });
        })
    }
}