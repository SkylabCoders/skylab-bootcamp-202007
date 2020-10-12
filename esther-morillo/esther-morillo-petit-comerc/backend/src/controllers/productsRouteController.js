function productController(Product, Store, User) {

    const get = (req, res) => {
        const query = {};

        Product.find(query, (error, products) => {
            if(error) {
                res.status(400);
                res.send(error);
            } else {
                res.status(200);
                res.json(products);
            }
        });
    }

    async function post(req, res) {
        const product = new Product(req.body);	
        const savedProduct = await product.save();
        
		Store.findById(req.body.storeId, (error, store) =>{
			if(error) {
				res.status(404);
				res.send(error);
			}
			if(store) {
				store.products.push(savedProduct._id)
				res.json(store)
				store.save()
			}
		})
	}	

    return {
        get, post
    }
}

module.exports = productController;