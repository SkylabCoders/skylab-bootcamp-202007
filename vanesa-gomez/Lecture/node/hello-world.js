const http = require('http');

const myServer = (request, response) =>
	response.end(`Hello ron damon! ${new Date()}!`);
const server = http.createServer(myServer);

server.listen(6919, () => console.log('Server is running...'));
