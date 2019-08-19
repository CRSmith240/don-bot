// Discord stuff
const Discord = require('discord.js');
const bot = new Discord.Client();

// Imports/ requires
const { token } = require('./settings');
const { Strings } = require('./strings');

// Local const variables
const classicReleaseDate = new Date("Aug 26, 2019 18:00:00").getTime();
const strings = new Strings;

// Bot code
bot.on('ready', () => {
  console.log('WHERES MY DEW!?!?!');
})

bot.on('message', msg => {
  if (msg.content.toLowerCase().includes(strings.wowClassicStrings)) {
    var today = new Date();
    var timeTilClassic = classicReleaseDate - today;

    var days = Math.floor(timeTilClassic / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeTilClassic % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeTilClassic % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeTilClassic % (1000 * 60)) / 1000);

    msg.reply('Wow classic is ' +
      days + ' days, ' +
      hours + ' hours, ' +
      minutes + ' minutes, and ' +
      seconds + ' seconds away!');
  }

  if (msg.content === 'Test') {
    msg.reply("Hi");
  }
})

bot.login(token);