const express = require('express');
const server = express();

const { loadHeroes, saveHero, deleteHero } = require('./views/src/heroActions');
const heroStore = require('./views/src/heroStore');

server.set('view engine', 'ejs');
server.use(express.static(__dirname + '/views'));

loadHeroes();
const heroList = heroStore.getHeroes();

server.get('/', (request, response) => {
	const dashboardList = heroStore.getHeroes().slice(0, 4);
	response.render('dashboard.ejs', { dashboardList });
});

server.get('/list', (request, response) => {
	const data = {
		heroList: heroStore.getHeroes(),
		deleteHero,
		saveHero
	};
	response.render('list.ejs', data);
});

server.get('/hero', (request, response) => {
	let hero = heroStore.getHeroById(+request.query.id);
	response.render('hero.ejs', { heroList: heroStore.getHeroes(), hero });
});

server.listen(2020, () => {
	console.log('Server running...');
});
