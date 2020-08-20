const express = require('express');
const debug = require('debug')('app:authRoutes');
const { MongoClient } = require('mongodb');
const DATABASE_CONFIG = require('./../database/DATABASE_CONFIG');
const ROUTES = require('./ROUTES');

const authRoutes = express.Router();

function router(){
  /*
  GET signin 
    (display a form requesting user and params)
  POST signin 
    (check user exists in db) 
    redirect to profile if successful
    send error message to UI if unsuccessful
    (this is authentication)

  GET singup 
    (display a form requesting user data)
  POST signup 
    (validate form and create user in db)
    redirect to profile if successful
    send error message to UI if unsuccessful

  GET profile 
    (dipslay user info)
  POST profile 
    (to update user profile)
    insert data into database if successful
    send error message to UI if unsuccessful

  GET signout 
    remove user session info
    redirect to home
  */
  authRoutes
    .route('/auth')
    .get((req, res)=>{
      (async function auth(){
        let client;
        try{
          client = await MongoClient.connect(DATABASE_CONFIG.url);
          const db = client.db(DATABASE_CONFIG.dbName);
          const collection = db.collection(DATABASE_CONFIG.collection);
        } catch (error) {
          debug(error.stack);
        }
      })();
    })
}



module.export = router;
