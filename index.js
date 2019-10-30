// Discord stuff
const Discord = require('discord.js');
const bot = new Discord.Client();

// Imports/ requires
const { token } = require('./settings');
const Stocks = require('./Stocks.js');
const Classic = require('./Classic.js');
const JacobNames = require('./bot-resources/jacob.json');

const classic = new Classic();
// Bot code
bot.on('ready', () => {
  console.log('WHERES MY DEW!?!?!');
})

bot.on('message', async msg => {
  if (msg.content.toLowerCase().includes('classic')) {
    let classicMessage = classic.getClassicMessage();
    msg.reply(classicMessage);
  }

  if(msg.content.includes('NAK')) {
    var time = '1';
    if(msg.content.match(/NAK \d+/)){
      time = msg.content.split(' ')[1];
      let stockValues = await new Stocks().nakTicker(time);
      msg.reply(stockValues);
    }
    else if(msg.content === 'NAK'){
      let stockValues = await new Stocks().nakTicker(time);
      msg.reply(stockValues);
    }
  }

  if(msg.content.toLowerCase().includes("jacob bradley")) {
    var name = Math.floor(Math.random() * (JacobNames['names'].length-1));
    msg.channel.send(JacobNames['names'][name]);
  }

  if(msg.content.toLowerCase().includes('birb')) {
    var file = Math.floor(Math.random() * 19);
    msg.channel.send({files: [`./bot-resources/birbs/birb${file}.jpg`]});
  }
})

bot.login(token);