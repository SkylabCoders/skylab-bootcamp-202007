const express = require('express');
const workerRouteController = require('../controllers/workerRouteController');
const workersRouteController = require('../controllers/workersRouteController');

const workerRouter = express.Router();

function routes() {
	workerRouter
		.route('/')
		.post(workersRouteController.post)
		.get(workersRouteController.get);

	workerRouter
		.route('/:workerId')
		.all(workerRouteController)
		.put(workerRouteController)
		.patch(workerRouteController)
		.delete(workerRouteController)
		.get(workerRouteController);
}

module.exports = routes;
