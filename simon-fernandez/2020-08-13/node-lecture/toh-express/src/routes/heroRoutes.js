const express = require('express');

const heroRouter = express.Router();

function router(HEROES, request, dashboardList) {
	heroRouter.route('/').get((req, res) => {
		res.render('dashboard', { title: 'Top Heroes', dashboardList });
	});

	heroRouter.route('/heroes').get((req, res) => {
		res.render('heroes', {
			title: 'My heroes',
			HEROES
		});
	});

	heroRouter.route('/heroes/:heroId').get((req, res) => {
		const hero = +request.query.heroId;
		res.render('details', { hero });
	});
	return heroRouter;
}

module.exports = router;
