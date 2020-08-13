const http = require('http');

const myServer = http.createServer((request, response) =>
    response.end(`Hello World! at ${new Date}`)
);
const server = http.createServer(myServer);

server.listen(4300, () => console.log('sever is running...'));