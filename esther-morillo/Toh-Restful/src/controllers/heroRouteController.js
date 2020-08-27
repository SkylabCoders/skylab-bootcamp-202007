const get = (req, res) => {
	const { hero } = req;
	if(hero) {
		res.status(200)
		res.json(hero);
	} else {
		res.status(404);
	}
};

const put = (req, res) => {
	const { hero } = req;
	// el héroe tiene una prop name? Si la tiene la sustituye, si no la tiene la inserta
	hero.name = req.body.name;
	hero.save((error) => {
		if (error) {
			res.status(404);
			res.send(error);
		} else {
			res.status(201);
			res.json(hero);
		}
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
			res.status(404);
			res.send(error);
		} else {
			res.sendStatus(204);
		}
	});
};

// estos parámetros apuntan a funciones de arriba y se ejecutan en heroRoute como callbacks
module.exports = { get, put, patch, deleter };
