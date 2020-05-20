const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({ bots : [] }).write();

module.exports = class Database {
    static addBot(name, brain) {
        db.get('bots').push({name : name, brain : brain}).write();
    }

    static getBot(name) {
        console.log(db.get('bots').find({name : name}).value());
    }
    
}