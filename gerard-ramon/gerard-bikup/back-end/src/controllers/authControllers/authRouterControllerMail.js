const debug = require('debug')('app:authRouterControllerMail');

function authRouterControllerMail(UserModel) {
	function post(req, res) {
		if (req.newUser) {
			const newUser = req.newUser;

			UserModel.create(newUser, (error, createdUser) => {
				if (error) {
					res.status(400);
					return res.send(error);
				} else {
					res.status(201);
					return res.json(createdUser);
				}
			});
		} else {
			res.status(400);
			res.send('A newUser is required in order to register an user');
		}
	}

	return { post };
}

module.exports = authRouterControllerMail;
