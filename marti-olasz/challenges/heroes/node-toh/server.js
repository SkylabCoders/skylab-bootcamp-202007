const express = require('express');
const server = express();

//const heroList = require('./views/src/hero.mock');
const heroActions = require('./views/src/heroActions');
const heroStore = require('./views/src/heroStore');

const heroList = heroActions.loadHeroes();
console.log(heroList);
server.set('view engine', 'ejs');
server.use(express.static(__dirname + '/views'));

const dashboardList = heroList.slice(0, 4);
server.get('/', (request, response) => {
	response.render('dashboard.ejs', { dashboardList });
});

server.get('/list', (request, response) => {
	response.render('list.ejs');
});

server.get('/hero', (request, response) => {
	response.render('hero.ejs');
});

server.listen(2020, () => {
	console.log('Server running...');
});
