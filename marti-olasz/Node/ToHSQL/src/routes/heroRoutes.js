const express = require('express');
const sql = require('mssql');
const debug = require('debug')('app:heroRoutes');

const heroRoutes = express.Router();

function router(nav) {
	heroRoutes.route('/').get((req, res) => {
		(async () => {
			const request = new sql.Request();
			try {
				const { recordset } = await request.query('SELECT * FROM heroes');
				res.render('list', { nav, heroList: recordset });
			} catch (err) {
				debug(err);
			}
		})();
	});

	heroRoutes
		.route('/:id')
		.all((req, res, next) => {
			(async () => {
				const request = new sql.Request();
				try {
					const { recordset } = await request
						.input('id', sql.Int, req.params.id)
						.query('SELECT * FROM heroes WHERE id = @id');
					[res.hero] = recordset;
					next();
				} catch (err) {
					debug(err);
				}
			})();
		})
		.get((req, res) => {
			res.render('detail', { nav, hero: res.hero });
		});
	return heroRoutes;
}

module.exports = router;
