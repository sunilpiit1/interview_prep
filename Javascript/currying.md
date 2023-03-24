# FUNCTION CURRYING

Currying is an advanced technique of working with functions. It’s used not only in JavaScript, but in other languages as well.

Function currying is a way to handle the situation where you don't have all the arguments upfront for a function, SO instead of returning a wrong result or maybe some error you return a function, which can be called with rest of the arguments.

Currying refers to the process of transforming a function such that when you don't all the arguments upfront that are required for the function to produce a result, instead of returning wrong value or error the function will return another function which can be used to produce the result in the future whenever all the arguments are ready.

This is possible in JS because in JS functions are treated as first-class that means they act like normal variables and can be passes as argument or can be returned as a result from a function. Closures also plays an important role in keeping the state.

## USAGE

Can be beneficial in case when you have memory limitations in your computer, you can stream the data and can use function currying to keep the result updated.
