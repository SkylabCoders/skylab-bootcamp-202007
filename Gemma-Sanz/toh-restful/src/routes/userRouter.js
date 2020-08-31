const express = require('express');

const userRouteController = require('../controllers/userRouteController');
const usersRouteController = require('../controllers/usersRouteController');
const userRouter = express.Router();

function routes(User) {
	userRouter
		.route('/')
		.post(usersRouteController.post)
		.get(usersRouteController.get);

	userRouter
		// el .use hace la misma funcion que el .all, antes de hacer cada ruta  hace el .use, es necesario y se tiene que poner antes que el .route, sino peta
		.use('/:userId', (req, res, next) => {
			User.findById(req.params.userId, (error, user) => {
				if (error) {
					res.send(error);
				}
				if (user) {
					req.user = user;
					next();
				} else {
					res.sendStatus(404);
				}
			});
		})
		// podemos poner esto o no, functiona igualmente	userRouter
		.route('/:userId')
		.get(userRouteController.get)
		.put(userRouteController.put)
		.delete(userRouteController.deleter);

	return userRouter;
}

module.exports = routes;
