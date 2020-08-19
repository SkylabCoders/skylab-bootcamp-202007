const express = require('express');
const debug = require('debug')('app: skylaberRoutes');
const sql = require('mssql');

const skylaberRoutes = express.Router();

function router(nav) {
    skylaberRoutes.route('/').get((req, res) => {

        (async function query() {
            const request = new sql.Request();

            try {
                const { recordset } = await request.query('SELECT * FROM skylabers WHERE id=1 OR id=5 OR id=8 OR id=14')

                res.render('dashboard', {
                    nav,
                    title: 'My Homies',
                    skylabers: recordset
                });

            } catch (error) {
                debug(error.stack);
            }
        })()
    });

    skylaberRoutes.route('/skylabers').get((req, res) => {

        (async function query() {
            const request = new sql.Request();

            try {
                const { recordset } = await request.query('SELECT * FROM skylabers');

                res.render('skylabers', {
                    nav,
                    title: 'Skylabers',
                    skylabers: recordset
                });

            } catch (error) {
                debug(error.stack);
            }
        })();


    });

    skylaberRoutes.route('/skylabers/:skylaberId')
        .all((req, res, next) => {

            const id = +req.params.skylaberId;


            (async function query() {
                try {
                    const request = new sql.Request();
                    const { recordset } = await request
                        .input('id', sql.Int, id)
                        .query(
                            `SELECT * FROM skylabers WHERE id= @id`);
                    [res.skylaber] = recordset;
                    next();
                } catch (error) {
                    debug(error.stack);
                }
            })();
        })
        .get((req, res) => {
            res.render('sky-detail', { nav, skylaber: res.skylaber });
        });



    return skylaberRoutes;
}

module.exports = router;

