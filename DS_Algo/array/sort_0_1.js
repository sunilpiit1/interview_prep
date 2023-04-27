/** you have given an array of o and 1 sort this array */

/** will receive an array and will sort that array */
function sort01(arr) {
  let left = 0;
  let right = 0;
  /** array left to left should contain all zeroes */
  while (right < arr.length) {
    if (arr[right] === 0) {
      /** swap both of them */
      const temp = arr[right];
      arr[right] = arr[left];
      arr[left] = temp;
      left++;
      right++;
    } else {
      right++;
    }
  }
}

const arr = [0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0];
sort01(arr);
console.log(arr);

/** 2 other naive solutions are
 * 1) sort the array
 * 2) count 0 and 1 and then other loop and insert 0 and 1 according to the count
 */
