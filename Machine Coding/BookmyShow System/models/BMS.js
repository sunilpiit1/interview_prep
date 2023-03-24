const prompt = require('prompt-sync')();
const uuid = require('uuid');
const Hall = require('./Hall');

class BMSSystem {
  constructor() {
    this.halls = [];
  }

  addHall() {
    let details = {
      name: '',
      city: '',
    };

    for (let key in details) {
      let data = prompt(`please enter ${key}  `);
      details[key] = data;
    }
    let hall = new Hall(details);
    this.halls.push(hall);
  }

  getCities() {
    let halls = this.halls;
    let cities = halls.map((hall) => {
      return hall.city;
    });

    return [...new Set(cities)];
  }
}

module.exports = BMSSystem;
