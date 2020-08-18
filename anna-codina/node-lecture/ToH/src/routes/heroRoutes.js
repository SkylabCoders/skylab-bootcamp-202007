const express = require('express');

const heroRoutes = express.Router();

function router(nav, heroList) {
	heroRoutes.route('/').get((req, res) => {
		res.render('list', { nav, heroList });
	});

	heroRoutes.route('/:id').get((req, res) => {
		const { id } = req.params;
		const hero = heroList.find((element) => element.id === +id);
		res.render('detail', { nav, hero });
	});
	return heroRoutes;
}

module.exports = router;
