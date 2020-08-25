const express = require('express');
const debug = require('debug')('app:heroRoutes');
const sql = require('mssql');

const heroRoutes = express.Router();

function router(nav) {
	heroRoutes.route('/').get((req, res) => {
		(async function queryAll() {
			const request = new sql.Request();
			try {
				const { recordset } = await request.query('SELECT * FROM heroes');
				res.render('list', { nav, heroList: recordset });
			} catch (error) {
				debug(error.stack);
			}
		})();
	});

	heroRoutes
		.route('/:id')
		.all((req, res, next) => {
			(async function queryId() {
				try {
					const { id } = req.params;
					const request = new sql.Request();
					const { recordset } = await request
						.input('id', sql.Int, id)
						.query(`SELECT * FROM heroes WHERE id= @id`);
					[res.hero] = recordset;
					next();
				} catch (error) {
					debug(error.stack);
				}
			})();
		})
		.get((req, res) => {
			res.render('detail', { nav, hero: res.hero });
		});
	return heroRoutes;
}

module.exports = router;
