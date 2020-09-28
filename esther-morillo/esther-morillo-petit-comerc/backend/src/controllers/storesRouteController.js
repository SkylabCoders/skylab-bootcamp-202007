function storeController(Store, User) {
	
	function get(req, res) {
		const query = {};

		Store.find(query).populate('products').exec((error, stores) => {
			if (error) {
				res.status(400);
				res.send(error);
			} else {
				res.status(200);
				res.json(stores);
			}
		});
	}	
	
	async function post(req, res) {
		const store = new Store(req.body);		
		const savedStore = await store.save();
		
		User.findById(req.body.ownerId, (error, user) =>{
			if(error) {
				res.status(404);
				res.send(error);
			}
			if(user) {
				user.store.push(savedStore._id);
				user.owner = true;
				res.json(user)
				user.save()
			}
		})		
	}	

	return {
		get,
		post
	};
}

module.exports = storeController;