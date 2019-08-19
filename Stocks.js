const { av_key } = require('./settings');
const fetch = require('node-fetch');

class Stocks {

  async nakTicker(time) {
    var api = this.getAPINameAndParams(time);
    var url = `https://www.alphavantage.co/query?function=${api[0]}&symbol=NAK&${api[1]}&apikey=${av_key}`

    let av_response = await fetch(url)
      .then(function (response) { return response.json(); })
      .then(function (json) { return json; })
      .catch(error => msg.reply('alpha vantage might be rejecting api calls: ' + error.message));

    var keys = Object.keys(av_response); //get keys that holds our nice data
    var times = Object.keys(av_response[keys[1]]); //alphavantage holds their dates in the second object

    var values = av_response[keys[1]][times[0]];

    var keys = Object.keys(values);

    var date = new Date().toISOString().split('T')[0];

    var span = time === '1' ? date.toString() : `${times[1]} - ${times[0]}`
    var response = `Thanks for tuning into the DonBotTicker™ - The currently fetched span for NAK is ${span}:\n`;

    for (var key in keys) {
      var dataPoint = keys[key].split(' ')[1];
      response += `${dataPoint}: ${values[keys[key]]}\n`;
    }
    console.log(response);
    return response;
  }

  getAPINameAndParams(time) {
    var api_name = '';
    var param = '';
    if (time === '1') {
      api_name = 'TIME_SERIES_DAILY';
      param = 'outputsize=full'
    }
    else {
      api_name = 'TIME_SERIES_INTRADAY'
      param = `interval=${time}min`
    }
    return [api_name, param];
  }
}
module.exports = Stocks