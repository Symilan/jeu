const fs = require('fs');

function textFromPath(file)
{
    var data = fs.readFileSync(file, 'utf8');
    return data;
}
