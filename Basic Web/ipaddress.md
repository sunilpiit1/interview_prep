## IP ADDRESS

IP adress stands for internet protocol address, and it is used to uniquely identify a device/computer in a network. There are two types of IP addresses

### 1. Public IP

Public IP is used to uniqueli identify a device on the internet or say WAN (Wide Area Network).
Two devices on two different network can only be connected through Internet, So it is necessary for both of them to have some public IP address (laptops can get it through routers).

### 2. Private IP

Private IP uniquely identifies a device in the private network or say LAN (Local Area Network), this address is dynamically alloted by the routing device. With private IP your device can talk to any other device in the same network.

## WHAT HAPPENS WHEN YOU MAKE A REQUEST TO GOOGLE.COM FROM YOUR LAPTOP

Since your laptop doesn't have a direct connection to the internet, So you first connect it to internet through some router (or mobile hotspot). When you connect in this way, your router actually gives your laptop a private ip with which router can identify the device within the LAN (created by router and the other devices connected to internet through router).

So now when you type google.com and hit enter you make a request from your laptop, Since the laptop is not directly connected to the internet SO instead of your laptop the router makes the request for the laptop and forwards the response to the laptop once it gets.....as it has the mapping of which device has what internal IP.

#### [For more info.]("https://www.youtube.com/watch?v=92b-jjBURkw&ab_channel=HusseinNasser")

#### [See how NAT works.]("https://www.youtube.com/watch?v=RG97rvw1eUo&ab_channel=HusseinNasser")
