const express = require('express');
const { request, response } = require('express');

const heroActions = require('./views/src/actions/heroActions');
const heroStore = require('./views/src/stores/heroStore');

const heroList = heroActions.loadHeroes();
const dashboardList = heroList;

const server = express();

server.use(express.static(__dirname + '/views'));
server.set('view engine', 'ejs');

server.get('/', (request, response) => {
	response.render('hero-dashboard');
});

server.get('/heroDashboard', (request, response) => {
	response.render('hero-dashboard', { dashboardList });
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
