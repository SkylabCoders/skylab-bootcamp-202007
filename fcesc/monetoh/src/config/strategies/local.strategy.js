const passport = require('passport');
const { Strategy } = require('passport-local');
const { MongoClient } = require('mongodb');
const DATABASE_CONFIG = require('../../database/DATABASE_CONFIG');
const debug = require('debug')('app:local.strategy');

function localStrategy(){ // en la vista hay que tener claro el nam del input
  passport.use(new Strategy(
    {
      usernameField: 'signin__name',
      passwordField: 'signin__password'
    }, 
    (userName, password, done)=>{ // el middleware escribe en la request después de verificar en la db
    let client;

    (async function checkUserIntoDb(){
      try{
        client = await MongoClient.connect(DATABASE_CONFIG.url);
        const db = client.db(DATABASE_CONFIG.dbName);
        const collection = db.collection(DATABASE_CONFIG.userCollection);
        const user = await collection.findOne({ username: userName });
  
        if(user.password === password){
          done(null, user);
        } else {
          done(null, false);
        }
      } catch (error) {
        debug(error.stack);
      }

      client.close();
    })();

  }))
}

module.exports = localStrategy();