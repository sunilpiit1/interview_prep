/**You need to find the count for pairs where a[j] > a[i] where j > i */
/**also tell the brute-force approach first to the interviewer */

/**with the help of merge sort it can be solved */
/**check this video for ref - https://www.youtube.com/watch?v=kQ1mJlwW-c0&list=PLgUwDviBIf0rPG3Ictpu74YWBQ1CaBkm2&index=10  */

function mergeSort(arr, start = 0, end = arr.length - 1) {
  if (start > end) return [];
  if (start === end) return [arr[start]];

  let mid = Math.floor((start + end) / 2);
  let sortedFirstHalf = mergeSort(arr, start, mid);
  let sortedSecondHalf = mergeSort(arr, mid + 1, end);

  let start1 = 0;
  let start2 = 0;
  let finalSorted = [];
  while (start1 !== sortedFirstHalf.length || start2 !== sortedSecondHalf.length) {
    if (start1 === sortedFirstHalf.length || sortedFirstHalf[start1] > sortedSecondHalf[start2]) {
      finalSorted.push(sortedSecondHalf[start2]);
      start2++;
    } else {
      finalSorted.push(sortedFirstHalf[start1]);
      start1++;
    }
  }

  console.log(finalSorted);
  return finalSorted;
}

mergeSort([5, 4, 1, 2, 3]);
