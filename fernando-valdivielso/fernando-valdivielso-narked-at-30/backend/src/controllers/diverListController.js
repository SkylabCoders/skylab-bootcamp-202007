function controller(Model) {
	const get = (req, res) => {
		const query = {};
		Model.find(query, (error, divers) => {
			if (error) {
				res.send(error);
				res.status(404);
			} else {
				res.json(divers);
				res.status(200);
			}
		});
	};

	const post = (req, res) => {
		const diver = new Model(req.body);
		if (!req.body) {
			res.status(400);
			res.send('name is required');
		} else {
			diver.save();
			res.status(201);
			res.json(diver);
		}
	};
	return { get, post };
}

module.exports = controller;
