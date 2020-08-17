const http = require('http');

const myServer = ((request, response) =>
    response.end(`Hello World! at ${new Date}`)
);
const server = http.createServer(myServer);

server.listen(4100, () => console.log('sever is running...'));