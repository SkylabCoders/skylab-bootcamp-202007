const debug = require('debug')('app:authRouterControllerMailLogin');

function authRouterControllerMailLogin(UserModel) {
	function get(req, res) {
		if (req.query && req.query.email && req.query.password) {
			const { email, password } = req.query;

			const userQuery = {
				email,
				password,
			};

			UserModel.find(userQuery, (error, user) => {
				if (error) {
					res.status(400);
					return res.send(error);
				} else {
					res.status(200);
					return res.json(user[0]);
				}
			});
		} else {
			res.status(400);
			return res.send('Email and password are requiered');
		}
	}

	return { get };
}

module.exports = authRouterControllerMailLogin;
