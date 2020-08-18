const express = require('express');
const debug = require('debug')('app:heroRoutes');
const sql = require('mssql');

const skylaberRoutes = express.Router();

function router(nav) {
	skylaberRoutes.route('/').get((req, res) => {
		(async function query() {
			const request = new sql.Request();
			try {
				const { recordset } = await request.query('SELECT * FROM skylabers');
				res.render('skylabers', {
					nav,
					title: 'Tour Skylabers',
					skylabers: recordset
				});
			} catch (error) {
				debug(error.stack);
			}
		})();
	});
	skylaberRoutes
		.route('/:heroId')
		.all((req, res, next) => {
			const id = +req.params.heroId;
			(async function query() {
				try {
					const request = new sql.Request();
					const { recordset } = await request
						.input('id', sql.Int, id)
						.query(`SELECT * FROM skylabers WHERE id = ${id}`);
					[res.skylaber] = recordset;
					next();
				} catch (error) {
					/* debug(error.stack); */
					console.log(error);
				}
			})();
		})
		.get((req, res) => {
			res.render('skylaberDetail', {
				nav,
				skylaber: res.skylaber
			});
		});

	return skylaberRoutes;
}

module.exports = router;
