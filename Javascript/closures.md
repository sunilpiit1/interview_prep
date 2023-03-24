# CLOSURES

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

## LEXICAL SCOPE

Before diving into lexical scope first let's clear two terms... first lexing and other one is scope.

### LEXING

When you invoke a function in javascript, Javascript does JIT compilation for that function.

During the compilation 3 most important things that happens are -

1. Tokenizing/lexing
2. Parsing and creation of AST (Abstract Syntax Tree)
3. Code generation from AST (to execute).

To define it somewhat circularly, lexical scope is scope that is defined at lexing time. In other words, lexical scope is based on where variables and blocks of scope are authored, by you, at write time, and thus is (mostly) set in stone by the time the lexer processes your code.

### SCOPE

You can relate Scope in two ways, one with the variable and other with the function.

Scope from a variable point of view represents where that variable is accessible in the code.

Scope from a function point of view represents all the variables that are accessible at the root hierarchy of that function which are declared inside that function.

Scope is basically a look-up list of all the declared identifiers (variables), and a strict set of rules as to how these are accessible to currently executing code.

So basically at the time of compilation all the variables are declared in a lookup-table and also the accessibility rules are also decided for them and that look-up table is called scope.

## USAGE OF CLOSURES

Closures are frequently used in JavaScript for object data privacy, in event handlers and callback functions, and in partial applications, currying, and other functional programming patterns.

Closures are also used in function currying.
