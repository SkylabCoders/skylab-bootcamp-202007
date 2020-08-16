const express = require('express');
const sql = require('mssql');

const debug = require('debug')('app:bookRoutes');

const bookRouter = express.Router();

function router(nav) {
	bookRouter.route('/').get((req, res) => {
		(async function query() {
			const request = new sql.Request();
			try {
				const { recordset } = await request.query('SELECT * FROM books');

				res.render('bookListView', {
					nav,
					title: 'Library',
					books: recordset
				});
			} catch (err) {
				debug(err.stack);
			}
		})();
	});

	bookRouter
		.route('/:id')
		.all((req, res, next) => {
			const { id } = req.params;

			(async function query() {
				const request = new sql.Request();
				try {
					const { recordset } = await request
						.input('id', sql.Int, id)
						.query('SELECT * FROM books WHERE id = @id');
					[res.book] = recordset;
					next();
				} catch (err) {
					debug(err.stack);
				}
			})();
		})
		.get((req, res) => {
			res.render('bookView', {
				nav,
				title: 'Library',
				book: res.book
			});
		});
	return bookRouter;
}

module.exports = router;
