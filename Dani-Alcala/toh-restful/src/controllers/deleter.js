function deleter(req, res) {
    const { hero } = req;

	hero.remove((error) => {
		if (error) {
			res.send(error);
		}
		res.sendStatus(204);
	});
}

module.exports = deleter