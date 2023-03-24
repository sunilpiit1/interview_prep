# OSI MODEL

The OSI Model (Open Systems Interconnection Model) is a conceptual framework used to describe the functions of a networking system. The OSI model characterizes computing functions into a universal set of rules and requirements in order to support interoperability between different products and software. In the OSI reference model, the communications between a computing system are split into seven different abstraction layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application.

In plain English, the OSI provides a standard for different computer systems to be able to communicate with each other.

## APPLICATION LAYER

The application layer is responsible for the protocols and data manipulation that the software relies on to present meaningful data to the user. Application layer protocols include HTTP as well as SMTP (Simple Mail Transfer Protocol is one of the protocols that enables email communications).

For your computers to communicate, you must have use some applications and these applications must agree on some set of protocols so that one can uderstand what other is asking for. All os that comes under the application layer.

## PRESENTATION LAYER

This layer is primarily responsible for preparing data so that it can be used by the application layer; in other words, Presentation layer makes the data presentable for applications to consume. The presentation layer is responsible for translation, encryption, and compression of data.

Finally the presentation layer is also responsible for compressing data it receives from the application layer before delivering it to Session layer. This helps improve the speed and efficiency of communication by minimizing the amount of data that will be transferred.

## SESSION LAYER

Session layer is responsible for opening and closing communication between the two devices. The time between when the communication is opened and closed is known as the session. The session layer ensures that the session stays open long enough to transfer all the data being exchanged, and then promptly closes the session in order to avoid wasting resources.

## TRANSPORT LAYER

Transport layer is responsible for end-to-end communication between the two devices. This includes taking data from the session layer and breaking it up into chunks called segments before sending it to Network layer. The transport layer on the receiving device is responsible for reassembling the segments into data the session layer can consume.

The Transport layer is also responsible for flow control and error control. Flow control determines an optimal speed of transmission to ensure that a sender with a fast connection doesn’t overwhelm a receiver with a slow connection. The transport layer performs error control on the receiving end by ensuring that the data received is complete, and requesting a retransmission if it isn’t. (not in case if you are using UDP).

## NETWORK LAYER

The network layer is responsible for facilitating data transfer between two different networks. If the two devices communicating are on the same network, then the network layer is unnecessary. The network layer breaks up segments from the transport layer into smaller units, called packets, on the sender’s device, and reassembling these packets on the receiving device. The network layer also finds the best physical path for the data to reach its destination; this is known as routing.

## DATA LINK LAYER

The data link layer is very similar to the network layer, except the data link layer facilitates data transfer between two devices on the SAME network.

## THE PHYSICAL LAYER

This layer includes the physical equipment involved in the data transfer, such as the cables and switches. This is also the layer where the data gets converted into a bit stream, which is a string of 1s and 0s.
