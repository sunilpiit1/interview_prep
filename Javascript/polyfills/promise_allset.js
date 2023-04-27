Promise.customAllSettled = function (promiseArr) {
  return new Promise((resolve) => {
    let countResolvedPromises = 0;
    const resultArr = [];
    promiseArr.forEach(async (promise, index) => {
      try {
        let resolvedValue = await promise;
        resultArr[index] = { status: "fullfilled", value: resolvedValue };
      } catch (err) {
        resultArr[index] = { status: "rejected", value: err };
      }
      countResolvedPromises++;
      if (countResolvedPromises === promiseArr.length) {
        resolve(resultArr);
      }
    });
  });
};

/** below we are using the cutom all setteled */
const a = new Promise((resolve) =>
  setTimeout(() => {
    resolve(3);
  }, 200)
);
const b = new Promise((resolve, reject) => reject(9));
const c = new Promise((resolve) => resolve(5));

Promise.customAllSettled([a, b, c]).then((val) => {
  console.log(val);
});
