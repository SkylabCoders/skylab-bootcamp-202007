const put = (req, res) => {
	const { user } = req;
	user.name = req.body.name;
	user.save((err) => {
		if (err) res.send(err);
		res.json(user);
	});
};
const patch = (req, res) => {
	const { user } = req;
	Object.entries(req.body).forEach((item) => {
		const key = item[0];
		const value = item[1];
		user[key] = value;
	});
	user.save((err) => {
		if (err) {
			res.send(err);
		}
		res.json(user);
	});
};
const deleter = (req, res) => {
	const { user } = req;
	user.remove((err) => {
		if (err) {
			res.send(err);
		}
		res.sendStatus(204);
	});
};
const get = (req, res) => {
	const { user } = req;
	res.json(user);
};

module.exports = { put, patch, deleter, get };
