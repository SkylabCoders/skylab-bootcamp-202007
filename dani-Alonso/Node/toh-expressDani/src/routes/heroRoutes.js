const express = require('express');
const debug = require('debug')('app:heroRoutes');

const heroRoutes = express.Router();
function router(nav, HEROES) {
	heroRoutes.route('/').get((req, res) => {
		res.render('heroes', {
			nav,
			title: 'My Heroes',
			heroes: HEROES
		});
	});

	heroRoutes.route('/:heroId').get((req, res) => {
		debug(req.params);
		res.render('hero-detail', { hero: HEROES[0], nav });
	});
	return heroRoutes;
}
module.exports = router;
