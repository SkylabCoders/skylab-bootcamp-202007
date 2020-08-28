const put = (req, res) => {
	const { worker } = req;
	if (worker) {
		worker.name = req.body.name;
		worker.save((err) => {
			if (err) {
				res.send(err);
			}
			res.json(worker);
		});
	}
};

const patch = (req, res) => {
	const { worker } = req;
	if (worker) {
		// eslint-disable-next-line no-underscore-dangle
		if (worker._id) {
			// eslint-disable-next-line no-underscore-dangle
			delete worker._id;
		}

		Object.entries(req.body).forEach((item) => {
			const key = item[0];
			const value = item[1];
			worker[key] = value;
		});
		worker.save((err) => {
			if (err) {
				res.send(err);
			}
			res.json(worker);
		});
	}
};

const deleter = (req, res) => {
	const { worker } = req;
	if (worker) {
		worker.remove((err) => {
			if (err) {
				res.send(err);
			}
			res.json(worker);
		});
	}
};

const get = (req, res) => {
	const { worker } = req;
	res.json(worker);
};
module.exports = { put, patch, deleter, get };
