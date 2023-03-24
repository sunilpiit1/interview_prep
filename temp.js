/***argument1=count, arg2=number */
function duplicate(count, number) {
  let res = [];
  if (count <= 0) return res;
  res = [number];
  count = count - 1;
  return res.concat(duplicate(count, number));
}

// console.log(duplicate(3, 5));

function sumSquares(arr) {
  let finalSum = 0;
  arr.forEach((single) => {
    if (Array.isArray(single)) {
      finalSum += sumSquares(single);
    } else {
      finalSum += single ** 2;
    }
  });

  return finalSum;
}

console.log(sumSquares([10, [[10], 10], [10]]));
