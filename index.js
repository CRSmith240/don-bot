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
  if (msg.content.toLowerCase().includes('classic')) {
    let classicMessage = classic.getClassicMessage();
    msg.reply(classicMessage);
  }

  if (msg.content === 'NAK') {
    let stockValues = await new Stocks().nakTicker();
    msg.reply(stockValues);
  }
})

bot.login(token);