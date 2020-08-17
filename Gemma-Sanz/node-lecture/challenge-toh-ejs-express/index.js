const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');

const server = express();
const VIEWS_FOLDER = 'src/views';

const PORT = process.env.PORT || 4204;

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

server.use(morgan('tiny'));

// Add styles with css
server.use(express.static(__dirname + '../public'));

server.use(
	'/css',
	express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css'))
);
server.use(
	'/js',
	express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js'))
);
server.use(
	'/js',
	express.static(path.join(__dirname, 'node_modules/jquery/dist'))
);

//Routes
server.get('/', (request, response) => {
	response.sendFile(path.join(__dirname, VIEWS_FOLDER, 'heroDashboard.html'), {
		heroMock
	});
});

server.get('/hero', (request, response) => {
	response.sendFile(path.join(__dirname, VIEWS_FOLDER, 'heroDetail.ejs'), {
		heroMock
	});
});

server.get('/hero/:heroId', (request, response) => {
	response.sendFile(path.join(__dirname, VIEWS_FOLDER, 'heroDetail.ejs'), {
		heroMock
	});
});

server.get('/heroes', (request, response) => {
	response.sendFile(path.join(__dirname, VIEWS_FOLDER, 'heroList.ejs'), {
		heroMock
	});
});

server.listen(PORT, () =>
	debug('Server is running in port ' + chalk.yellow(PORT))
);
