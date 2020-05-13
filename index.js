const express = require('express');
const app = express();
const ReadLine = require('readline');
const RiveScript = require('rivescript');

const bot = new RiveScript();
const readLine = ReadLine.createInterface({
    input : process.stdin,
    output : process.stdout
})

function ask() {
    readLine.question('Votre message : ' , (message) => {
        let reply 
    })
}

/*
app.get('/',function(req,res){
    res.send('Hello World');
});

app.listen(8080,function(){
    console.log('Ca tourne.');
});*/