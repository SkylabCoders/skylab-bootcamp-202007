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

const deleter = (req, res) => {
	const { user } = req;
	user.remove((error) => {
		if (error) {
			res.send(error);
		}
		res.sendStatus(204);
	});
};

module.exports = { get, put, deleter };
