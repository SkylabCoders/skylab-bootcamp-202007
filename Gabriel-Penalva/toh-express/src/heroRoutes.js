const express = require('express');
const debug = require('debug')('app:heroRoutes');

const heroRoutes = express.Router();
const sql = require('mssql');

function router(nav) {

    heroRoutes.route('/').get((req, res) => {
        (async function query() {
            const request = new sql.Request();
            try {
                const { recordset } = await request.query('SELECT * FROM Heros');
                res.render('heroes', { nav, title: 'my Heroes', heroes: recordset });
            } catch (error) {
                debug(error);
            }
        }())


    });
    heroRoutes
        .route('/:heroid')
        .all((req, res, next) => {
            const ID = +req.params.heroid;
            (async function query() {
                try {
                    const request = new sql.Request();
                    const { recordset } = await request
                        .input('id', sql.Int, ID)
                        .query(`SELECT * FROM Heros WHERE id = @id`);
                    [res.hero] = recordset
                    next();
                } catch (error) {
                    debug(error);
                }
            }())
        })
        .get((req, res) => {

            res.render('hero-detail', { nav, hero: res.hero });

        });
    return heroRoutes;
}
module.exports = router;