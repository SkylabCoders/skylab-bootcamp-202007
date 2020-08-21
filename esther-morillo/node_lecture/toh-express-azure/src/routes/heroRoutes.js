const express = require('express');
/* const debug = require('debug')('app:heroRoutes'); */
const sql = require('mssql');

const heroRoutes = express.Router();

function router(nav) {
	heroRoutes.route('/').get((req, res) => {
		(async function query() {
			const request = new sql.Request();
			try {
				const { recordset } = await request.query('SELECT * FROM heroes');
				res.render('heroes', {
					nav,
					title: 'My Heros',
					heroes: recordset
				});
			} catch (error) {
				/* debug(error.stack); */
				console.log(error);
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
						.query(`SELECT * FROM heroes WHERE id = ${id}`);
					[res.hero] = recordset;
					next();
				} catch (error) {
					/* debug(error.stack); */
					console.log(error);
				}
			})();
		})
		.get((req, res) => {
			res.render('heroDetail', {
				nav,
				hero: res.hero
			});
		});

	return heroRoutes;
}

module.exports = router;
