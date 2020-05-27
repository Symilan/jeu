const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({ bots : [] }).write();

module.exports = class Database {
    static addBot(bot) {
        db.get('bots').push(bot).write();
    }
    static getBot(id) {
        return db.get('bots').find({id : id}).value();
    }
}
