const express = require('express');
const app = express();
const ReadLine = require('readline');
const RiveScript = require('rivescript');
const Chalk = require('chalk');

const bot = new RiveScript();
const readLine = ReadLine.createInterface({
    input : process.stdin,
    output : process.stdout
})

bot.loadFile('.bots/brain.rive', function() {
    console.log(Chalk.green("Succès de la lecture"));
    bot.sortReplies();
    ask();
}, function(error) {
    console.log("Erreur lors de la lecture du fichier : "+error);
})

function ask() {
    readLine.question('Votre message : ' , (message) => {
        reply = bot.reply('local-user', message).then(function(reply) {
            console.log(Chalk.red("Bot : " + reply));
            ask();
        });
    })
}