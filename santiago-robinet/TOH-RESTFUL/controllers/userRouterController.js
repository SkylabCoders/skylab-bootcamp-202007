const put = (req, res) => {
	const { user } = req;

	user.lastName = req.body.lastName;

	if (user) {
		user.save((err) => {
			res.send(err);
		});

		res.json(user);
	}
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
	res.send(req.user);
};

module.exports = { put, patch, deleter, get };
