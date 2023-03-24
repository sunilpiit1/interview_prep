## JAVASCRIPT

JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.

JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.

Most of the implementation in Js is object based, but it doesn't follow the classical way of inheritance (like classes in JS), it follows prototypal inheritance.

### OTHER COMPILATION TYPES

#### 1 - COMPILED PROGRAMMING LANGUAGE

In this type of programming languages, executable code is created beforehand. Executable code is just machine code and can be executed on any machine, it doesn't require a machine to have some specific env to execute.

Programs that are compiled into native machine code tend to be faster than interpreted code. This is because the process of translating code at run time adds to the overhead, and can cause the program to be slower overall.

### 2 - INTERPRETER BASED

In this type of programming languages the code gets executed line by line, means we do not convert the code to machine code beforehand, instead the lang engine takes the statements line by line, complies them and executes them.

Interpreted languages tend to be more flexible, and often offer features like dynamic typing and smaller program size. Also, because interpreters execute the source program code themselves, the code itself is platform independent.

## JAVASCRIPT RUNTIME ENVIRONMENT

Javascript runtime environment is an environment in which a javascript code can be executed. It mainly consist of 4 things

1. Javascript engine
2. Event loop
3. APi's (To do async tasks)
4. Callback Queue.

Browser also act as a runtime environment for javascript and through the browser APi's, event loop and the callback queue enables the async functionality of Javascript.

### JAVASCRIPT ENGINE

Javascript engine is the heart of Javascript runtime environment, it mainly consist of a call-stack and heap memory, Javascript engine does a very basic job which is to take the Javascript code and execute it line by line and whenever it sees an async piece of code it hands it over to the event loop, which takes care of that task from then.

Javascript is a JIT compiled language, that means the compilation happens on the fly. Unlike languages like C++, Javascript doesn't create a executable beforehand. So, whenever we invoke a function in JS that function gets compiled on the fly (also known as creation of execution context) and gets executed line by line.

> Javascript is single threaded, In case of browser we have a main thread which is responsible for execution of JS also there are other tasks also for which main thread is responsible. So, instead of putting more load on main thread we can push of some of our sync task on the worker thread.

[Checkout these interview questions for JS]("https://www.youtube.com/watch?v=X_Lr_N_b7PM&list=PLyuRouwmQCjlLW9NjqoBbf9eVaFX4F9UZ&index=30")
