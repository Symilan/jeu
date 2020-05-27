const fs = require('fs');
const Database = require('./database.js');

module.exports = class FileReader{ 
    static textFromPath(file)
    {
        var data = fs.readFileSync(file, 'utf8');
        return data;
    }
}