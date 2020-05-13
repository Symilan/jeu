const express = require('express')
const app = express();
const Bot = require('./bot');

//let bot = new Bot('test','./brain.rive');

app.get('/',function(req,res){
    res.send('Hello World');
});

app.listen(8080,function(){
    console.log('Ca tourne.');
});

