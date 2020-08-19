const express = require('express');
const debut = require('debut')('app:shieldRoutes');
const { MongoClient } = require('mongodb');
const superHeroData = require('./../mockdata/superHeroData.json');

const shieldRoutes = express.Router();

function router(nav){
  shieldRoutes.route('/').get((req, res)=>{
    res.send('Shield mola más que cualquier otra empresa de super heroes...');
  })
  return shieldRoutes;
}

module.exports = router;