const http = require('http');

const myServer = (request, response) => response.end(`Hello World2!`) //Esto se muestra en el html del puerto

const server = http.createServer(myServer);

server.listen(4202, () => console.log('Now server is running...!')) //Esto se muestra en consola