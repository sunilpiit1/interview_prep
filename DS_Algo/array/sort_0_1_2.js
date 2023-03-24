/**You need to sort and array of 0, 1, 2 */
/**For example [1, 0, 2, 1, 2, 0, 0] will be converted to [0, 0, 0, 1, 1, 2, 2] */
/**This can be done with three pointer algorithm */

(function sort(arr) {
  let start = 0;
  let mid = 0;
  let end = arr.length - 1;

  while (mid <= end) {
    if (arr[mid] === 0) {
      arr[mid] = arr[start];
      arr[start] = 0;
      start++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      arr[mid] = arr[end];
      arr[end] = 2;
      end--;
    }
  }

  /**This is our final result */
  console.log(arr);
})([1, 0, 2, 1, 2, 0, 0]);
