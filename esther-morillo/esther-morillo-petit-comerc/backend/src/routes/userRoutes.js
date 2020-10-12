const express = require('express');
const debug = require('debug')('app:userRoutes');

const userRouteController = require('../controllers/userRouteController');
const usersRouteController = require('../controllers/usersRouteController');

const userRouter = express.Router();


function routes(User) {
    const controller = usersRouteController(User);

    userRouter
        .route('/')
		.get(controller.get)
		.post(controller.post)
		
	userRouter
		.use('/:id', (req, res, next) => {
			User.findOne({ sub: req.params.id }, (error, user) => {
				if(error) {
					res.send(error);
					res.status(404);
				} else {
					res.status(201);
					req.user = user;
					next();
				}
			})
		})
	userRouter.route('/:id')
		.put(userRouteController.put)

    return userRouter;
}

module.exports = routes;