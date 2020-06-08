const express = require('express')
const app = express();
const fs = require('fs');
const Bot = require('./bot');
const Database = require('./database');
const gestionnaire = require('./gestionDiscord');
var bodyParser = require('body-parser');
var urlencodedparser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
  }));

app.get('/bots/',function(req,res){
    let id = req.query.id;
    if (id != undefined)
    {
        id = parseInt(id);
        let botAsked = Bot.getBotFromDB(id);
        if (botAsked != undefined)
        {
            res.send(botAsked);
            console.log('Fichier envoyé');
        }
        else
        {
            console.log("Le bot " + id + " n'existe pas.");
        }
    }
    else
    {
        console.log("Le paramètre 'id' ne peut pas être à 'undefined'.");
    }
});

app.post('/bots', function(req,res){
    let receivedBrain = req.body.brain;
    let receivedChannel = req.body.channel;
    if (receivedBrain != undefined)
    {
        let newBot = new Bot(Database.getCurrentId(), receivedBrain, '');

        gestionnaire.addBot(Database.getCurrentId(), receivedBrain, receivedChannel);

        Database.incrCurrentId();
        Database.addBot(newBot);
    }
    else 
    {
        console.log("Le body de la requete doit contenir un élément 'brain'.");
    }
    if (receivedChannel != undefined)
    {
        Database.updateBotChannel(Database.getCurrentId-1, receivedChannel);
    }
});

app.put('/bots', function(req,res){
    let receivedId = req.body.id;
    let receivedBrain = req.body.brain;
    let receivedChannel = req.body.channel;
    if (receivedId != undefined)
    {
        receivedId = parseInt(receivedId);
        if (Database.getBot(receivedId) != undefined)
        {
            if (receivedBrain != undefined)
            {
                Database.updateBotBrain(receivedId, receivedBrain);
                gestionnaire.putBotBrain(receivedId, receivedBrain);
            }
            if (receivedChannel != undefined)
            {
                Database.updateBotChannel(receivedId, receivedChannel);
                gestionnaire.putBotChannel(receivedId, receivedChannel);
            }
        }
        else
        {
            console.log("Le bot " + receivedId + " n'existe pas.");
        }
    }
    else
    {
        console.log("Le body de la requête doit contenir  un élément 'id'.");
    }
})

app.delete('/bots', function(req,res){
    let receivedId = req.body.id;
    if (receivedId != undefined)
    {
        receivedId = parseInt(receivedId);
        if (Database.getBot(receivedId) != undefined)
        {
            receivedId = parseInt(receivedId);
            Database.removeBot(receivedId);

            gestionnaire.delBot(receivedId);
        }
        else 
        {
            console.log("Le bot " + receivedId + " n'existe pas.");
        }
    }
    else
    {
        console.log("Le body de la requête doit contenir  un élément 'id'.");
    }
})

app.listen(8080,function(){
    console.log('Ca tourne.');
    gestionnaire.connect();
    let listebot = Database.getAllBots();
    for(let i = 0; i < listebot.length; i++){
       gestionnaire.addBot(listebot[i].id, listebot[i].brain, listebot[i].channel);
   }
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
