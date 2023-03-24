# IIFE

IIFE stands for immediately invoked function expression, before going to IIFE let's first discuss few terms

## FUNCTION EXPRESSION

Expression is a piece of code that represents a value and has to be assigned to a variable, it can not be left alone in the code, if you do so it will result in a syntax error.

So just like that when you define a function without a name it returns you the ref of that function logic, and you need to assign it to something.

## FUNCTION DECLARATION

Introducing a function with function keyword and a proper name results in a function declaration. function can be invoked with the name given to it during the declaration.

functions introduced with function declaration gets hoisted with a value of function definition as it is.

An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

## USAGE

1. Avoid polluting the global namespace
2. Module pattern
