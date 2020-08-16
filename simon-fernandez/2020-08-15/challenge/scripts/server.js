const express = require('express');
const { request, response } = require('express');

const {
	loadHeroes,
	saveHero,
	deleteHero
} = require('./views/src/actions/heroActions');
const heroStore = require('./views/src/stores/heroStore');

loadHeroes();

const heroList = heroStore.getHeroes();
console.log(heroStore.getHeroes());
deleteHero(11);
//no borra el hero
console.log(heroStore.getHeroes());

const dashboardList = heroList.slice(0, 4);

const server = express();

server.use(express.static(__dirname + '/views'));
server.use(express.static(__dirname + '/public'));

server.set('view engine', 'ejs');

server.get('/', (request, response) => {
	response.render('hero-dashboard', { dashboardList });
});

server.get('/heroDashboard', (request, response) => {
	response.render('hero-dashboard', { dashboardList });
});

server.get('/heroList', (request, response) => {
	response.render('hero-list', { heroList, deleteHero });
});

server.get('/heroDetail', (request, response) => {
	let hero = heroStore.getHeroById(+request.query.heroId);
	response.render('hero-detail', { hero });
});

server.listen(2020, () => {
	console.log('Server running in port 2020');
});
