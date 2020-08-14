const express = require('express');

const server = express();

server.get('/', (request, response) => {
	response.send('Hello Express!');
});

server.get('/about', (request, response) => {
	response.send('About works!');
});

server.listen(6919, () => console.log('Server running in port 6919...'));
