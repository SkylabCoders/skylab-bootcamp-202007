const Worker = require('../models/workersModel');

const post = (req, res) => {
	const worker = new Worker(req.body);
	worker.save();
	res.status(201).json(worker);
};

const get = (req, res) => {
	const query = {};
	if (req.query.id) {
		query.id = req.query.id;
	}
	if (req.query.firstName) {
		query.name.first = req.query.firstName;
	}
	if (req.query.lastName) {
		query.name.last = req.query.lastName;
	}
	Worker.find(query, (error, workers) => {
		if (error) {
			res.send(error);
		}
		res.json(workers);
	});
};

module.exports = { post, get };
