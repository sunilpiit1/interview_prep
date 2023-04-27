function bio() {
  return `my name is ${this.name} and my age is ${this.age}`;
}
const obj = {
  name: "Sunil",
  age: 25,
};
console.log(bio.call(obj)); //arguments can also be passed if any

/**polyfill for call method is */
Function.prototype.customCall = function (context, ...arguments) {
  const fn = this;
  const obj = context;
  obj.tempfn = fn;
  const result = obj.tempfn(...arguments);
  delete obj.tempfn;
  return result;
};
console.log(bio.customCall({ name: "Anil Pal", age: 27 }));
