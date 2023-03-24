/**you will be given an array and a target and you have to find all possible combinations that completes the sum */
/**[2, 3, 6, 7] and 7 as target will result [ [2, 2, 3], [7] ] */

function findCombinations(arr, target, start, end, combinations) {}

/**below is the main function and it will receive the array and target sum */
(function main(arr, target) {
  let combinations = findCombinations(arr, target, 0, arr.length - 1, []);
  console.log(combinations);
  return combinations;
})([2, 3, 6, 7]);
