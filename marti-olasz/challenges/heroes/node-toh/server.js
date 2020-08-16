const express = require('express');
const server = express();

const { loadHeroes, saveHero, deleteHero } = require('./views/src/heroActions');
const heroStore = require('./views/src/heroStore');

server.set('view engine', 'ejs');
server.use(express.static(__dirname + '/views'));

loadHeroes();
const heroList = heroStore.getHeroes();

server.get('/', (request, response) => {
	const dashboardList = heroList.slice(0, 4);
	response.render('dashboard.ejs', { dashboardList });
});

server.get('/list', (request, response) => {
	console.log('hola');
	response.render('list.ejs', { heroList, deleteHero, saveHero });
	console.log('adeu');
});

server.get('/hero', (request, response) => {
	let hero = heroStore.getHeroById(+request.query.id);
	response.render('hero.ejs', { heroList, hero });
});

server.listen(2020, () => {
	console.log('Server running...');
});
