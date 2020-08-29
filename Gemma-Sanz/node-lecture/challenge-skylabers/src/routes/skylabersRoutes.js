const express = require('express');
const debug = require('debug')('app:skylabersRoutes');
const sql = require('mssql');
const { restart } = require('nodemon');

const skylabersRoutes = express.Router();

function router(nav) {
	skylabersRoutes.route('/').get((req, res) => {
		(async function query() {
			try {
				const request = new sql.Request();
				const { recordset } = await request.query('SELECT * FROM skylabers');
				res.render('home', {
					nav,
					title: 'Top SSSSSSkylaberSSSSSS',
					skylabers: recordset.slice(0, 4)
				});
			} catch (error) {
				debug(error.stack);
			}
		})();
	});
	skylabersRoutes.route('/skylabers').get((req, res) => {
		(async function query() {
			try {
				const request = new sql.Request();
				const { recordset } = await request.query('SELECT * FROM skylabers');
				res.render('list', {
					nav,
					skylabers: recordset
				});
			} catch (error) {
				debug(error.stack);
			}
		})();
	});

	skylabersRoutes
		.route('/skylabers/:id')
		.all((req, res, next) => {
			const { id } = req.params;

			(async function query() {
				try {
					const request = new sql.Request();
					const { recordset } = await request
						.input('id', sql.Int, id)
						.query(`SELECT * FROM skylabers WHERE id = @id`);
					[res.skylaber] = recordset;
					next();
				} catch (error) {
					debug(error.stack);
				}
			})();
		})
		.get((req, res) => {
			res.render('details', { nav, skylaber: res.skylaber });
		});

	return skylabersRoutes;
}

module.exports = router;
