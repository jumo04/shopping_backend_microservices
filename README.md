# Shopping Backend Microservices

Este es un proyecto implementando la arquitectura de microservicios para una tienda de linea.

## Descripción

Este es el backend para un tienda en linea de productos usando una arquitectura de microservicios, partiendo de una arquitectura monolitica. Usando eventos subscriber/subcriptor para manejar la comunicacion entre los servidores y ![RabbitMQ] para manejar los mensajes que se emiten cada que se realiza alguna accion, implementado de forma loca y con la platamorfa [![cloudamqp][cloudamqp]][cloudamqp-url]

## Stack

### Lenguaje

[![Javascript][Javascript]][Javascript-url]


### Runtime 

 [![Node][Nodejs]][Node-url]

### Librerias

* ![amqplib]
* ![express]
* ![axios]
* ![mongodb]
* ![nodemon]
* ![dotenv]
* ![winston]
* ![jsonwebtoken]
* ![uuid]
* ![bcrypt]


## Autor

Juan Fernando Moreno </br>
Ingeniero de Sistemas </br>
![Universidad]


[Javascript]: https://img.shields.io/badge/Javascript-grey?style=flat&logo=javascript
[express]: https://img.shields.io/badge/express-grey?style=flat&logo=express
[cors]: https://img.shields.io/badge/cors-grey?style=flat&logo=cors
[mongodb]: https://img.shields.io/badge/mongoose-grey?style=flat&logo=mongodb
[axios]: https://img.shields.io/badge/axios-grey?style=flat&logo=axios
[dotenv]: https://img.shields.io/badge/dotenv-grey?style=flat&logo=dotenv
[winston]: https://img.shields.io/badge/winston-grey?style=flat&logo=winston
[jsonwebtoken]: https://img.shields.io/badge/jsonwebtoken-grey?style=flat&logo=jsonwebtoken
[uuid]: https://img.shields.io/badge/uuid-grey?style=flat&logo=uuid
[bcrypt]: https://img.shields.io/badge/bcrypt-grey?style=flat&logo=bcrypt

[nodemon]: https://img.shields.io/badge/nodemon-grey?style=flat&logo=nodemon
[Javascript-url]: https://lenguajejs.com/javascript/
[Nodejs]: https://img.shields.io/badge/Nodejs-green?style=flat&logo=nodedotjs
[Node-url]: https://nodejs.org/
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat&logo=linkedin&colorB=555
[RabbitMq]: https://img.shields.io/badge/RabbitMQ-grey?style=falt&logo=rabbitmq
[cloudamqp]: https://img.shields.io/badge/CloudAMQP-grey?style=falt&logo=rabbitmq
[cloudamqp-url]: https://www.cloudamqp.com/
[amqplib]: https://img.shields.io/badge/amqplib-grey?style=falt&logo=rabbitmq
[linkedin-url]: https://linkedin.com/in/juan-fernando-moreno
[Universidad]: https://img.shields.io/badge/Universidad%20De%20Antioquia-grey?style=for-the-badge&logo=data:image/svg%2bxml;base64,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