const put = (req, res) => {
	const { hero } = req;
	if (hero) {
		hero.name = req.body.name;
		hero.save((err) => {
			if (err) {
				res.send(err);
			}
			res.json(hero);
		});
		res.status(200);
	} else {
		res.status(404);
	}
};

const patch = (req, res) => {
	// firs get the object
	const { hero } = req;
	if (hero) {
		// second eliminate _id property if the object have it
		// eslint-disable-next-line no-underscore-dangle
		if (hero._id) {
			// eslint-disable-next-line no-underscore-dangle
			delete hero._id;
		}
		// third for each property of the body I have to update the model
		Object.entries(req.body).forEach((item) => {
			const key = item[0];
			const value = item[1];
			hero[key] = value;
		});
		// Forth save the model
		hero.save((err) => {
			if (err) {
				res.send(err);
			}
			// Finaly respond with JSON
			res.json(hero);
		});
		res.status(200);
	} else {
		res.status(404);
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
		res.status(200);
	} else {
		res.status(404);
	}
};
const get = (req, res) => {
	const { hero } = req;
	if (hero) {
		res.json(hero);
		res.status(200);
	} else {
		res.status(404);
	}
};

module.exports = { put, patch, deleter, get };
