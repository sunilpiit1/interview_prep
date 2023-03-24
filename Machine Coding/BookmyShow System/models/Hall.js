const { v4: uuid } = require('uuid');

class Hall {
  constructor(details) {
    const { name, city } = details;
    this.id = uuid();
    this.name = name;
    this.city = city;
    this.screens = [];
  }

  addScreens() {}
}

module.exports = Hall;
