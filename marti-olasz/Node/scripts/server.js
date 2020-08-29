const express = require('express');

const server = express();

server.set('view engine', 'ejs');

server.get('/', (request, response) => {
	response.render('index.ejs');
});

server.get('/about', (request, response) => {
	console.dir(request, { depth: 0 });
	response.render('about.ejs');
});

server.listen(2020, () => {
	console.log('Server running...');
});
