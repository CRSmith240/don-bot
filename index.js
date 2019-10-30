// Discord stuff
const Discord = require('discord.js');
const bot = new Discord.Client();

// Imports/ requires
const { token } = require('./settings');
const Actions = require('./actions.js');

const actions = new Actions();

// Bot code
bot.on('ready', () => {
  console.log('WHERES MY DEW!?!?!');
})

bot.on('message', async msg => {
  if(msg.author.bot) {
    return;
  }

  let result = await actions.getAction(msg.content.toLowerCase())

  if(!result){
    return;
  }

  if(Array.isArray(result)) { //currently, only reason to return an array is for files
    msg.channel.send({files: result})
  }
  else{
    msg.channel.send(result);
  }
})

bot.login(token);