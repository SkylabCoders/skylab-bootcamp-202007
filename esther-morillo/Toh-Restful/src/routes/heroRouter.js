const express = require('express');

const heroesRouteController = require('../controllers/heroesRouteControler');
const heroRouteController = require('../controllers/heroRouteController');

const heroRouter = express.Router();

function routes(Hero) {
	heroRouter
		.route('/')
		.get(heroesRouteController.get)
		.post(heroesRouteController.post)


	heroRouter.use('/:heroId', (req, res, next) => {
		Hero.findById(req.params.heroId, (error, hero) => {
			if (error) {
				res.send(error);
			}
			if (hero) {
				req.hero = hero;
				next();
			} else {
				// res.sendStatus(404);
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
