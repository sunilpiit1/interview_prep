function isSubstr(str1, str2) {
  let lps = [0];
  let i = 0;
  let j = 1;
  while (j < str2.length) {
    if (str2[i] === str2[j]) {
      i++;
      lps[j] = i;
    } else {
      lps[j] = 0;
      i = 0;
    }
    j++;
  }

  let start1 = 0;
  let start2 = 0;
  let flag = false;
  console.log(str2);
  while (start1 < str1.length) {
    console.log(start1, start2);
    if (str1[start1] === str2[start2] || start2 === '*') {
      start1++;
      start2++;
    } else {
      if (start2 === 0) start1++;
      start2 = lps[start2 - 1];
    }

    /**condition for a match */
    if (start2 === str2.length) {
      flag = true;
      break;
    }
  }

  console.log(flag);
}

isSubstr('abababd', 'ab*bd');
