/**Write a function to find the value of pow(x, n) */

function pow(x, n) {
  /**recursion breaking point */
  if (n === 0) return 1;

  /**first we need to check if the power is odd or even */
  if (n % 2 === 0) {
    let val = pow(x, n / 2);
    return val * val;
  } else {
    let val = pow(x, n - 1);
    return x * val;
  }
}

console.log(pow(2, 45));
