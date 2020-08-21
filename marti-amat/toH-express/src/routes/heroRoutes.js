const express = require('express');

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
		res.render('hero-detail', { hero: HEROES[0], nav });
	});
	return heroRoutes;
}
module.exports = router;
