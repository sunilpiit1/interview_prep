/**call can be used to manually set this to a function and invoke it */

Function.prototype.my_call = function (context, ...arguments) {
    /**this here will represents the function */
    let func = this;
    context.temp = func;
    let result  = context.temp(...arguments);
    delete context.temp;
    return result;

}

function callName(){
    console.log(this.name)
}

let temp = {
    name:"sunil pal"
}

callName.my_call(temp);
console.log(temp);


