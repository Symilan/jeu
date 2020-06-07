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
client.login('NzE1MTgwNzIxNzk0MTg3Mjg2.Xt1cUA.Ub' + 'bTSN1IZS8yRg7a8EkMNzur7tA');
/* Ici va être traité la discussion entre le programme principale et le bot. C'est par ce port que le père 
va pouvoir transmettre les bots à rendre actifs sur le serveur. */
parentPort.on("message", (message) => {
    let bot = new Bot(message[0], message[1], message[2]); // ne bot de discussion créé ne parle que sur un seul channel du serveur pour le moment.
    bot.start();
    bots.push(bot);
})

/** On va ici gérer les discussions sur Discord. Le bot Discord va récupérer le channel duquel 
 * est issue  le message, vérifier à quel bot ce channel est associé, et enfin transmettre le message
 * au bot concerné si celui-ci existe pour qu'il écrive une réponse, et que le message soit ignoré sinon.
 */ 
client.on("message", (message) => {
    let chan = message.channel.id
    let answer = '';
    for(let i = 0; i < bots.length; i++){
        if(bots[i].channel == chan){
            answer = bots[i].ask(message.content);
        }
    }
    if(answer != ''){message.channel.send(answer);}
})
