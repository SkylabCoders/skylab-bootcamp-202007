const express = require('express');
const userRouteController = require('../controllers/userRouteController');
const usersRouteController = require('../controllers/usersRouteController');

const userRouter = express.Router();

function routes() {
	userRouter
		.route('/')
		.post(usersRouteController.post)
		.get(usersRouteController.get);

	userRouter
		.route('/:userId')
		.all(userRouteController.all)
		.put(userRouteController.put)
		.patch(userRouteController.patch)
		.delete(userRouteController.deleter)
		.get(userRouteController.get);

	return userRouter;
}

module.exports = routes;
