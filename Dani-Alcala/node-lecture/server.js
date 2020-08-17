//server en node
const http = require('http');

const server = http.createServer((request, response) =>
	response.end('Hey there')
);

server.listen(4242, () => console.log('Server is running'));