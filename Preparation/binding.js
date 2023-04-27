/** in javascript every function gets executed in some conext denoted by this keyword
    this of a funtion totally depends upon where the function is getting executed (not in case of arrow function)*/

// IMP - allthe callbacks usuallu looses their context, so need to be binded to the original context

// by default this is assigned to global/window object and strict mode it is assigned to undefined

/** Implicit binding */
const obj = {
  name: "Sunil Pal",
  age: 25,
  bio() {
    console.log(`my name is ${this.name} and my age is ${this.age}`);
  },
};
obj.bio();

/** explicit binding */
const obj2 = {
  name: "Anil Pal",
  age: 27,
};
// using bind
/** using bind has a greater advantage as it produces a function which is binded to a certain object
 * irrespective of where you are invoking it
 */
const bindedBio = obj.bio.bind(obj2);
bindedBio();
// using call
obj.bio.call(obj2);

/** case of losing context of a function */
setTimeout(obj.bio, 1000); // this will console.log undefined and undefined as name and age
/** FIX */
setTimeout(obj.bio.bind(obj), 1000);
