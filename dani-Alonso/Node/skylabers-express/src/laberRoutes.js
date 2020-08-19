const express = require('express');

const debug = require('debug')('app:laberRoutes');

const laberRoutes = express.Router();

const sql = require('mssql');

function router() {
	laberRoutes.route('/').get((req, res) => {
		(async function query() {
			const request = new sql.Request();
			try {
				const { recordset } = await request.query('SELECT * FROM skylabers');
				res.render('laberList', { title: 'SkyLabers', labers: recordset });
			} catch (error) {
				debug(error);
			}
		})();
	});
	laberRoutes.route('/dashboard').get((req, res) => {
		(async function query() {
			const request = new sql.Request();
			try {
				const { recordset } = await request.query('SELECT * FROM skylabers');
				res.render('laberDashboard', {
					title: 'SkyLabers',
					labers: recordset.slice(0, 4)
				});
			} catch (error) {
				debug(error);
			}
		})();
	});

	laberRoutes
		.route('/labers/:laberId')
		.all((req, res, next) => {
			const id = +req.params.laberId;

			(async function query() {
				try {
					const request = new sql.Request();
					const { recordset } = await request
						.input('id', sql.Int, id)
						.query(`SELECT * from skylabers WHERE id=@id`);
					[res.labers] = recordset;
					next();
				} catch (error) {
					debug(error.stack);
				}
			})();
		})

		.get((req, res) => {
			res.render('laber-detail', {
				labers: res.labers
			});
		});
	return laberRoutes;
}
module.exports = router;
