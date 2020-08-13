const http = require('http');
const server = http.createServer((request, response) =>
	response.end('Hello World at ' + new Date())
);
server.listen('4242', '192.168.0.99', () =>
	console.log('Server is running...')
);
