/**You will be given an array of positive integers and you need to form next greater number than that */
/** [1, 2, 3] would result in [1, 3, 2] */

(function nextGreater(arr) {
  let possible = false; // keep a flag if the next permutation is possible
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) {
      possible = true;
      for (let j = arr.length - 1; j > i; j--) {
        if (arr[j] > arr[i]) {
          let temp = arr[j];
          arr[j] = arr[i];
          arr[i] = temp;
          break;
        }
      }

      /** now we need to reverse the array from i + 1 till end */
      let start = i + 1;
      let end = arr.length - 1;
      while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
      }
      break;
    }
  }

  console.log(possible);
  if (!possible) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }

  console.log(arr);
})([3, 2, 1]);
