function allPermutations(arr, str = '', finalResult = []) {
  if (arr.length === 0) {
    finalResult.push(str);
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    let tempArr = arr.filter((a) => a !== arr[i]);
    allPermutations(tempArr, `${str}${arr[i]}`, finalResult);
  }
  return finalResult;
}

console.log(allPermutations(['A', 'B', 'C']));
