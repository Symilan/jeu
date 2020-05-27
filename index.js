const express = require('express')
const app = express();
const Bot = require('./bot');
const Database = require('./database');

app.get('/bots/',function(req,res){
    let id = req.query.id;
    if (id != undefined)
    {
        let botAsked = Database.getBot(id);
        if (botAsked != undefined)
        {
            res.json(bot);
            res.send();
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

app.post('/bots',function(req,res){
    let botSent
});

app.listen(8080,function(){
    console.log('Ca tourne.');
});