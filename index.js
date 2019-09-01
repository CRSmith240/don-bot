// Discord stuff
const Discord = require('discord.js');
const bot = new Discord.Client();

// Imports/ requires
const { token } = require('./settings');
const Stocks = require('./Stocks.js');
const Classic = require('./Classic.js');

const classic = new Classic();
// Bot code
bot.on('ready', () => {
  console.log('WHERES MY DEW!?!?!');
})

bot.on('message', async msg => {
  // if (msg.content.toLowerCase().includes('classic')) {
  //   let classicMessage = classic.getClassicMessage();
  //   msg.reply(classicMessage);
  // }

  if(msg.content.includes('NAK')) {
    var time = '1';
    if(msg.content.match(/NAK \d+/)){
      console.log('a');
      time = msg.content.split(' ')[1];
      let stockValues = await new Stocks().nakTicker(time);
      msg.reply(stockValues);
    }
    else if(msg.content === 'NAK'){
      console.log('b');
      let stockValues = await new Stocks().nakTicker(time);
      msg.reply(stockValues);
    }
  }
})

bot.login(token);