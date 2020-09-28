const express = require('express');

const diveSitesRoutes = express.Router();

function routes(DiveSite) {
	diveSitesRoutes.route('/').get((req, res) => {
		const query = {};
		DiveSite.find(query, (error, diveSites) => {
			if (error) {
				res.send(error);
				res.status(404);
			} else {
				res.json(diveSites);
				res.status(200);
			}
		});
	});
	return diveSitesRoutes;
}

module.exports = routes;
