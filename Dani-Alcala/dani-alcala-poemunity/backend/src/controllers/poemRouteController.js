const get = (req, res) => {
	const { poem } = req;
	res.json(poem);
};

const put = (req, res) => {
	let { poem } = req;
	if(poem.likes.some((id) => id === req.body.userId)) {		
		poem.likes.splice(poem.likes.indexOf(req.body.userId), 1)
	}
	else {
		poem.likes.push(req.body.userId)
	}
	
	poem.save((error) => {
		if (error) {
			res.send(error);
		} else {
			res.json(poem);
		}
	});
};

const deleter = (req, res) => {
	const { poem } = req;

	poem.remove((error) => {
		if (error) {
			res.send(error);
		}
		res.sendStatus(204);
	});
};

module.exports = { get, put, deleter };