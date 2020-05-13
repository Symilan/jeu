const fs = require('fs');
const Database = require('./database.js');

function textFromPath(file)
{
    var data = fs.readFileSync(file, 'utf8');
    return data;
}
