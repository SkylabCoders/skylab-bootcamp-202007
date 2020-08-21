const express = require('express');

const server = express();

server.set('view engine', 'ejs');
server.get('/', (request, response) => {
	response.render('index');
});

server.get('/about', (request, response) => {
	response.render('about');
});

server.listen(4278, () => console.log('Server is running in port 4278'));
