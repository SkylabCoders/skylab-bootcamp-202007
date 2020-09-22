const http = require('http');
const { response } = require('express');

const myServer = (request, respone) => {
    response.write(`Hello world al ${new Date()}`)
    response.end();
};

const server = http.createServer(myServer);

server.listen(4200, () => console.log('Server is running...'));

