# SOCKER AND DIFFERENT PROTOCOLS

## SOCKET

SO basically every communication from one system to the other happens through socket, every socket during it's creation has assigned a port through which it can listen and respond to.

Socket is a duplex stream, means it can do both read and write. SO basically whatever request you make gets transmitted through a socket and depending upon what kind of transmission it is reliable/unreliable (TCP/UDP) the headers are attached to the data chunks/packets.

In case of http protocol once the response is arrived these sockets are destroyed, for next request recreated again.

Socket is the main key for intercommunication in computers.

## HTTP

HTTP is widely used protocol to serve web-pages over the internet. It works on a request response model where the client request for something and then server return with the related response.

HTTP is a application layer protocol built on top of TCP/IP protocol for reliable transmission of data.

### HOW A HTTP REQUEST WORKS

Before making an HTTP request, a TCP connection is elastablished inbetween the client and the server.

A conection is not a connection but an aggrement actually, that ok i will send data from this port and this ip and the sequence range will be this.....That's it. And in HTTP once the response has come client closes the socket... which actually means closing the connection.

After elstablishing the TCP connection successfully, request is sent to the server and server responds with the response in the aggreed sequence. After the response is received, TCP connection will be terminated.

## TCP PROTOCOL

TCP is a protocol built on top of IP (Internet Protocol) for reliable transmission of data. A TCP connection is established via a 3-way handshake.

In a 3-way handshake

1. Client asks for acknowledgement for sequence numbering of data packets from the server.
2. server ackowledge the sequence, and asks for sequence numbering for the response from his side.
3. Client aknowldge the sequence numbering, TCP connection is established.

This 3-way handshake actually helps in reliable data transmission, apart from reliable transmission TCP also handles error in transmission and congestion also.

## UDP protocol

## HOW TO USE RAW SOCKETS FOR TRANSMISSION

### [A nice Socket Article]("https://www.ibm.com/docs/en/i/7.3?topic=programming-how-sockets-work")

### [How single port handles multiple client port]("https://stackoverflow.com/questions/11129212/tcp-can-two-different-sockets-share-a-port/11129641")

### [Another nice Article]("https://stackoverflow.com/questions/3329641/how-do-multiple-clients-connect-simultaneously-to-one-port-say-80-on-a-server")
