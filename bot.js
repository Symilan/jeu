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
            console.log(this.Chalk.green("Succès de la lecture"));
            this.Bot.sortReplies();
        }, function(error) {
            console.log("Erreur lors de la lecture du fichier : "+ error);
        });
    }

    ask(){
        this.readLine.question('Votre message : ' , (message) => {
            reply = this.Bot.reply('local-user', message).then(function(reply) {
                console.log(this.Chalk.red("Bot : " + reply));
            });
        })
    }
}