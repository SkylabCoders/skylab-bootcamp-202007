const get = (req, res) => {
	const { user } = req;
	res.json(user);
};

const put = (req, res) => {
	const { user } = req;
	user.name = req.body.name;
	user.lastName = req.body.lastName;
	user.password = req.body.password;
	user.gender = req.body.gender;
	user.age = req.body.age;
	user.email = req.body.email;

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
