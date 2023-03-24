class Temp {
  constructor(name) {
    this.name = name;
  }

  /**below two declarations are added as property to the created object */
  surname = 'Pal';
  /**since the below one is also a variable so it will be added as a property to the object instance */
  callFullName = () => {
    console.log(this.name + this.surname);
  };

  /**this function is added to prototype */
  greet() {
    console.log('Hola! How are you?');
  }
}

let me = new Temp('Sunil');
console.log(me);
me.callFullName();
me.greet();
