const express = require('express');
const sql = require('mssql');
const debug = require('debug');

const heroRoutes = express.Router();

function router(nav) {
	heroRoutes.route('/').get((req, res) => {
		(async function query() {
			try {
				const request = new sql.Request();
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
	heroRoutes
		.route('/:heroId')
		.all((req, res, next) => {
			const id = +req.params.heroId;
			(async function query() {
				try {
					const request = new sql.Request();
					const { recordset } = await request
						.input('id', sql.Int, id)
						.query(`select * from heroes where id= @id`);
					[res.hero] = recordset;
					next();
				} catch (error) {
					debug(error.stack);
				}
			})();
		})
		.post() /* update */
		.get((req, res) => {
			res.render('detail', {
				nav,
				hero: res.hero
			});
		})
		.delete()
		.put(); /* create */

	return heroRoutes;
}

module.exports = router;
