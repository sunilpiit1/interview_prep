# MODULE SYSTEM

Nowadays we have complete applications being run in browsers with a lot of JavaScript, It has therefore made sense in recent years to start thinking about providing mechanisms for splitting JavaScript programs up into separate modules that can be imported when needed.

Also if we load script in standard way, all the declarations that we make in our script are going to pollute the global context, and we may end up over writing it.

Now a days almost all the browsers support module system (named ES6 module system) natively for JS, you just need to mention one attribute "type" as "module" to tell browser that respective JS is going to be module.

Giving script a type module will make the script a module by adding certain features

1. It will become a standalone piece, No one lese can use it without importing it.

2. extra functionalities like import, export, module etc. will be added to it.

## DIFFERENCES BETWEEN MODULES AND STANDARD SCRIPTS

- You need to pay attention to local testing — if you try to load the HTML file locally (i.e. with a file:// URL), you'll run into CORS errors due to JavaScript module security requirements. You need to do your testing through a server.

- Also, note that you might get different behavior from sections of script defined inside modules as opposed to in standard scripts. This is because modules use strict mode automatically.

- Modules are only executed once, even if they have been referenced in multiple script tags.

- Last but not least, let's make this clear — module features are imported into the scope of a single script — they aren't available in the global scope. Therefore, you will only be able to access imported features in the script they are imported into, and you won't be able to access them from the JavaScript console, for example.

## DYNAMIC MODULE LOADING

A recent addition to JavaScript modules functionality is dynamic module loading. This allows you to dynamically load modules only when they are needed, rather than having to load everything up front. This has some obvious performance advantages

This new functionality allows you to call import() as a function, passing it the path to the module as a parameter. It returns a Promise, which fulfills with a module object giving you access to that object's exports.

[A simple usecase of dynamic-import]("https://www.youtube.com/watch?v=5s5fVghc4S8")

> NodeJS uses CommonJS module system to implement module system in it.
