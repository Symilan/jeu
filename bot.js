FileReader = require('./fileReader.js')

module.exports = class Bot{
    constructor(id, brain, channel){
        this.id = id;
        this.brain = brain;
        this.channel = channel;
    }

    setBrainFromFile(brainFile)
    {
        this.brain = FileReader.textFromPath(brain);
    }
}