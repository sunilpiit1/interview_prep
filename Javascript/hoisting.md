# HOISTING

Every program that you write in some language is actually not understandable by the machine it will finally be running on, for that you need to convert the code that you have written to the machine language, this is done during the compilation process.

In languages like c++ we have to this compilation process beforehand to generate the machine code and then we can use that piece of code to run on any machine we want.

But Javascript uses JIT compilation while running the code, in this kind of compilation, compilation of code is done at the time you want to execute that piece of code (a function represents a piece of code). During this compilation process JS goes through the following things -

1. Tokenization/lexing of code.

2. Creates scope (dictionary of variables) for all the declared variable and functions in that piece of code.

3. Crate the AST which is very useful for generation of machine executable code.

So now we will see what Hoisting is, As you can see during the compilation period JS creates this scope for all the declared variables and functions, In this phase memory allocation happens for all the variables and functions present in the piece of code and this is called hoisting.

Different rules of hoisting are -

- All variables declared with var are hoisted with a initial value of undefined and can be accessed before declaration.

- All variables declared with let/const are hoisted but they will unavailable in code until their declaration, until then they will be kept in the TDZ(temporal dead zone). So, we can say that let and const a bit stricter than var.

- function declared with function declaration are also hoisted and during the hoisting itself they get their actual value. So, that makes them accessible at point of time during the execution.
