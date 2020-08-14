const http = require('http');

const myServer = (request, response) => {
	response.write;
	`Hello world ${new Date()}`;
	response.end();
};

const server = http.createServer(myServer);

server.listen(4200, () => {
	console.log('Server running');
});
