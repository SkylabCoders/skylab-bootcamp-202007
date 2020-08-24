/* eslint-disable no-underscore-dangle */
const express = require('express');
const heroRouteController = require('../controllers/heroRouteController');
const heroesRouteController = require('../controllers/heroesRouteController');

const heroRouter = express.Router();

function routes(Hero) {
	heroRouter
		.route('/')
		.post(heroesRouteController.post)
		.get(heroesRouteController.get);

	heroRouter
		.use('/:heroId', (req, res, next) => {
			Hero.findById(req.params.heroId, (error, hero) => {
				if (error) {
					res.send(error);
				}
				if (hero) {
					res.hero = hero;
					next();
				} else {
					res.sendStatus(404);
				}
			});
		})
		.put(heroRouteController.put)
		.patch(heroRouteController.patch)
		.delete(heroRouteController.deleter)
		.get(heroRouteController.get);

	return heroRouter;
}

module.exports = routes;
