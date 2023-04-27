function mergeIntervals(intervalsArray) {
  intervalsArray.sort((a, b) => {
    return a[0] - b[0];
  });
  console.log(intervalsArray);
}

mergeIntervals([
  [3, 4],
  [1, 6],
  [2, 3],
]);
