const express = require('express');
// const debug = require('debug')('app:heroRoutes');
const heroRouteController = require('../controllers/heroRouteController');
const heroesRouteController = require('../controllers/heroesRouteController');
const heroRouter = express.Router();

function routes(Hero) {
	const controller = heroesRouteController(Hero);
	heroRouter.route('/').post(controller.post).get(controller.get);
	heroRouter
		.route('/:heroId')
		.all((req, res, next) => {
			Hero.findById(req.params.heroId, (error, hero) => {
				if (error) {
					res.send(error);
				}
				if (hero) {
					req.hero = hero;
					next();
				}
				// res.sendStatus(404);
			});
		})
		.get(heroRouteController.get)
		.put(heroRouteController.put)
		.patch(heroRouteController.patch)
		.delete(heroRouteController.deleter);
	return heroRouter;
}
module.exports = routes;
