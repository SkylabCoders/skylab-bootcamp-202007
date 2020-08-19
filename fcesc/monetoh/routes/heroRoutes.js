const express = require('express');
const debug = require('debug')('app:heroRoutes');
const { MongoClient } = require('mongodb');

const heroRoutes = express.Router();

function router(nav){
  heroRoutes.route('/')
    .get((req, res)=>{
      const url = 'mongodb://localhost:27017';
      const dbName = 'shieldHeroes';
      let client;
      (async function query(){
        try{
          client = await MongoClient.connect(url);
          debug('Connection established...');
          const db = client.db(dbName);
          const collection = await db.collection('heroes');
          const heroes = await collection.find().toArray();
          res.render('heroes', {
            nav,
            title: 'My Heroes',
            heroes: heroes
          })
        } catch (error) {
          debug(error.stack);
        }
      })
    })

  heroRoutes
    .route('/:heroId')
    .all((res, req, next) =>{
      next();
    })
    .get()
}