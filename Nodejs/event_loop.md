## EVENT LOOP

Event loop is one main element of any JS runtime environment, as it make the async nature of JS possible. In simple words JS engine is a bit dumb, it takes whatever is in the top of callstack and starts executing the code line-by-line (sync). Whenever it sees something async (like setTimeOut or some network req) it hands it over to the event loop, event loop manages that whole async request from then.

When an async req comes to event loop, it registers the ref(socket in case of network request) of that req, once the data is ready event-loop put the dependent code in callback queue and once the call-stack is empty pushes these call-bakcs one-by-one into the call-stack.

Event loop is the one who decides whether to keep the NodeJS process up or not. It keeps on looking for any open sockets, registered callbacks, timeouts or intervals if any then it won't stop the Node program/process.

Learn about setImmediate also, they changes the behaviour of event loop a little bit.

We can manually exit a Node process also, with program just invoke process.exit() and from terminal hit ctrl+c.

[Why event-loop waits for call-stack to be empty before putting any callback to it.]("https://stackoverflow.com/questions/52906975/call-stack-event-loop-why-waiting-for-empty-stack")

[Nice Article on Event-Loop]("https://medium.com/@Rahulx1/understanding-event-loop-call-stack-event-job-queue-in-javascript-63dcd2c71ecd")

[Lecture on Event-Loop]("https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11561908#overview")
