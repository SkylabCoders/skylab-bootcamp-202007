const express = require('express');
const debug = require('debug');
const sql = require('mssql');

const skylabersRoutes = express.Router();

function router(nav) {
	skylabersRoutes.route('/').get((req, res) => {
		(async function query() {
			try {
				const request = new sql.Request();
				let { recordset } = await request.query(`SELECT * FROM skylabers`);
				const orderDesc = (skylaber1, skylaber2) => {
					let result = 0;
					if (skylaber1.challenges > skylaber2.challenges) {
						result = -1;
					} else if (skylaber1.challenges < skylaber2.challenges) {
						result = 1;
					}
					return result;
				};
				recordset = recordset.sort(orderDesc);
				res.render('dashboard', {
					nav,
					title: 'Top Skylabers',
					skylabers: recordset.slice(0, 4)
				});
			} catch (error) {
				debug(error.stack);
			}
		})();
	});

	skylabersRoutes
		.route('/skylabers')
		.get((req, res) => {
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
		})
		.post((req, res, next) => {
			const id = +req.params.skylaberId;
			(async function query() {
				try {
					const request = new sql.Request();
					const { recordset } = await request
						.input('id', sql.Int, id)
						.query(`delete * FROM skylabers WHERE id=@id`);
					next();
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
