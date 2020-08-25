const User = require('../models/userModel');

/* eslint-disable no-underscore-dangle */
const controller = () => {
	const all = (req, res, next) => {
		User.findById(req.params.userId, (error, user) => {
			if (error) {
				res.send(error);
			}
			if (user) {
				req.user = user;
				next();
			}
			res.sendStatus(404);
		});
	};
	const put = (req, res) => {
		// retrive a hero, get the new values and store them
		const { user } = req;
		if (user) {
			// eslint-disable-next-line no-param-reassign
			user.name = req.body.name;
			user.save((err) => {
				if (err) {
					res.send(err);
				}
				res.json(user);
			});
		}
	};

	const patch = (req, res) => {
		/**
		 * retrieve object
		 * if _id in object, delete from object
		 * for each property in body, update model
		 *
		 * save model
		 */
		const { user } = req;
		if (user) {
			if (req.body._id) {
				delete req.body._id;
			}
			Object.entries(req.body).forEach((item) => {
				const key = item[0];
				const value = item[1];
				// eslint-disable-next-line no-param-reassign
				user[key] = value;
			});
			user.save((err) => {
				if (err) {
					res.send(err);
				}
				res.json(user);
			});
		}
	};

	const deleter = (req, res) => {
		const { user } = req;
		if (user) {
			user.remove((err) => {
				if (err) {
					res.send(err);
				}
				res.json(user);
			});
		}
	};

	const get = (req, res) => {
		// res.send('User Id works');
		const { user } = req;
		res.json(user);
	};

	return { all, get, put, patch, deleter };
};

module.exports = controller();
