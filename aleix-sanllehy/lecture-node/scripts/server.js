const express = require('express');

const server = express();

server.set('view engine', 'ejs');

server.get('/', (request, response) => {
	response.render('index');
});

server.get('/about', (request, response) => {
	console.dir(request, { depth: 0 });
	response.render('about');
});

server.listen(4200, () =>
	console.log('Server is running and listening on port 4200...')
);
