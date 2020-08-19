const express = require('express');
const debug = require('debug')('app: heroRoutes');
const sql = require('mssql');

const heroRoutes = express.Router();

function router(nav) {
	heroRoutes.route('/').get((req, res) => {
		(async function query() {
			try {
				const request = new sql.Request();
				const { recordset } = await request.query('SELECT * FROM heroes');
				res.render('list', {
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
					const { recordset } = await request.input('id', sql.Int, id).query(
						`SELECT * FROM heroes where id = @id`
						/* 					const { recordset } = await request.query(
						`SELECT * FROM heroes where id = ${id}` */ // input for typing with @
					);
					[res.hero] = recordset;
					next();
				} catch (error) {
					debug(error.stack);
				}
			})();
		})

		.get((req, res) => {
			res.render('hero', {
				nav,
				hero: res.hero
			});
		});

	return heroRoutes;
}

module.exports = router;

/* app.get('/heroes', (req, res) => {
	res.render('list', {
		nav,
		title: 'My Heroes',
		heroes
	});
});

app.get('/heroes/:heroId', (req, res) => {
	res.render('hero', { nav, heroes: heroes[0] });
}); */

/* .delete()
.post() // update
.put() // create */
