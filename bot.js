FileReader = require('./fileReader.js')

module.exports = class Bot{
    constructor(id, brain, userInterface){
        this.id = id;
        this.brain = FileReader.textFromPath(brain);
        this.userInterface = userInterface;
    }
}