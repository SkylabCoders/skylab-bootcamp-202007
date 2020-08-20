const express = require('express');
const debug = require('debug')('app:authRoutes');
const { MongoClient } = require('mongodb');
const DATABASE_CONFIG = require('./../database/DATABASE_CONFIG');
const ROUTES = require('./ROUTES');

const authRoutes = express.Router();

function router(){
  authRoutes
    .route('/auth')
    .get((req, res)=>{
      (async function auth(){
        
      })();
    })
}



module.export = router;
