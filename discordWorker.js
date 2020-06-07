/*Ce code sera le corps principale du bot discord. C'est ici qu'il va intéragir avec les utilisateurs.
Il va tourner dans un thread secondaire, et pourra discuter avec le programme principale via un port particulier
entre pere et fils. Il y aura donc ici tout le traitement des discussions. */ 
const {
    Worker, MessageChannel, MessagePort, isMainThread, parentPort
  } = require('worker_threads');

const Discord = require('discord.js');
const client = new Discord.Client();

client.login('NzE1MTgwNzIxNzk0MTg3Mjg2.Xt1cUA.Ub' + 'bTSN1IZS8yRg7a8EkMNzur7tA');