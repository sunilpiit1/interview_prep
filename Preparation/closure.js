/**function bundled together with its lexical scope is known as closure
 * with its help function will be able to use lexical env variables even after parent is poped of the call stack
 */

/** one great example of this is data privacy*/
const myBio = (function () {
  const firstName = "Sunil";
  const lastName = "pal";
  return function () {
    return `my name is ${firstName} ${lastName}`;
  };
})();

console.log(myBio());
/** this way we did not polute our window/global object with the variable firstName and lastName */

/** also it is used in module system implementation to encapsulate the data from other modules*/
