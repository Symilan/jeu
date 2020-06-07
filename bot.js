FileReader = require('./fileReader.js')

module.exports = class Bot{
    constructor(id, brain, userInterface){
        this.id = id;
        this.brain = brain;
        this.userInterface = userInterface;
    }

    setBrainFromFile(brainFile)
    {
        this.brain = FileReader.textFromPath(brain);
    }
}