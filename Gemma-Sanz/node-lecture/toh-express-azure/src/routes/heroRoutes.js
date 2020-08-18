const express = require('express');
const debug = require('debug')('app:heroRoutes');

const heroRoutes = express.Router();

function router(nav, heroes) {
	heroRoutes.route('/').get((req, res) => {
		res.render('heroes', {
			nav,
			title: 'My Heros',
			heroes
		});
	});

	heroRoutes.route('/:heroId').get((req, res) => {
		const id = +req.params.heroId;
		debug(id);
		res.render('heroDetail', {
			nav,
			hero: heroes.find((hero) => hero.id === id)
		});
	});

	return heroRoutes;
}

module.exports = router;
