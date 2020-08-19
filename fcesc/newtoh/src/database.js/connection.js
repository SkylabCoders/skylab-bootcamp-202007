const express = require('express');
const sql = require('mssql');
const { dbAzure, dbMongo } = require('./../config/DATABASE');

const server = express();

function connectAzure(){
  sql.connet(dbAzure).catch(debug);
  server.all((req, res)=>{
    (async function queryAll(){
      try{
        const request = new sql.Request();
        const { recordset } = await request.query(`SELECT * FROM heroes WHERE id=${id}`);
        [ res.hero ] = recordset; // sólo el primero
      } catch (error) {
        debug(error.stack);
      }
    })()
  });
  // .put .delete .get 
  server.get((req, res) => {
    res.render('stuff', {props});
  })
}

async function connectMongo(){
  const uri = dbMongo;
  const client = new MongoClient(uri);
  try {
      // Connect to the MongoDB cluster
      await client.connect();
      // Make the appropriate DB calls
      await listDatabases(client);
  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
}


connectAzure().catch(debug);
connectMongo().catch(debug);