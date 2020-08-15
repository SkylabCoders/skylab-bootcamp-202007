const express = require('express');
const path = require('path');

//const heroMock = require('./hero.mock');

const heroMock = [
	{ id: 11, name: 'Dr Nice' },
	{ id: 12, name: 'Narco' },
	{ id: 13, name: 'Bombasto' },
	{ id: 14, name: 'Celeritas' },
	{ id: 15, name: 'Magneta' },
	{ id: 16, name: 'RubberMan' },
	{ id: 17, name: 'Dynama' },
	{ id: 18, name: 'Dr IQ' },
	{ id: 19, name: 'Magma' },
	{ id: 20, name: 'Tornado' }
];

const port = 4204;

const server = express();

server.set('view engine', 'ejs');

//for css
server.set('views', path.resolve(__dirname, 'views'));

server.get('/', (request, response) => {
	response.render('heroDashboard', { heroMock });
});

server.get('/hero', (request, response) => {
	response.render('heroDetail');
});

server.get('/hero/:heroId', (request, response) => {
	response.render('heroDetail');
});

server.get('/heroes', (request, response) => {
	response.render('heroList');
});

// Add styles with css
server.use(express.static(__dirname + 'public'));

server.listen(port, () => console.log(`Server running in port ${port}`));
