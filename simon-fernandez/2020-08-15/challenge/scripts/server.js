const express = require('express');
const { request, response } = require('express');
const heroList = require('./hero.mock');
const hero = require('./hero');
const heroDashboard = require('./views/src/hero-dashboard.component');
const heroDetail = require('./views/src/hero-detail.component');
const heroLists = require('./views/src/hero-list.component');

const server = express();

server.use(express.static(__dirname + '/views'));
server.set('view engine', 'ejs');

server.get('/', (request, response) => {
	response.render('hero-dashboard');
});

server.get('/heroDashboard', (request, response) => {
	response.render('hero-dashboard', { heroList, hero, heroDashboard });
});

server.get('/heroList', (request, response) => {
	response.render('hero-list', { heroList, hero, heroLists });
});

server.get('/heroDetail', (request, response) => {
	response.render('hero-detail', { heroList, hero, heroDetail });
});

server.listen(2020, () => {
	console.log('Server running in port 2020');
});
