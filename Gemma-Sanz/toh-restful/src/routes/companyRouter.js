const express = require('express');
// const debug = require('debug')('app:heroRoutes');
const companyRouteController = require('../controllers/companyRouteController');
const companiesRouteController = require('../controllers/companiesRouteController');
const Company = require('../models/companyModel');

const companyRouter = express.Router();
function routes(Company) {
	companyRouter
		.route('/')
		.post(companiesRouteController.post)
		.get(companiesRouteController.get);
	companyRouter
		.route('/:companyId')
		.all((req, res, next) => {
			Company.findById(req.params.companyId, (error, company) => {
				if (error) {
					res.send(error);
				}
				if (company) {
					req.company = company;
					next();
				}
				// res.sendStatus(404);
			});
		})
		.get(companyRouteController.get)
		.put(companyRouteController.put)
		.patch(companyRouteController.patch)
		.delete(companyRouteController.deleter);
	return companyRouter;
}
module.exports = routes;
