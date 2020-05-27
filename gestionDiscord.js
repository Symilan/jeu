const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = "+";
const Bot = require("bot.js")
const invitetoserv = "https://discord.com/api/oauth2/authorize?client_id=715180721794187286&permissions=1812462657&scope=bot"


module.exports = class gestionnaireDiscord{
    static addBotToServ(){
        /*Cette procédure permet de donner le lien d'invitation du bot au serveur. La personne voulant ajouter
        le bot se retrouve alors redirigé vers une page web qui lui donne la possibilité de le faire, ce qui permettra
        par la suite au bot d'intéragir avec la communauté comme il se doit. */
        console.log("vous devez dans un premier temps inviter le bot sur votre serveur" + invitetoserv);
    }

    static connect(name, brain, channel){
        /*Cette fonction connecte le bot au serveur avec un nom et une personnalité / un cerveau donnés en argument
        et lui indique sur quel channel sur serveur parler.*/
    }

}