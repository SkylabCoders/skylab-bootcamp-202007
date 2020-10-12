const express = require('express');
const debug = require('debug')('app:crudBikeRoutes');

const localCrudBikeController = require('../controllers/crudBikeController');

const crudBikeRouter = express.Router();

function routes(UserModel, BikeModel, CompoModel) {
	const crudBikeController = localCrudBikeController(
		UserModel,
		BikeModel,
		CompoModel
	);

	crudBikeRouter.route('/').post(crudBikeController.createBike);
	crudBikeRouter.route('/delete').put(crudBikeController.deleteBike);
	crudBikeRouter.route('/edit').put(crudBikeController.updateBike);
	crudBikeRouter.route('/add-workout').put(crudBikeController.addWorkout);
	crudBikeRouter
		.route('/stravaBikeInfo')
		.post(crudBikeController.loadStravaBikeInfo);

	return crudBikeRouter;
}

module.exports = routes;
