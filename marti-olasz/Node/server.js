const http = require('http');
const server = http.createServer((request, response) => {
	response.write('Hello World at ' + new Date());
	response.end();
});

server.listen('4242', () => console.log('Server is running...'));
