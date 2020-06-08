/*Ce code sera le corps principale du bot discord. C'est ici qu'il va intéragir avec les utilisateurs.
Il va tourner dans un thread secondaire, et pourra discuter avec le programme principale via un port particulier
entre pere et fils. Il y aura donc ici tout le traitement des discussions. */ 
const {
    Worker, MessageChannel, MessagePort, isMainThread, parentPort
  } = require('worker_threads');

const Discord = require('discord.js');
const client = new Discord.Client();

const Bot = require('./bot')
const bots = []
client.login('NzE1MTgwNzIxNzk0MTg3Mjg2.Xt1cUA.Ub' + 'bTSN1IZS8yRg7a8EkMNzur7tA'); //le token du bot est écrit ainsi pour éviter qu'il soit changé automatiquement par discord.

/* Ici va être traité la discussion entre le programme principale et le bot. C'est par ce port que le père 
va pouvoir transmettre les bots à rendre actifs sur le serveur. */
parentPort.on("message", (message) => {
    if(message[3] == "add"){
        let bot = new Bot(message[0], message[1], message[2]); // le bot de discussion créé ne parle que sur un seul channel du serveur pour le moment.
        bot.start();
        bots.push(bot);
    }

    else if(message[3] == "del"){
        bots.splice(message[0], 1);
    }

    else if(message[3] == "putBrain"){
        let id = message[0];
        let newBrain = message[1];
        bots[id].brain = newBrain;
        bots[id].start();
    }

    else if(message[3] == "putChannel"){
        let id = message[0];
        let newChannel = message[2];
        bots[id].channel = newChannel;
    }
})

/** On va ici gérer les discussions sur Discord. Le bot Discord va récupérer le channel duquel 
 * est issue  le message, vérifier à quel bot ce channel est associé, et enfin transmettre le message
 * au bot concerné si celui-ci existe pour qu'il écrive une réponse, et que le message soit ignoré sinon.
 */ 
client.on("message", (message) => {
    if(message.author != client.user){
        let chan = message.channel.id
        let answer = '';
        let foundananswer = false;
        for(let i = 0; i < bots.length; i++){
            if(bots[i].channel == chan && foundananswer == false){
                answer = bots[i].ask(message.content);
                foundananswer = true;
            }
        }
        if(foundananswer == true){
            answer.then(function(reply){if(reply != ''){message.channel.send(reply);}})
            foundananswer = false;
        }
        
    }
})
