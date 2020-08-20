const http = require('http');

// Respuesta que va a dar mi servidor (interactuar con cada una de las peiticiones)
//La respuesta puede ser una página entera. Renderizado en el servidor
const myServer = (request, respone) => Response.end('Hello Dani!');

const server = http.createServer(myServer);

// Cuando el servido escucha, que es otra petición, definimos el puerto y una función, que mientras esté escuchando, nos va a permitir hacer cosas dentro de este canal de escucha.

// Cuando alguien se conecta al puerto, el segundo argumento es un callback que se ejecuta. Algo va a pasar cuando alguien entra.

// Server is running... Te pongo la puerta. Mi servidor existe. Cuando cruzas la puerta es con las peticiones(req y res)
server.listen(4200, () => console.log('Server is running...'));

// 192.168.0.134

// http://192.168.0.134:4243