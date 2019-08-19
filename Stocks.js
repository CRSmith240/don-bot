const { av_key } = require('./settings');
const fetch = require('node-fetch');

class Stocks {

  async nakTicker() {
    let av_response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=NAK&interval=5min&apikey=${av_key}`)
      .then(function (response) { return response.json(); })
      .then(function (json) { return json; })
      .catch(error => msg.reply('alpha vantage might be rejecting api calls: ' + error.message));

    var keys = Object.keys(av_response); //get keys that holds our nice data
    var times = Object.keys(av_response[keys[1]]); //alphavantage holds their dates in the second object

    var values = av_response[keys[1]][times[0]];

    var keys = Object.keys(values);
    var response = `Thanks for tuning into the DonBotTicker™ - The currently fetched span for NAK is ${times[1]} - ${times[0]}:\n`;

    for (var key in keys) {
      var dataPoint = keys[key].split(' ')[1];
      response += `${dataPoint}: ${values[keys[key]]}\n`;
    }
    console.log(response);
    return response;
  }
}
module.exports = Stocks