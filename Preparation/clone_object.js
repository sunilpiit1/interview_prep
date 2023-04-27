/** If a object does not contain a function it is very easy to clone that object */
const obj = {
  name: "Sunil Pal",
  age: 20,
  job: "Software Engineer",
  address: { houseNumber: "364", city: "kota" },
};

/** shallow clone */
const shallowClone = { ...obj };

/** deep clone */
const deepClone = JSON.parse(JSON.stringify(obj));

/** but if the object contains a function then the above won't work and you need to do it with the help of recurssion */
function recDeepClone(obj) {
  if (Array.isArray(obj)) {
    const returnObj = [];
    for (i = 0; i < obj.length; i++) {
      if (typeof obj[i] === "object" || Array.isArray(obj[i])) {
        returnObj[i] = recDeepClone(obj[i]);
      } else {
        returnObj[i] = obj[i];
      }
    }
    return returnObj;
  } else {
    const returnObj = {};
    for (key in obj) {
      if (typeof obj[key] === "object" || Array.isArray(obj[key])) {
        returnObj[key] = recDeepClone(obj[key]);
      } else {
        returnObj[key] = obj[key];
      }
    }
    return returnObj;
  }
}

const newObj = {
  name: "Sunil Pal",
  age: 20,
  job: "Software Engineer",
  address: { houseNumber: "364", city: "kota" },
  education: ["pragati school", "IITI"],
};

console.log(recDeepClone(newObj));
