const http = require('http');

const myServer = http.createServer((request, response) => {
	response.write(`Hello World! at ${new Date()}`);
	response.end();
});

const server = http.createServer(myServer);

server.listen(4200, () => console.log('Server is running...'));
