const arr = [1, 2, 3];
const result = arr.reduce((reducedValue, currentIndexValue, index) => {
  return reducedValue + currentIndexValue + index;
}, 0);
console.log(result);

/** polyfill for Array.reduce */
Array.prototype.customReduce = function (callback, startingValue = 0) {
  const arr = this;
  let reducedvalue = startingValue;
  for (let i = 0; i < arr.length; i++) {
    reducedvalue = callback(reducedvalue, arr[i], i);
  }
  return reducedvalue;
};

console.log(
  arr.customReduce((reducedValue, currentIndexValue, index) => {
    return reducedValue + currentIndexValue + index;
  }, 1)
);
