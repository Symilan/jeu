const express = require('express')
const app = express();
const Bot = require('./bot');
const Database = require('./database');

app.get('/bots/',function(req,res){
    let id = req.query.id;
    if (id != undefined)
    {
        let botData = Database.getBot(id);
        if (botData != undefined)
        {
            let brain = botData.brain;
            console.log(brain);
            res.download('bots/brain.rive','brain.rive');
            console.log('Fichier envoyé');
        }
        else
        {
            console.log("Le bot "+id+" n'existe pas");
        }
    }
    else
    {
        console.log("le paramètre 'id' ne peut pas être à 'undefined'");
    }
});

app.listen(8080,function(){
    console.log('Ca tourne.');
});

