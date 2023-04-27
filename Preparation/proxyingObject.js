/** object for which you want to create the proxy */
const target = {
  message1: "hello",
  message2: "everyone",
};

/** handler for proxies data of that object */
const handler = {
  /** this will define how you proxy getting of a property */
  get(target, key) {
    if (key !== "message1") {
      return target[key] + " proxied";
    }
    throw new Error("message1 key is not accessible");
  },
  /** this way you can hijack the set of a property */
  set(target, key, value) {
    if (key !== "message1") {
      return (target[key] = value);
    }
    throw new Error("can not update message1 key");
  },
};

/**proxy object is created for you */
/** proxy will hijakc the request made to the object and return the result acc to the handler passed */
const proxyObject = new Proxy(target, handler);
console.log(proxyObject);
console.log(proxyObject.message2);
console.log(proxyObject.message1); // will terminate the program by throwing an err
