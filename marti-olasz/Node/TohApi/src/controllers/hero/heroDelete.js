function deleter(req, res) {
	const { hero } = req;
	if (hero) {
		hero.remove((err) => {
			if (err) res.send(err);
			else res.sendStatus(200);
		});
	} else res.sendStatus(400);
}

module.exports = deleter;
