function deleteAndCrate(req, res) {
	const { user } = req;
	if (user) {
		if (user._id) delete user._id;
		Object.entries(req.body).forEach((item) => {
			const key = item[0];
			const value = item[1];
			user[key] = value;
		});
		user.save((error) => {
			if (error) res.send(error);
			res.json(user);
		});
	}
}

module.exports = deleteAndCrate;
