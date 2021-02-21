const express = require('express');

const heroesRouteController = require('../controller/heroesRouteController');

const heroRouteController = require('../controller/heroRouterController');

const debug = require('debug')('app:app.js');

const heroRouter = express.Router();

function routes(Hero) {
	heroRouter
		.route('/')
		.get(heroesRouteController(Hero).get)
		.post(heroesRouteController(Hero).post);

	heroRouter.use('/:heroId', (req, res, next) => {
		debug(req);
		Hero.findById(req.params.heroId, (error, hero) => {
			if (error) {
				res.send(error);
			}
			if (hero) {
				req.hero = hero;
				res.sendStatus(204);
				next();
			} else {
				res.sendStatus(404);
			}
		});
	});

	heroRouter
		.route('/:heroId')
		.get(heroRouteController.get)
		.put(heroRouteController.put)
		.patch(heroRouteController.patch)
		.delete(heroRouteController.deleter);

	return heroRouter;
}
module.exports = routes;
