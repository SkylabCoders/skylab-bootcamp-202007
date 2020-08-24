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
		.route('/:userId', (req, res, next) => {
			User.findById(req.params.userId, (error, user) => {
				if (error) {
					res.send(error);
				}
				if (user) {
					req.user = user;
					next();
				}
				// res.sendStatus(404);
			});
		})
		.get(userRouteController.get)
		.put(userRouteController.put)
		.delete(userRouteController.deleter);

	return userRouter;
}

module.exports = routes;
