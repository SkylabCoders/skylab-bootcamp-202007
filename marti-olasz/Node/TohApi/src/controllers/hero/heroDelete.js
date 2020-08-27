function deleter(req, res) {
	const { hero } = req;
	if (hero) {
		hero.remove((error) => {
			if (error) res.send(error);
			res.sendStatus(204);
		});
	}
}

module.exports = deleter;
