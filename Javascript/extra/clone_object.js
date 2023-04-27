const obj = {
  name: "Sunil Pal",
  age: 25,
  address: {
    houseNumber: 364,
    lane: "pratap nagar 1st",
    city: "kota",
  },
};

/** shallow clone */
const newObject = { ...obj };
console.log(newObject === obj); // will resturn false
console.log(newObject.address === obj.address); // will return true

/** deep clone */
const deepClone = JSON.parse(JSON.stringify(obj));
console.log(deepClone === obj); // will resturn false
console.log(deepClone.address === obj.address); // will return false

/** NOTE: but the above method for deep cloning wont work when a function is present in the object
 * in that case you need to actually use recurssion to solve this problem
 */
