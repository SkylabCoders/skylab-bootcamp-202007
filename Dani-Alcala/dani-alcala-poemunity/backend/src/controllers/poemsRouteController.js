function poemsController(Poem) {
	function get(req, res) {

		const query = {};
		if (req && req.query && req.query.id) {

			query.id = req.query.id;

		}

		Poem.find(query, (error, poems) => {
			if (error) {
				res.send(error);
			} else {
				res.json(poems);
			}
		});
	}

	function post(req, res) {
		const poem = new Poem(req.body);
			poem.save();
			res.status(201);
            res.json(poem);
	}


	return {
		get, post
	};
}

module.exports = poemsController;