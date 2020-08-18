const express = require('express');
const debug = require('debug')

const heroRoutes = express.Router();

function router(nav, heroes) {
	heroRoutes.route('/', (req, res) => {
		res.render('heroes', {
			nav,
			title: 'My Heros',
			heroes
		});
	});
	heroRoutes.route('/:heroId').get((req, res) => {
		debug(req);
		res.render('detail', { nav, hero: heroes[0] });
	});

	return heroRoutes;
}

module.exports = router;
