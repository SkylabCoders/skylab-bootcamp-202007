const express = require('express');
const debug = require('debug')('app:heroRoutes');
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
					// hacemos una petición, una función asincrona, a sql
					const request = new sql.Request();
					const { recordset } = await request
						// el input desglosa las variables dentro del query, 'id' es un valor de sql entero, que corresponde a id. el primer 'id' lo añadimos al quero con @__
						.input('id', sql.Int, id)
						// Si quisieramos añadir otro input pondriamos lo siguiente
						// .input ('name', sql.Int, name)
						// y en un sólo query podriamos concatenar de la siguiente forma
						// .query(`SELECT * FROM heroes WHERE id= @id and name = @name`);

						.query(`SELECT * FROM heroes WHERE id= @id`);
					// el res.hero es un array destructuring que apunta al primer valor de recordset
					[res.hero] = recordset;
					// Tenemos que poner el next() porque sino la pagina se queda cargando y no termina, tenemos que emitir el evento para que el siguiente, el get lo capture y pase al siguiente
					next();
				} catch (error) {
					debug(error.stack);
				}
			})();
		})
		.post()
		.get((req, res) => {
			res.render('heroDetail', {
				nav,
				hero: res.hero
			});
		});

	return heroRoutes;
}

module.exports = router;
