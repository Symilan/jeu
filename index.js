const app = express();
const ReadLine = require('readline');
const RiveScript = require('rivescript');
const Bot = require('./bot');

let bot = new Bot('test','./brain.rive');

app.get('/',function(req,res){
    res.send('Hello World');
});

app.listen(8080,function(){
    console.log('Ca tourne.');
});