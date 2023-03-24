# NODE JS

NodeJS is a runtime environment to execute JS away from the browsers or say on some server. NodeJS apart from JS engine (V8), also provides different inbuilt modules like fs, crypto, http, stream.... for usecase related to backend servers.

JS is single threaded and asynchronous is nature, but Node apart from the main thread also provides special worker threads to perform some computationally intensive tasks, some core NOdejs modules make use of these worker threads (for eg. crypto and fs module is async mode).

Network calls are handled by OS itself, just the socket gets registered in the Node process and once the result has come the socket will end and the result will be handed over to the process.

## DIFFERENT PURPOSE THAT NODEJS SERVES

1. Creation of servers (http, tcp, udp, ws/web-sockets)
2. To write the business logic of your application
3. Microservice
4. To create tools.

## NODE MODULE SYSTEM

To divide our complete JS into multiple individual, easy to understand chucks and these small independent pieces can also be known as modules. To implement this module kind of structure we need to use some module system. NodeJS uses CommonJS module system.

Node module system does caching, that means only one time the file will be executed and cached, from the next time the cached result will be served, Also you can't alter the result that is being exposed from other file, you can just make use of it.

and How it works... ??

## STATUS CODES

## LOGGING SYSTEM

## AUTHENTICATION

1. Token based (JWT)
2. OAuth
