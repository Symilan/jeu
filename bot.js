module.exports = class Bot{
    
    constructor(name, code){

        this.name = name;
        this.ReadLine = require('readline');
        this.RiveScript = require('rivescript');
        this.Chalk = require('chalk');
        this.Bot = new this.RiveScript();
        this.readLine = this.ReadLine.createInterface({
            input : process.stdin,
            output : process.stdout
        })

        this.Bot.loadFile(code, function() {
            console.log("Succès de la lecture"); 
        }, function(error) {
            console.log("Erreur lors de la lecture du fichier : "+ error);
        });
        this.Bot.sortReplies();
    }
}