const express = require('express');
const debug = require('debug')('app:userRoutes');

const usersRouteController = require('../controllers/usersRouteController');

const userRouter = express.Router();

function routes(User) {
	userRouter
		.route('/')
		.post((req, res) => {
			const user = new User(req.body);
			user.save();
			res.status(201).json(user);
		})
		.get((req, res) => {
			const query = {};
			if (req.query.username) {
				query.username = req.query.username;
			}
			User.find(query, (error, users) => {
				if (error) {
					res.send(error);
				}
				res.json(users);
			});
		});

	userRouter
		.route('/:userId')
		.all((req, res, next) => {
			User.findById(req.params.userId, (error, user) => {
				if (error) {
					res.send(error);
				}
				if (user) {
					req.user = user;
					debug(req.user);
					next();
				}
			});
		})
		.get(usersRouteController.get)
		.put(usersRouteController.put)
		.patch(usersRouteController.patch)
		.delete(usersRouteController.deleter);
	userRouter.route('/user1').get((req, res) => {
		res.redirect('../../heroes');
	});

	return userRouter;
}

module.exports = routes;
