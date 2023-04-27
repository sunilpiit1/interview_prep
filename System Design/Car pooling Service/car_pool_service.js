class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  basicDetails() {
    return this;
  }
}

class Driver extends User {
  constructor(name, age, email, adhaarNumber) {
    super(name, age, email);
    this.adhaarNumber = adhaarNumber;
    this.carList = [];
    this.currentCar = undefined;
    this.isAvailable = true;
  }

  registerCar(carName, carNumber) {
    this.carList.push(new Car(carName, carNumber));
    this.currentCar = this.carList[this.carList.length - 1];
  }

  selectCar(index) {
    this.currentCar = this.carList[index];
  }
}

class Booker extends User {}

class Car {
  constructor(carName, carNumber) {
    this.name = carName;
    this.number = carNumber;
  }
}
