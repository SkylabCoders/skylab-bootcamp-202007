const express = require('express');

const heroRouter = express.Router();

function routes(Heroes) {
	heroRouter.route('/').get((req, res) => {
		const query = {};
		if (req.query.id) {
			query.id = req.query.id;
		}

		Heroes.find(query, (error, heroes) => {
			if (error) {
				res.send(error);
			}
			res.json(heroes);
		});
	});

	heroRouter.route('/:heroId').get((req, res) => {
		Heroes.findById(req.params.heroId, (error, hero) => {
			if (error) {
				res.send(error);
			}
			res.json(hero);
		});
	});
	return heroRouter;
}

module.exports = routes;
