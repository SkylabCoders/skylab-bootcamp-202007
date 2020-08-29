const http = require('http');

const server = http.createServer((request, response) =>
    response.end('Hello World!')
);

server.listen(4243, () => console.log('sever is running...')); myServer