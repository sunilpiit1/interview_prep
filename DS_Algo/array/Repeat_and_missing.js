/**Given array will contain numbers 1 - n, in which one will be missing and one will be repeating */
/**For eg [5, 4, 7, 2, 1, 6, 7], 7 is repeating and 3 is missing */

/**approach to this problem is going to be subtracting a**2 - b**2 = (a - b) * (a + b) */

(function findRepeatingAndMissing(arr) {
  let sumOne2N = (arr.length * (arr.length + 1)) / 2;
  let sumArr = arr.reduce((sum, val) => {
    return sum + val;
  }, 0);

  /**Difference in the normal sum will represent the diff between the repeating and missing number */
  let sumDiff = sumArr - sumOne2N;

  let sqSumOne2N = (arr.length * (arr.length + 1) * (2 * arr.length + 1)) / 6;
  let sqSumArr = arr.reduce((sum, val) => {
    return sum + val ** 2;
  }, 0);

  /**Difference of square sum will represent the repeating**2 - missing**2 */
  let sqSumDiff = sqSumArr - sqSumOne2N;

  console.log(sumOne2N, sumArr);
})([5, 4, 7, 2, 1, 6, 7]);
