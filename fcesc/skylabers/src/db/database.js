const express = require('express');
const sql = require('mssql');
const db2 = require('./../../config/DATABASE_CONFIG');

sql.connect(db2).then(async ()=>{
  try{
    const request = new sql.Request();
    const recordset = await request.query('SELECT * FROM dbo.skylabers');
    console.log('RECORDSET', recordset);
  } catch (error) {
    console.log('ESTOY EN EL CATCH', error);
  }
});

