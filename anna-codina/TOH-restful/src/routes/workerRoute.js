const express = require('express');

const workersRouterControler = require('../controler/workersRouterControler');
const workerRouteControler = require('../controler/workerRouteControler');

const workerRouter = express.Router();

function routes(Worker) {
	workerRouter
		.route('/')
		.post(workersRouterControler.post)
		.get(workersRouterControler.get);

	workerRouter.use('/:workerId', (req, res, next) => {
		Worker.findById(req.params.workerId, (error, worker) => {
			if (error) {
				res.send(error);
			}
			if (worker) {
				req.worker = worker;
				next();
			} else {
				res.sendStatus(404);
			}
		});
	});

	workerRouter
		.route('/:workerId')
		.put(workerRouteControler.put)
		.patch(workerRouteControler.patch)
		.delete(workerRouteControler.deleter)
		.get(workerRouteControler.get);
	return workerRouter;
}

module.exports = routes;
