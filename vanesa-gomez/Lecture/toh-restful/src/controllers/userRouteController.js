const get = (req, res) => {
	const { user } = req;
	res.json(user);
};

const put = (req, res) => {
	const { user } = req;
	user.name = req.body.name;
	user.save((error) => {
		if (error) {
			res.send(error);
		}
		res.json(user);
	});
};

const patch = (req, res) => {
	const { user } = req;

	if (req.body._id) {
		delete req.body._id;
	}

	Object.entries(req.body).forEach((item) => {
		const key = item[0];
		const value = item[1];
		user[key] = value;
	});
	user.save((error) => {
		if (error) {
			res.send(error);
		}
		res.json(user);
	});
};

const deleter = (req, res) => {
	const { user } = req;

	user.remove((error) => {
		if (error) {
			res.send(error);
		}
		res.sendStatus(204);
	});
};

module.exports = { get, put, patch, deleter };
