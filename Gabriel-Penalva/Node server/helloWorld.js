const http = require('http');
let a = new Date();
const myServer = (request, response) => response.end((`Hello World! From Gabriel today is: ${a}`));

const server = http.createServer(myServer);

server.listen(4200, () => console.log('Server is running...'));