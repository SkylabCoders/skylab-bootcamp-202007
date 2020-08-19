const http = require('http');

const myServer = (request, response) => {
	response.write(`Hello World at ${new Date()}!`); //Esto se muestra en el html del puerto
	response.end();
};

const server = http.createServer(myServer);
server.on('request', myServer);

server.listen(4202, () => console.log('Now server is running...!')); //Esto se muestra en consola
