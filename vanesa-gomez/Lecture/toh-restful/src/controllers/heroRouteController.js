const get = (req, res) => {
	const { hero } = req;
	res.json(hero);
};

const put = (req, res) => {
	const { hero } = req;
	hero.name = req.body.name;
	hero.save((error) => {
		if (error) {
			res.send(error);
		}
		res.json(hero);
	});
};

const patch = (req, res) => {
	const { hero } = req;

	// eslint-disable-next-line no-underscore-dangle
	if (req.body._id) {
		// eslint-disable-next-line no-underscore-dangle
		delete req.body._id;
	}

	Object.entries(req.body).forEach((item) => {
		const key = item[0];
		const value = item[1];
		hero[key] = value;
	});
	hero.save((error) => {
		if (error) {
			res.send(error);
		}
		res.json(hero);
	});
};

const deleter = (req, res) => {
	const { hero } = req;

	hero.remove((error) => {
		if (error) {
			res.send(error);
		}
		res.sendStatus(204);
	});
};

module.exports = { get, put, patch, deleter };
