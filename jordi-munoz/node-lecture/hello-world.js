const http = require('http');

const myServer = (request, response) => response.end('Hello Sherarrrr!');
const server = http.createServer(myServer);

server.listen(4200, () => console.log('Server is running...'));