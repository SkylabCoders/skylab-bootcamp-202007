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
	}
};

const patch = (req, res) => {
	const { hero } = req;

	if (hero) {
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
			res.sendStatus(204);
		});
	}
};

const get = (req, res) => {
	res.json(req.hero);
};

module.exports = { get, put, patch, deleter };
