const express = require('express');
const debug = require('debug')('app:heroRoutes');
const sql = require('mssql');
const skylabRoutes = express.Router();
const request = new sql.Request();
function router(nav) {
    skylabRoutes
        .route('/')
        .all((req, res, next) => {
            (async function query() {
                try {
                    const { recordset } = await request.query('SELECT * FROM skylabers');
                    res.recordset = recordset;
                    debug(recordset);
                    next();

                } catch (error) {
                    debug(error.stack);
                }

            }());
        })
        .get((req, res) => {
            res.render('SkylaberList', {
                title: 'SkylabberList',
                nav,
                skylabbers: res.recordset
            });
        });

    skylabRoutes.route('/:skylaberId').get((req, res) => {
        res.render('SkylaberDetails');
    });


    return skylabRoutes;
}
module.exports = router;