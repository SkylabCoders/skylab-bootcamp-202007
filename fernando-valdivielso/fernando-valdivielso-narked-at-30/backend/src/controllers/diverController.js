function controller(Model) {
	const all = (req, res, next) => {
		Model.findById(req.params.diverId, (error, diver) => {
			if (error) {
				res.send(error);
			}
			if (diver) {
				req.diver = diver;
				next();
			}
		});
	};

	const deleter = (req, res) => {
		const { diver } = req;
		diver.remove((error) => {
			if (error) {
				res.send(error);
			}
			res.sendStatus(204);
		});
	};

	const put = (req, res) => {
		if (req.body.userInfo) {
			req.diver.userInfo = req.body.userInfo;
		}
		if (req.body.diveInfo) {
			req.diver.diveInfo = req.body.diveInfo;
		}
		req.diver.save((error, diver) => {
			if (error) {
				res.status(404);
			} else {
				res.json(diver);
			}
		});
	};
	return { all, deleter, put };
}

module.exports = controller;
