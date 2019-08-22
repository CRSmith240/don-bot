class Classic {
  getClassicMessage() {
    const classicReleaseDate = new Date("Aug 26, 2019 22:00:00").getTime();
    const today = new Date();
    const timeTilClassic = classicReleaseDate - today;

    const days = Math.floor(timeTilClassic / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeTilClassic % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeTilClassic % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeTilClassic % (1000 * 60)) / 1000);

    const message = 'It\'s only ' +
      days + ' days, ' +
      hours + ' hours, ' +
      minutes + ' minutes, and ' +
      seconds + ' seconds away!'

    console.log(message);
    return message
  }
}

module.exports = Classic