/* eslint-disable no-underscore-dangle */
const express = require('express');
const debug = require('debug')('app:heroRoutes');

const heroesRouteController = require('../controllers/heroesRouteController');
const heroRouteController = require('../controllers/heroRouteController');

const heroRouter = express.Router();

function routes(Hero) {
	heroRouter
		.route('/')
		.post(heroRouteController.post)
		.get(heroRouteController.get);

	heroRouter
		.route('/:heroId', (req, res, next) => {
			Hero.findById(req.params.heroId, (error, hero) => {
				if (error) {
					res.send(error);
				}
				if (hero) {
					req.hero = hero;
					next();
				} else {
					res.sendStatus(404);
				}
			});
		})
		.get(heroesRouteController.get)
		.put(heroesRouteController.put)
		.patch(heroesRouteController.patch)
		.delete(heroesRouteController.deleter);

	return heroRouter;
}

module.exports = routes;
