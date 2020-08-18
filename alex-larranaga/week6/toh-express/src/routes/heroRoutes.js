const express = require('express');

const heroRoutes = express.Router();

function router() {
	//rutas
	heroRoutes.route('/').get((req, res) => {
		res.render('heroes', {
			nav,
			title: 'My heroes',
			heroes
		});
	});
	heroRoutes.route('/:heroId').get((req, res) => {
		res.render('hero-detail', {
			nav,
			hero: heroes[0]
		});
	});
	return heroRoutes;
}

module.exports = router;
