FileReader = require('./fileReader.js')

module.exports = class Bot{
    constructor(id, brain, channel){
        this.id = id;
        this.brain = FileReader.textFromPath(brain);
        this.channel = channel;
    }
}