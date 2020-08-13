const http = require('http');

const myServer = http.createServer((request, response) =>
    response.end('Hello World!')
);
const server = http.createServer(myServer);

server.listen(4200, () => console.log('sever is running...'));