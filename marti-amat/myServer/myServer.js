const http = require('http');
const { response } = require('express');

const server = http.createServer((request, response) => response.end('Hello People'));

server.listen(4202, () => console.log('Server is running...'));