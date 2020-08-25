const express = require('express');
const debug = require('debug')('app:laberRoutes');

const laberRoutes = express.Router();
const sql = require('mssql');


function router(nav) {

    laberRoutes.route('/').get((req, res) => {
        (async function query() {
            const request = new sql.Request();
            try {
                const { recordset } = await request.query('SELECT * FROM skylabers');
                res.render('laberBoard', { title: 'SkyLabers', labers: recordset.slice(0, 4), nav });
            } catch (error) {
                debug(error);
            }
        }());
    });
    laberRoutes.route('/list').get((req, res) => {
        (async function query() {
            const request = new sql.Request();
            try {
                const { recordset } = await request.query('SELECT * FROM skylabers');
                res.render('laberList', { title: 'SkyLabers', labers: recordset, nav });
            } catch (error) {
                debug(error);
            }
        }());
    });
    laberRoutes.route('/staff').get((req, res) => {
        (async function query() {
            const request = new sql.Request();
            try {
                const { recordset } = await request.query('SELECT * FROM skylabers WHERE id IN (select laberid from staff)');
                res.render('laberList', { title: 'SkyLabers', labers: recordset, nav });
            } catch (error) {
                debug(error);
            }
        }());
    });
    laberRoutes
        .route('/laber/:laberid')
        .all((req, res, next) => {
            const ID = +req.params.laberid;
            (async function query() {
                try {
                    const request = new sql.Request();
                    const { recordset } = await request
                        .input('id', sql.Int, ID)
                        .query(`SELECT * FROM skylabers WHERE id = @id`);
                    [res.laber] = recordset
                    next();
                } catch (error) {
                    debug(error);
                }
            }())
        })
        .get((req, res) => {

            res.render('laberDetail', { nav, laber: res.laber });

        });

    return laberRoutes;

}
module.exports = router;