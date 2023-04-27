/** how it actually works */
const arr = [1, 2, 3];
arr.forEach((x, index) => {
  console.log(x, index);
});

/**polyfill for that */
/** NOTE: Every polyfill should be a proper function because this has to point to the obejct */
Array.prototype.customForEach = function (callback) {
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
};

arr.customForEach((x) => {
  console.log(`number is ${x}`);
});
