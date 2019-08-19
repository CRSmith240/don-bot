const Discord = require('discord.js');
const bot = new Discord.Client();
const { token } = require('./settings');
const Stocks = require('./Stocks.js');

const classicReleaseDate = new Date("Aug 26, 2019 18:00:00").getTime();

bot.on('ready', () => {
  console.log('WHERES MY DEW!?!?!');
})

bot.on('message', async msg => {
  if (msg.content === 'Time til classic?') {
    var today = new Date();
    var timeTilClassic = classicReleaseDate - today;

    var days = Math.floor(timeTilClassic / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeTilClassic % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeTilClassic % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeTilClassic % (1000 * 60)) / 1000);

    msg.reply('Wow classic is ' +
      days + ' days, ' +
      hours + ' hours, ' +
      minutes + ' minutes, ' +
      seconds + ' seconds away!');
  }

  if (msg.content === 'Test') {
    msg.reply("Hi");
  }

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