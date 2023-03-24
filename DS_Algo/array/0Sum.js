/**Find the length of longest sub-array with 0 sum */

(function zeroSum(arr) {
  let length = 0;
  let sum = 0;
  let sum_map = { 0: -1 }; /**initialize with 0 sum as -1 */

  for (let i = 0; i < arr.length - 1; i++) {
    sum += arr[i];

    /**if current sum exists in hash map that means the whole array results in 0 */
    if (sum_map[sum] !== undefined) {
      length = Math.max(length, i - sum_map[sum]);
    } else {
      sum_map[sum] = i;
    }
  }

  console.log(length);
})([15, -2, 2, -8, 1, 7, 10, 23]);
