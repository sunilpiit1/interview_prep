function Person(name, gender) {
  this.name = name;
  this.gender = gender;
}

Person.prototype.bio = function () {
  console.log(`I'm ${this.name} and I'm a ${this.gender}`);
};

let me = new Person('Sunil', 'Male');
console.log(me);
me.bio();

/**Inheritance in  JS behind the scenes*/
function Employee() {
  Person.call(this, ...arguments);
  this.age = arguments[2];
  this.profession = arguments[3];
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

let me_employee = new Employee('Sunil', 'Male', 24, 'Soft, Engineer');
console.log(me_employee);
me_employee.bio();
