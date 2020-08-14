const express = require('express');

const port = 4202;

const server = express();

server.set('view engine', 'ejs');

server.get('/', (request, response) => {
	response.render('heroDashboard');
});

server.get('/hero', (request, response) => {
	response.render('heroDetail');
});

server.get('/heroes', (request, response) => {
	response.render('heroList');
});

server.listen(port, () => console.log(`Server running in port ${port}`));
