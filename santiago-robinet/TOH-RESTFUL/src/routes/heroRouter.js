/* eslint-disable no-param-reassign */
const express = require('express');
const heroRouterController = require('../../controllers/heroRoutesController');
const heroesRouterController = require('../../controllers/heroesRoutesController');

const heroRouter = express.Router();

function routes(Hero) {
	const controller = heroesRouterController(Hero);
	heroRouter
		.route('/')
		.post(controller.post)
		.get(controller.get)


	heroRouter.use('/:heroId', (req, res, next) => {
		Hero.findById(req.params.heroId, (error, hero) => {
			if (error) {
				res.send(error);
			}

			if (hero) {
				req.hero = hero;
				next();
            } else{

				res.sendStatus(404);
			}
            
		});
	});

	heroRouter
		.route('/:heroId')
		.put(heroRouterController.put)
		.patch(heroRouterController.patch)
		.delete(heroRouterController.deleter)
		.get(heroRouterController.get);

	return heroRouter;
}

module.exports = routes;
