const express = require('express');
const debug = require('debug')('app:heroRoutes');
const { MongoClient, ObjectID } = require('mongodb');
const DATABASE_CONFIG = require("../database/DATABASE_CONFIG");

const removeDuplicatesRoutes = express.Router();

function router() {
	removeDuplicatesRoutes
		.route('/removeDuplicates')
		.post((req, res) => {
      (async function removeDuplicatesFromDatabase(){
        let client;
        try{
          client = await MongoClient.connect(DATABASE_CONFIG.url);
          debug('Connection to db established...');
          const db = client.db(DATABASE_CONFIG.dbName);
          const collection = db.collection(DATABASE_CONFIG.collection);
          const allRecords = await collection.find().toArray();
          
          console.log('SHOWING ALL RECORDS, REGISTER 0: ', allRecords[0]);

          for ( let record of allRecords ){
            let thisRecord = await collection.findOne({ id: record.id });
            let duplicates = await collection.find({ id: record.id });
            await collection.deleteMany( duplicates );
            await collection.insertOne( thisRecord );
          }
        } catch (error) {
          debug(error.stack);
        }
        debug('Connection to db closed.');
        client.close();
      })();
      res.redirect(`/heroes`);
    })
    
}

module.exports = router;