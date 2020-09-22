const express = require('express');
const sql = require('mssql');
const debug = require('debug')('app:routes');

const skylabrouter = express.Router();
const request = new sql.Request();

function appRouter (){
  skylabrouter
  .route('/')
  .all((req, res, next)=>{
    (async function query(){
      try{
        //const { recordset } = await request.query('SELECT * FROM skylabers');
        const { recordset } = [{id:1},{id:2},{id:3}];
        debug('AQUI',recordset);
        res.recordset = recordset;
        console.log('RECORDSET', recordset);
        next();
      } catch (error) {
        debug(error.stack);
      }
    })();
  })
  .get((req, res)=>{
    res.render('index.ejs', { skylabers: [{id:1},{id:2},{id:3}] });
  })
};

module.exports = appRouter;
