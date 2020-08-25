const express = require('express');
const { MongoClient } = require('mongodb');
const debug = require('debug')('app:foodRoutes');

const searchRoutes = express.Router();


function router(nav) {
    searchRoutes
		.route('/')
		.post((req, res) => {
			const url = 'mongodb+srv://admin:1234Abcd!@cluster0.vdzqh.mongodb.net/mongoProducts?retryWrites=true&w=majority';
			const dbName = 'mongoProducts';
			const productCollection = 'products';
            let client;

            const { search } = req.body
            const [ searchWord ] = search;

			(async function query() {
				try {

                    client = await MongoClient.connect(url);
					const db = client.db(dbName);
					const collection = db.collection(productCollection);
                    const products = await collection.find().toArray();

                    const findProduct = products.filter((product) =>
                            product.title
                                .toLowerCase()
                                .includes(searchWord.toLowerCase()) ||
                            product.type
                                .toLowerCase()
                                .includes(searchWord.toLowerCase()) ||
                            product.description
                                .toLowerCase()
                                .includes(searchWord.toLowerCase())
                    );

                    if(findProduct.length !== 0) {
                        res.render('findProduct', {
                            nav,
                            title: `Search product: ${searchWord}`,
                            findProduct,
                            user: req.user
                        });

                    } else {
                        res.render('findProduct', {
                            nav,
                            title: `Sorry "${searchWord}" doesn't exist `,
                            findProduct,
                            user: req.user
                        });
                    }					

                } catch (error) {
                    debug(error.stack);
                }
                client.close();
            })();
        });		
		
		return searchRoutes;
}

module.exports = router;
