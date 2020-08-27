const express = require('express');

const deleter = require('../controllers/user/userDelete');
const deleteAndCreate = require('../controllers/user/userPatch');
const update = require('../controllers/user/userUpdate');

const authRouter = express.Router();

function routes(User) {
	authRouter.route('/').post((req, res) => {
		const user = new User(req.body);
		user.save();
		res.status(201).json(user);
	});

	authRouter.use('/:id', (req, res, next) => {
		User.findById(req.params.id, (err, user) => {
			if (err) res.send(err);
			if (user) {
				req.user = user;
				next();
			}
		});
	});

	authRouter
		.route('/:id')
		.put((req, res) => update(req, res))
		.patch((req, res) => deleteAndCreate(req, res))
		.delete((req, res) => deleter(req, res))
		.get((req, res) => res.send(req.user));

	return authRouter;
}

module.exports = routes;
