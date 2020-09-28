const express = require('express');
const debug = require('debug')('app:productRoutes');

const productRouteController = require('../controllers/productRouteController');
const productsRouteController = require('../controllers/productsRouteController');

const productRouter = express.Router();


function routes(Product, Store, User) {
	const controller = productsRouteController(Product, Store, User);

	productRouter
		.route('/')
		.get(controller.get)
		.post(controller.post)

	productRouter
		.use('/:id', (req, res, next) => {
			console.log('body en ruta', req.body)
			User.findOne({ sub: req.params.id }, (error, user) => {
				if(error) {
					res.send(error);
					res.status(404);
				} else {
					res.status(201);
					req.user = user;
					next();
				}
			})
		})
		
	productRouter
		.route('/:id')
		.put(productRouteController.put)
		

	return productRouter;
}

module.exports = routes;