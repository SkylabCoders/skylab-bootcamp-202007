const http = require('http');
const { response } = require('express');

const myServer = (request, response) =>
	response.write(`Hello world! ${new Date()}!`);
response.end();

const server = http.createServer(myServer);

server.on('request', myServer);
server.listen(6919, () => console.log('Server is running...'));
