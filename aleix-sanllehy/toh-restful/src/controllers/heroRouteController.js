const Hero = require('../models/heroModel');

/* eslint-disable no-underscore-dangle */
const controller = () => {
	const all = (req, res, next) => {
		Hero.findById(req.params.heroId, (error, hero) => {
			if (error) {
				res.send(error);
			}
			if (hero) {
				req.hero = hero;
				next();
			} else {
				res.sendStatus(404);
			}
		});
	};

	const put = (req, res) => {
		// retrive a hero, get the new values and store them
		const { hero } = req;
		if (hero) {
			// eslint-disable-next-line no-param-reassign
			hero.name = req.body.name;
			hero.save((err) => {
				if (err) {
					res.send(err);
				}
				res.json(hero);
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
		const { hero } = req;
		if (hero) {
			if (req.body._id) {
				delete req.body._id;
			}
			Object.entries(req.body).forEach((item) => {
				const key = item[0];
				const value = item[1];
				// eslint-disable-next-line no-param-reassign
				hero[key] = value;
			});
			hero.save((err) => {
				if (err) {
					res.send(err);
				}
				res.json(hero);
			});
		}
	};

	const deleter = (req, res) => {
		const { hero } = req;
		if (hero) {
			hero.remove((err) => {
				if (err) {
					res.send(err);
				}
				res.json(hero);
			});
		}
	};

	const get = (req, res) => {
		// res.send('Hero Id works');
		const { hero } = req;
		res.json(hero);
	};

	return { all, get, put, patch, deleter };
};

module.exports = controller();
