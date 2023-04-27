/** actual work */
const arr = [1, 2, 3];
const resultArr = arr.map((x, index) => {
  return x + index;
});
console.log(resultArr);

/** polyfill for that */
Array.prototype.customMap = function (callback) {
  const arr = this;
  const resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    resultArr[i] = callback(arr[i], i);
  }
  return resultArr;
};
const resultArr2 = arr.customMap((x, index) => {
  return x + index;
});
console.log(resultArr2);
