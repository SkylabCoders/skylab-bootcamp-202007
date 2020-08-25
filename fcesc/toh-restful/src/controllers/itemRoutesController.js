const read = (req, res) => {
	const { item } = req;
	res.json(item);
};

const updateOne = (req, res) => {
	
	const { item } = req;

	item.save((error) => {
		if (error) { res.send(error);	}
		res.json(item);
	});
};

const updateMany = (req, res) => {
	const { item } = req;

	if (req.body._id) {
		delete req.body._id;
	}

	Object.entries(req.body).forEach((prop) => {
		const key = prop[0];
		const value = prop[1];
		item[key] = value;
	});
	item.save((error) => {
		if (error) { res.send(error);	}
		res.json(item);
	});
};

const remove = (req, res) => {
	const { item } = req;

	item.deleteOne((error) => {
		if (error) { res.send(error); }
		res.sendStatus(204);
	});
};

module.exports = { read, updateOne, updateMany, remove };