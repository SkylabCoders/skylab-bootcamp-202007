const express = require('express');
const path = require('path');
const server = express();

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

server.set('view engine', 'ejs');

// Add styles with css
server.use(express.static(__dirname + '../public'));

//for css?
server.set('/views', path.resolve(__dirname, 'views'));

//Routes
server.get('/', (request, response) => {
	response.render(path.join(__dirname, '../views', 'heroDashboard'), {
		heroMock
	});
});

server.get('/hero', (request, response) => {
	response.render(path.join(__dirname, '../views', 'heroDetail'), {
		heroMock
	});
});

server.get('/hero/:heroId', (request, response) => {
	response.render(path.join(__dirname, '../views', 'heroDetail'), {
		heroMock
	});
});

server.get('/heroes', (request, response) => {
	response.render(path.join(__dirname, '../views', 'heroList'), {
		heroMock
	});
});

server.listen(port, () => console.log(`Server running in port ${port}`));
