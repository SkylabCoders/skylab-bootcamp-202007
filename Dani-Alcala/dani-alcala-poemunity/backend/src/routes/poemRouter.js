const express = require('express');

const poemRouteController = require('../controllers/poemRouteController');
const poemsRouteController = require('../controllers/poemsRouteController');

const poemRouter = express.Router();

function routes(Poem) {
    const controller = poemsRouteController(Poem)
	poemRouter.route('/').get(controller.get).post(controller.post)
    
    poemRouter
		.use('/:poemId', (req, res, next) => {
			Poem.findById(req.params.poemId, (error, poem) => {
				if (error) {
					res.send(error);
				}
				if (poem) {
					req.poem = poem;
					return next();
				}

				res.sendStatus(404);
			});
		})

	poemRouter
		.route('/:poemId')
		.get(poemRouteController.get)
		.put(poemRouteController.put)
		.delete(poemRouteController.deleter)

	return poemRouter;
}

module.exports = routes;