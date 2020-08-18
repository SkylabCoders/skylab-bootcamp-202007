const express = require('express');
const debug = require('debug')('app:heroRoutes');
const sql = require('mssql');

const skylaberRoutes = express.Router();

function router(nav) {
	skylaberRoutes.route('/').get((req, res) => {		
		(async function query(){
			const request = new sql.Request();
			try {
				const { recordset } = await request.query('SELECT * FROM skylabers');
				res.render('skylabers', {
					nav,
					title: 'Tour Skylabers',
					heroes: recordset
				});
			} catch (error) {
				debug(error.stack);
			}
		}());		
	});


	return skylaberRoutes;
}

module.exports = router;
