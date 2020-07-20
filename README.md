## About
This is a client application that enables user to perform calculation on the website. It also shows the last 10 logs performed by any user on the website.

## Deployment 
https://calculatorwithlogs.herokuapp.com

## Server 
https://github.com/abdullahmitkar/calculator_server

## Features
The calculator supports addition, subtraction, division and multiplication. User can provide username and the mathematical expression to evaluate.
The logging is enabled by using a server that stores latest 10 requests on it.

### architecture
The architecture is simple client - server application with the client polling constantly for updates. However, a more elegant solution can involve a publisher-subscriber model. This is just a simulation of it because of the scope.

### Server apis
1. getlogs - To send the latest 10 logs to any subscriber.
2. addlogs(log) - To store log item sent by a publisher.


### storing logs
Currently the logs are stored in the server's array variable restring its lifeline to server's lifeline. This can be extended to use databases, or file-system.

