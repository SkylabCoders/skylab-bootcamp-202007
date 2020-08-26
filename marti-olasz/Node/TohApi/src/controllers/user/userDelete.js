function deleter(req, res) {
	const { user } = req;
	if (user) {
		user.remove((error) => {
			if (error) res.send(error);
			res.sendStatus(204);
		});
	}
}

module.exports = deleter;
