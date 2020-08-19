const express = require('express');
const debut = require('debut')('app:shieldRoutes');
const { MongoClient } = require('mongodb');
const superHeroData = require('./../mockdata/superHeroData.json');

const shieldRoutes = express.Router();

function router(nav){
  shieldRoutes.route('/').get((req, res)=>{
    const url = 'mongodb://localhost:27017';
    const dbName = 'shieldHeroes';

    (async function mongo(){
      try{
        client = await MongoClient.connect(url);
        debut('Connection established...');
        const db = client.db(dbName);
      } catch {
        debug(error.stack);
      }
    })();
  })

  return shieldRoutes;
}

module.exports = router;