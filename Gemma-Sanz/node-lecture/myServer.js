const http = require('http');

const myServer = http.createServer((request, response) =>
	response.end('Hello People!')
);

myServer.listen(4202, () => console.log('Server is running...'));
