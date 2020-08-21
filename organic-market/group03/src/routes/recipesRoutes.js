const express = require('express');
const recipesRouter = express.Router();
const debug = require('debug')('app');

function router(nav) {
	recipesRouter.route('/').get((req, res) => {
		(async function query() {
			try {
				const { recordset } = await request.query('SELECT * FROM heroes');
				res.render('heroes', {
					nav,
					title: 'My Heros',
					heroes: recordset
				});
			} catch (error) {
				debug(error.stack);
			}
		})();
	});
	recipesRouter.route('/detail/:title').get((req, res) => {
		const { title } = req.params;
		res.render('detail', {
			nav,
			title: 'Detail',
			recipe: {
				title: 'Brown eggs',
				type: 'dairy',
				description: 'Raw organic brown eggs in a basket',
				filename: '0.jpg',
				height: 600,
				width: 400,
				price: 28.1,
				rating: 4
			}
		});
	});
	return recipesRouter;
}

module.exports = router;
