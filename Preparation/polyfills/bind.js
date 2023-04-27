/**polyfill for bind method on function object */
/** bind actually return you a function which is permanentally binded to the provided context/object */

const obj = {
  name: "Sunil Pal",
  age: "24",
  college: "IIT Indore",
};

Function.prototype.customBind = function (context, ...args) {
  const obj = context;
  const fn = this;
  return function (...restArgs) {
    return fn.call(obj, ...args, ...restArgs); // if he asks to create call also then create it
  };
};

/** binding doesn't work on arrow functions
 * arrow function this keyword depends upon their position of declaration
 */
function bio() {
  console.log(
    `My name is ${this.name} and my age is ${this.age}, I studied in ${this.college}`
  );
}

const bindedBio = bio.customBind(obj);

(function () {
  /** now observe that context won't change whereever you invoke that function */
  bindedBio();
})();
