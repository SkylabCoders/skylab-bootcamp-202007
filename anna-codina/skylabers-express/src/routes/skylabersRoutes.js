const express = require('express');
const debug = require('debug');
const sql = require('mssql');

const skylabersRoutes = express.Router();

function router(nav) {
	skylabersRoutes.route('/').get((req, res) => {
		(async function query() {
			try {
				const request = new sql.Request();
				const { recordset } = await request.query(`SELECT * FROM skylabers`);
				res.render('dashboard', {
					nav,
					title: 'Top Skylabers',
					skylabers: recordset
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
				const { recordset } = await request.query(`SELECT * FROM skylabers`);
				res.render('list', {
					nav,
					title: 'Skylabers',
					skylabers: recordset
				});
			} catch (error) {
				debug(error.stack);
			}
		})();
	});
	skylabersRoutes.route('/skylabers/:skylaberId').all((req, res, next) => {
		const id = +req.params.skylaberId;
		(async function query() {
			try {
				const request = new sql.Request();
				const { recordset } = await request
					.input('id', sql.Int, id)
					.query(`SELECT * FROM skylabers WHERE id = @id`);
				[res.skylaber] = recordset;
				res.render('detail', {
					nav,
					skylaber: res.skylaber
				});
				next();
			} catch (error) {
				debug(error.stack);
			}
		})();
	});

	return skylabersRoutes;
}

module.exports = router;
