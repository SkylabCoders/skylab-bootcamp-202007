const express = require('express');
const debug = require('debug')('app:heroRoutes');
const sql = require('mssql');

const heroRoutes = express.Router();
function router(nav) {
	heroRoutes.route('/').get((req, res) => {
		(async function query() {
			const request = new sql.Request();
			try {
				const { recordset } = await request.query('SELECT * from heroes');
				debug();
				res.render('heroes', {
					nav,
					title: 'My Heroes',
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
						.query(`SELECT * from heroes WHERE id=@id`);
					[res.hero] = recordset;
					next();
				} catch (error) {
					debug(error.stack);
				}
			})();
		})

		.get((req, res) => {
			res.render('hero-detail', {
				nav,
				hero: res.hero
			});
		});

	return heroRoutes;
}
module.exports = router;
