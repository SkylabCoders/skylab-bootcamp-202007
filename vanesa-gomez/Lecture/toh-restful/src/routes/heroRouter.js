const express = require('express');

const heroesRouteController = require('../controllers/heroesRouteController');
const heroRouteController = require('../controllers/heroRouteController');

const heroRouter = express.Router();

function routes(Hero) {
	heroRouter
		.route('/')
		.post(heroesRouteController.post)
		.get(heroesRouteController.get);

	heroRouter.use('/:heroId', (req, res, next) => {
		Hero.findById(req.params.heroId, (error, hero) => {
			if (error) {
				res.send(error);
			} // Si viene _id
			if (hero) {
				req.hero = hero;
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
