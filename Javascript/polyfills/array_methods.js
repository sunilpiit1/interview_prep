/**reduce prototype */
Array.prototype.custom_reduce = function (callback, initial_value = 0) {
  let arr = this;
  console.log(arr);
  let reduced_val = initial_value;
  for (let i = 0; i < arr.length; i++) {
    reduced_val = callback(reduced_val, arr[i], i, this);
  }
  return reduced_val;
};

let final = [1, 2, 3].custom_reduce((final, val) => {
  return final + val;
}, 0);
console.log(final);

/**forEach */
/** takes an array and execute the callback */
