function lexicographicallyNext(str) {
  str = str.split('');
  let is_possible = false;
  for (let i = str.length - 2; i >= 0; i--) {
    if (str[i] < str[i + 1]) {
      is_possible = true;
      for (let j = str.length - 1; j > i; j--) {
        if (str[j] > str[i]) {
          console;
          let temp = str[i];
          str[i] = str[j];
          str[j] = temp;
          break;
        }
      }
      /**we need to reverse the back array */
      let start = i + 1;
      let end = str.length - 1;
      while (start < end) {
        let temp = str[start];
        str[start] = str[end];
        str[end] = temp;
        start++;
        end--;
      }
      break;
    }
  }

  return str.join('');
}

console.log(lexicographicallyNext('ACB'));
