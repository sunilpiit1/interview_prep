function flatten_array(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = [...result, ...flatten_array(arr[i])];
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(flatten_array([1, 2, [3, 4, [5, [6]]]]));
