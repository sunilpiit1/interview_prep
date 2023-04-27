const BMSSystem = require('./models/BMS');
const prompt = require('prompt-sync')();

(function () {
  let system = new BMSSystem();

  /**controller logic*/
  function processCommand(command) {
    // console.log(command);
    let [main] = command.split(' ');
    switch (main) {
      case 'create-hall':
        system.addHall();
        break;
      case 'display-hall':
        console.log(system.halls);
        break;
    }
  }

  while (1) {
    let command = prompt('tell us what you want to do   ');
    processCommand(command);
  }
})();
