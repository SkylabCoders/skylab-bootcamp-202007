/* const get = (req, res) => {
	const { company } = req;
	res.json(company);
};

const put = (req, res) => {
	const { company } = req;
	company.name = req.body.name;
	company.save((error) => {
		if (error) {
			res.send(error);
		}
		res.json(company);
	});
};

const patch = (req, res) => {
	const { company } = req;

	if (req.body._id) {
		delete req.body._id;
	}

	Object.entries(req.body).forEach((item) => {
		const key = item[0];
		const value = item[1];
		company[key] = value;
	});
	company.save((error) => {
		if (error) {
			res.send(error);
		}
		res.json(company);
	});
};

const deleter = (req, res) => {
	const { company } = req;

	company.remove((error) => {
		if (error) {
			res.send(error);
		}
		res.sendStatus(204);
	});
};

module.exports = { get, put, patch, deleter };
 */
