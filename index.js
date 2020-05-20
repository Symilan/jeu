const express = require('express')
const app = express();
const Bot = require('./bot');
const Database = require('./database');

//let bot = new Bot('test','./brain.rive');

app.get('/',function(req,res){
    res.send('Hello World');
});

app.listen(8080,function(){
    console.log('Ca tourne.');
});

