function update(req, res) {
	const { user } = req;
	if (user) {
		user.name = req.body.name;
		user.save((error) => res.send(error));
		res.send(user);
	}
	res.sendStatus(404);
}

module.exports = update;
