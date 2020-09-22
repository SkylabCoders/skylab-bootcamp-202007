const express = require('express');

const server = express();

server.set('view engine', 'ejs');

server.get('/', (request, response) => {
	response.render('index');
});

server.get('/about', (request, response) => {
	response.render('about');
});

server.listen(6919, () => console.log('Server running in port 6919...'));
