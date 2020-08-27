const express = require('express');
const userRouteController = require('../controllers/userRouteController');

const userRouter = express.Router();

function routes(Users) {
	userRouter
		.route('/')
		.post((req, res) => {
			const user = new Users(req.body);
			user.save();
			res.status(201).json(user);
		})
		.get((req, res) => {
			const query = {};
			if (req.query.id) {
				query.id = req.query.id;
			}

			Users.find(query, (error, users) => {
				if (error) {
					res.send(error);
				}
				res.json(users);
			});
		});
	userRouter
		.route('/:userId')
		.all((req, res, next) => {
			Users.findById(req.params.userId, (error, user) => {
				if (error) {
					res.send(error);
				}
				if (user) {
					req.user = user;
					next();
				}
			});
		})
		.put(userRouteController.put)
		.patch(userRouteController.patch)
		.delete(userRouteController.deleter)
		.get(userRouteController.get);
	return userRouter;
}

module.exports = routes;
