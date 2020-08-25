const read = (req, res) => {
	const { hero } = req;
	res.json(hero);
};

const updateOne = (req, res) => {
	
	const { hero } = req;

	hero.save((error) => {
		if (error) { res.send(error);	}
		res.json(hero);
	});
};

const updateMany = (req, res) => {
	const { hero } = req;

	if (req.body._id) {
		delete req.body._id;
	}

	Object.entries(req.body).forEach((item) => {
		const key = item[0];
		const value = item[1];
		hero[key] = value;
	});
	hero.save((error) => {
		if (error) { res.send(error);	}
		res.json(hero);
	});
};

const remove = (req, res) => {
	const { hero } = req;

	hero.deleteOne((error) => {
		if (error) { res.send(error); }
		res.sendStatus(204);
	});
};

module.exports = { read, updateOne, updateMany, remove };