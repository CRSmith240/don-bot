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
    '!mock': this.MockMessage,
    '!yikes': this.Yikes,
  }

  inclusiveCommands = ['jacob bradley']; // add to this if you want your command to trigger in sentences (e.g., "something jacob bradley something");

  getAction(action) {
    try{
      var wholeMessage = action;
      for(var cmd of this.inclusiveCommands) {
          if (action.includes(cmd)) {
            action = cmd;
            break;
          }
          else {
            continue;
          }
        }

      return wholeMessage[0] == "!" ? this.dict[action.split(/\s/)[0]](wholeMessage) : this.dict[action]()

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

  Yikes(message){
    return "This. Right now. Yikes :flushed:"
  }

  MockMessage(message){
    message = message.split('!mock')[1].trim();
    var mockMessage = "";
    for(var x = 0; x < message.length; x++){
      if(Math.random() > .5){
        mockMessage += message[x].toUpperCase();
      }
      else{
        mockMessage += message[x]
      }
    }
    return mockMessage;
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