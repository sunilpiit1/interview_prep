/**Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence. */
/**input - [100, 4, 200, 1, 3, 2] ===>> output - 4 as longest consecutive sequence would be [1, 2, 3, 4] */

(function longestConsecutiveSeq(nums) {
  let maxLength = 0;
  let temp_map = {};
  nums.forEach((num) => (temp_map[num] = true)); // making entry for each and every number present in the array

  for (let key in temp_map) {
    /**case where key is the first of sequence */
    if (temp_map[key - 1] === undefined) {
      let length = 1;
      key++;
      while (1) {
        if (temp_map[key] === undefined) {
          break;
        }
        length++;
        key++;
      }

      maxLength = Math.max(maxLength, length);
    }
  }

  console.log(maxLength);
})([100, 4, 200, 1, 3, 2, 5]);
