function deleter(req, res) {
	const { hero } = req;
	if (hero) {
		hero.remove((err) => {
			if (err) res.send(err);
			else res.status(200);
		});
	} else res.status(400);
}

module.exports = deleter;
