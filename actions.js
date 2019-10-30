const Stocks = require('./Stocks.js');
const Classic = require('./Classic.js');
const JacobNames = require('./bot-resources/jacob.json');

const classic = new Classic();

class Actions{

  dict = {
    'jacob bradley': this.Jacob,
    'nak': this.Nak,
    'birb': this.Birb,
    'classic': this.ClassicMsg,
  }

  inclusiveCommands = ['jacob bradley']; // add to this if you want your command to trigger in sentences (e.g., "something jacob bradley something");

  getAction(action) {
    try{
      for(var cmd of this.inclusiveCommands) {
          if (action.includes(cmd)) {
            action = cmd;
            break;
          }
          else {
            continue;
          }
        }

      return this.dict[action]();

    }
    catch{
      return false;
    }
  }


  //Add Functions below
  Jacob() {
    var name = Math.floor(Math.random() * (JacobNames['names'].length - 1));
    return JacobNames['names'][name];
  }

  async Nak() {
    return await new Stocks().nakTicker('1');
  }

  Birb() {
    var file = Math.floor((Math.random() * 19)+1);
    return [`./bot-resources/birbs/birb${file}.jpg`]
  }

  ClassicMsg() {
    return classic.getClassicMessage();
  }
}

module.exports = Actions;