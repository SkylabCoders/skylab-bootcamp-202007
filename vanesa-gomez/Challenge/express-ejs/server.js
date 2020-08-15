const express = require('express');

const server = express();

server.set('view engine', 'ejs');

server.get('/', (request, response) => {
	response.render('heroDashboard');
});

server.get('/detail', (request, response) => {
	response.render('heroDetail');
});

server.get('list', (request, response) => {
	response.render('heroList');
});

server.listen(4200, () => console.log('Server running in port 4200'));
