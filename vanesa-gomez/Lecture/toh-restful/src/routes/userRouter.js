const express = require('express');

const usersRouteController = require('../controllers/usersRouteController');
const userRouteController = require('../controllers/userRouteController');

const userRouter = express.Router();

function routes(User) {
	userRouter
		.route('/')
		.post(usersRouteController.post)
		.get(usersRouteController.get);

	userRouter.use('/:userId', (req, res, next) => {
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
	});
	userRouter
		.route('/:userId')
		.get(userRouteController.get)
		.put(userRouteController.put)
		.patch(userRouteController.patch)
		.delete(userRouteController.deleter);

	return userRouter;
}

module.exports = routes;
