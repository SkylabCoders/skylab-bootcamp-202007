const express = require('express');

const userRouteController = require('../controllers/userRouteController');

const userRouter = express.Router();

function userRoutes(User) {
	userRouter
		.route('/')
		.post((req, res) => {
			const user = new User(req.body);
			user.save();
			res.status(201).json(user);
		})
		.get((req, res) => {
			const query = {};
			if (req.query.id) {
				query.id = req.query.id;
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
					req.hero = user;
					next();
				}

				res.sendStatus(404);
			});
		})
		.get(userRouteController.get)
		.put(userRouteController.put)
		.patch(userRouteController.patch)
		.delete(userRouteController.deleter);


        return userRouter;
}

module.exports = userRoutes;
