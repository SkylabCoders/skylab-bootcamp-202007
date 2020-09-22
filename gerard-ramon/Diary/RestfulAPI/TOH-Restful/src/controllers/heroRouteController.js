const get = (req, res) => {
	if (req && req.hero) {
		const { hero } = req;
		res.json(hero);
	} else {
		res.send('Bad parameters');
	}
};

const put = (req, res) => {
	const { hero } = req;
	if (hero && req.body.name) {
		hero.name = req.body.name;
		hero.save((error) => {
			if (error) {
				res.send(error);
			} else {
				res.json(hero);
			}
		});
	}
};

const patch = (req, res) => {
	const { hero } = req;

	if (hero && req.body) {
		if (req.body._id) {
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
	} else {
		res.send('Request must include a hero and a body');
	}
};

const deleter = (req, res) => {
	const { hero } = req;

	if (hero) {
		hero.remove((error) => {
			if (error) {
				res.send(error);
			}
			res.sendStatus(204);
		});
	} else {
		res.send('Request must include a hero');
	}
};

module.exports = { get, put, patch, deleter };
