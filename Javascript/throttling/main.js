let inputElement = document.querySelector('input');
console.log(inputElement);
inputElement.addEventListener('keyup', optimize(expensive, 3000));

function expensive() {
  console.log(arguments);
  console.log(this);
}

function optimize(func, delay) {
  let flag = true;
  return function () {
    let args = arguments;
    let context = this;

    if (flag === true) {
      func.apply(context, args); /**see below explaination why this apply is needed */
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
}

/**The apply in needed in above function because you are actually passing the optimesd function ref in the handler
 * and when this handler gets registered it's get bounded to the element, and since the actual function which is getting executed inside
 * by default gets binding to window, so with the help of apply we can attach the context to actual function also.
 */
