# EVENT LOOP

Event loop is one most important part of javascript, and it is what makes Javascript async. Event loop is the one which decides when to execute which async callback and also it's responsible for exiting a node process implicitly.

Event loop is also kind of manager of the JS process, and it decides whether to exit the process or not.

It basically decides what to do what time and also when to close the program/process.

Basically event loop is a normal loop which at every loop/tick check for few things -

1. if the call stack is empty or not
2. any callbacks ready for execution
3. any open sockets or listeners
4. any timers
5. any setImmediate

if not of the above mentioned thing is there it exits the program.

[Nice article on the diff between setTimeout, process.nextTick() and setImmediate]("https://nodejs.dev/learn/understanding-setimmediate")
