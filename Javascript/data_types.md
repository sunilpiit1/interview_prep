# DATA TYPES AND DYNAMIC TYPING IN JS

## DYNAMIC TYPING

JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

## MEMORY ALLOCATION IN JS

JavaScript engines have two places where they can store data: The memory heap and stack.

[A nice article on Memory Allocation in JS]("https://felixgerschau.com/javascript-memory-management/")

### STACK

A stack is a data structure that JavaScript uses to store static data. Static data is data where the engine knows the size at compile time. In JavaScript, this includes primitive values (strings, numbers, booleans, undefined, and null) and references, which point to objects and functions.

### HEAP

The heap is a different space for storing data where JavaScript stores objects and functions.

Unlike the stack, the engine doesn't allocate a fixed amount of memory for these objects. Instead, more space will be allocated as needed.

Allocating memory this way is also called dynamic memory allocation.

## PRIMITIVE TYPE VALUES

All types except objects define immutable values (that is, values which can't be changed). For example (and unlike in C), Strings are immutable. We refer to values of these types as "primitive values".

Different type of Primitive values in JS are -

### BOOLEAN

Boolean represents a logical entity and can have two values: true and false.

### NULL

In computer science, a null value represents a reference that points, generally intentionally, to a nonexistent or invalid object or address.

Also type(null) results in object, which is just some convention that is being used by JS.

### UNDEFINED

A variable that has not been assigned a value has the value undefined.

### NUMBER

ECMAScript has two built-in numeric types: Number and BigInt (see below).

The Number type is a double-precision 64-bit binary format IEEE 754 value (numbers between -(2^53 − 1) and 2^53 − 1). In addition to representing floating-point numbers, the number type has three symbolic values: +Infinity, -Infinity, and NaN ("Not a Number").

### BIGINT

The BigInt type is a numeric primitive in JavaScript that can represent integers with arbitrary precision. With BigInt, you can safely store and operate on large integers even beyond the safe integer limit for Numbers.

A BigInt is created by appending n to the end of an integer or by calling the constructor.

### STRING

JavaScript's String type is used to represent textual data. Each element in a string can be accessed by their index number, string follows 0 based indexing.

Unlike some programming languages (such as C), JavaScript strings are immutable. This means that once a string is created, it is not possible to modify it.

However, it is still possible to create another string based on an operation on the original string. For example:

- A substring of the original by picking individual letters or using String.substr().
- A concatenation of two strings using the concatenation operator (+) or String.concat().

> Don't forget about template literal also, it's not a data type, it's just a way to declare a string data type.

### SYMBOL

A value having the data type Symbol can be referred to as a "Symbol value". In a JavaScript runtime environment, a symbol value is created by invoking the function Symbol, which dynamically produces an anonymous, unique value. A symbol may be used as an object property.

## REFERENCE TYPE VALUES / OBJECTS

All the data types other than primitives falls under this. Type of all of them results in 'object' except the function.

In JavaScript, objects can be seen as a collection of properties. With the object literal syntax, a limited set of properties are initialized; then properties can be added and removed. Property values can be values of any type, including other objects, which enables building complex data structures. Properties are identified using key values. A key value is either a String value or a Symbol value.

There are two types of object properties: The data property and the accessor property.

### DATA PROPERTY

Associates a key with a value.

### ACCESSOR PROPERTY

Associates a key with one of two accessor functions (get and set) to retrieve or store a value.

[A very detailed info about object and descriptors]("https://www.youtube.com/watch?v=LD1tQEWsjz4).

[Another ref for object seal, freeze and preventExtensions]("https://www.youtube.com/watch?v=ZdF2aOYpIqw")

## JSON

JSON (JavaScript Object Notation) is a lightweight data-interchange format, derived from JavaScript, but used by many programming languages. JSON builds universal data structures.

## TYPE COERCION

### WHAT IS A BLOCK?

A block in JS represents a multiple statements clubbed together. For example a if statement only accepts 1 statement to execute, but sometimes we have to execute multiple statements, so we use a block in that case. A Block is represented by {}.
