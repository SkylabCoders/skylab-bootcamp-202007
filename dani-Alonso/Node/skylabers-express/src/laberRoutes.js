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
	laberRoutes.route('/staff').get((req, res) => {
		(async function query() {
			const request = new sql.Request();
			try {
				const { recordset } = await request.query(
					'SELECT * FROM skylabers WHERE staff.laberid = skylabers.id'
				);
				res.render('laberList', { title: 'SkyLabers', labers: recordset });
			} catch (error) {
				debug(error);
			}
		})();
	});
	return laberRoutes;
}
module.exports = router;
