function itemMethods(){
	function readOne (req, res) {
		const { item } = req;
		res.status(200);
		res.json(item);
	};
	
	function updateItemName (req, res) {
		
		const { item } = req;

		if (req && req.body && req.body.name) { 
			item.name = req.body.name 
		}
	
		item.save((error) => {
			if (error) { res.send(error);	}
			res.status(204);
			res.json(item);
		});
	};
	
	function updateMany (req, res) {
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
			res.status(204);
			res.json(item);
		});
	};
	
	function remove (req, res) {
		const { item } = req;
	
		item.deleteOne((error) => {
			if (error) { res.send(error); }
			res.sendStatus(204);
		});
	};

	return  { remove, updateMany, updateItemName, readOne }
}


module.exports = itemMethods;