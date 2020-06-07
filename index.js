const express = require('express')
const app = express();
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
        let botAsked = Database.getBot(id);
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
    if (receivedBrain != undefined)
    {
        let newBot = new Bot(Database.getCurrentId(), receivedBrain, '');
        Database.incrCurrentId();
        Database.addBot(newBot);
    }
    else 
    {
        console.log("Le body de la requete doit contenir un élément 'brain'.");
    }
});

app.put('/bots', function(req,res){
    let receivedId = req.body.id;
    let receivedBrain = req.body.brain;
    if (receivedBrain != undefined && receivedId != undefined)
    {
        receivedId = parseInt(receivedId);
        if (Database.getBot(receivedId) != undefined)
        {
            Database.updateBot(receivedId, receivedBrain);
        }
        else
        {
            console.log("Le bot " + receivedId + " n'existe pas.");
        }
    }
    else
    {
        console.log("Le body de la requête doit contenir  un élément 'id' et un élément 'brain'.");
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
    gestionnaire.lauchBot();
});