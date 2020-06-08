const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({ bots : [] , currentId : 0}).write();

module.exports = class Database {
    static addBot(bot) {
        db.get('bots').push(bot).write();
    }
    static getBot(id) {
        return db.get('bots').find({id : id}).value();
    }
    static getCurrentId() {
        return db.get('currentId').value();
    }
    static incrCurrentId() {
        let currentId = Database.getCurrentId();
        db.set('currentId', currentId + 1).write();
    }
    static updateBotBrain(botId, newBrain)
    {
        db.get('bots')
            .find({ id: botId })
            .assign({ brain: newBrain})
            .write();
    }
    static updateBotChannel(botId, newChannel)
    {
        db.get('bots')
            .find({ id: botId })
            .assign({ channel: newChannel})
            .write();
    }
    static removeBot(botId)
    {
        db.get('bots').remove({ id: botId }).write();
    }
    static getAllBots()
    {
        return db.get('bots').value();
    }
}
