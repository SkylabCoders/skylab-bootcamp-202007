const Users = require('../models/userModel');

const post = (req, res) => {
	const user = new Users(req.body);
	user.save();
	res.status(201).json(user);
};
const get = (req, res) => {
	const query = {};
	if (req.query.id) {
		query.id = req.query.id;
	}

	Users.find(query, (error, users) => {
		if (error) {
			res.send(error);
		}
		res.json(users);
	});
};
module.exports = { post, get };
