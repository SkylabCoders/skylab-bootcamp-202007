/* SERVIDOR SIMPLE QUE DEVUELVE CONSOLE LOG

const http = require('http');

const myServer = (request, response) =>
	response.end(`Hello World: ${Math.random()}`);

const server = http.createServer(myServer);

server.listen(4242, () => console.log('server is running'));
*/
