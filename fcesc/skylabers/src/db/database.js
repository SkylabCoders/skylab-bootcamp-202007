const express = require('express');
const sql = require('mssql');
const db = require('./../../config/DATABASE_CONFIG');
const debug = require('debug');

sql.connect(db).catch(debug);
const request = new sql.Request();

async function query(){
  try{
    console.log('ENTERING DB CONNECTION CALL');
    const recordset = await request.query('SELECT * FROM dbo.skylabers');
    console.log('AQUI',recordset);
    res.recordset = recordset;
    console.log('RECORDSET', recordset);
    return  recordset;
  } catch (error) {
    console.log('ESTOY EN EL CATCH', error.stack);
  }
};

query();


