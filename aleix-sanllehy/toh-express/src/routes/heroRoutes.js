const express = require('express');
const debug = require('debug')('app: heroRoutes');

const heroRoutes = express.Router();

function router(nav, heroes) {
	heroRoutes.route('/').get((req, res) => {
		const heroes = [];
		res.render('list', {
			nav,
			title: 'My Heroes',
			heroes
		});
	});

	heroRoutes.route('/:heroId').get((req, res) => {
		const heroes = [];
		const id = +req.params.heroId;
		res.render('hero', {
			nav,
			title: 'My Heroes',
			hero: heroes.find((hero) => hero.id === id)
		});
	});

	return heroRoutes;
}

module.exports = router;

/* app.get('/heroes', (req, res) => {
	res.render('list', {
		nav,
		title: 'My Heroes',
		heroes
	});
});

app.get('/heroes/:heroId', (req, res) => {
	res.render('hero', { nav, heroes: heroes[0] });
}); */
