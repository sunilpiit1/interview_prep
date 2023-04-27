class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  /** this is taken just like a variable and it is put in the constructor function
   * and in constructor function this represent the new object
   */
  bio = () => {
    console.log(this);
  };
  abcd = "yo yo yo"; // constructor not needed anymore, but to intialize using props it is needed;
  callMyname = function () {
    console.log(this.name);
  };
  /** below method won't exist as a property on the object itself but will be attached to the prototype */
  callMyAge() {
    console.log(this.age);
  }
}

const sunil = new Person("Sunil Pal", 25);
console.log(sunil);
sunil.bio();
sunil.callMyname();
sunil.callMyAge();
