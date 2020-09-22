function controler(User) {
	function post(req, res) {
		if (!req.body.name) {
			res.status(400);
			return res.send('name is required');
		}
		if (!req.body.password) {
			res.status(400);
			return res.send('password is required');
		}
		const user = new User(req.body);
		user.save();
		res.status(201);
		res.json(user);
	}
	function get(req, res) {
		const query = {};
		if (req.query.id) {
			query.id = req.query.id;
		}
		if (req.query.name) {
			query.name = req.query.name;
		}

		User.find(query, (error, users) => {
			if (error) {
				res.send(error);
			}
			res.json(users);
		});
		res.status(200);
	}
	return { get, post };
}

module.exports = controler;
