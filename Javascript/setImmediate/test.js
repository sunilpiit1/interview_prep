setImmediate(() => {
  console.log('setImmediate fired off');
});

setTimeout(() => {
  console.log('setTimeout has been called');
}, 1000);

setTimeout(() => {
  console.log('another setTimeout');
}, 2000);

let currentTime = Date.now();
while (Date.now() - currentTime < 3000) {
  /***just wait */
}
