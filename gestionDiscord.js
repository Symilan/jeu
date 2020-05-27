const BotDiscord = require("./botdiscord")
const invitetoserv = "https://discord.com/api/oauth2/authorize?client_id=715180721794187286&permissions=1812462657&scope=bot"


module.exports = class gestionnaireDiscord{
    static inviteBotToServ(){
        /*Cette procédure permet de donner le lien d'invitation du bot au serveur. La personne voulant ajouter
        le bot se retrouve alors redirigé vers une page web qui lui donne la possibilité de le faire, ce qui permettra
        par la suite au bot d'intéragir avec la communauté comme il se doit. */
        console.log("vous devez dans un premier temps inviter le bot sur votre serveur si ce n'est pas déjà fait en suivant le lien suivant : " + invitetoserv);
    }

    static connect(){
        /*Cette procédure connecte le bot. Elle le "met en marche" pour qu'il puisse commencer à intéragir avec les utilisateurs.*/
        this.inviteBotToServ();
        this.bot = new BotDiscord();
    }

    static addBot(name, brain, channel){
        /*Cette fonction ajoute un bot au serveur avec un nom et une personnalité / un cerveau donnés en argument
        et lui indique sur quel channel du serveur parler.*/
        
    }
}