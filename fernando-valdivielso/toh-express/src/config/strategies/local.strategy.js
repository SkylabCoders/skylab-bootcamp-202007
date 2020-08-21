const passport = require('passport');
const { Strategy } = require('passport-local');
const { MongoClient } = require('mongodb');
const debug = require('debug')('app:local.strategy');

function localStrategy() {
    passport.use(
        new Strategy(
            {
                usernameField: 'user',
                passwordField: 'password'
            },
            (username, password, done) => {
                let client;
                const mongoUrl = 'mongodb://localhost:27017';
                const dbName = 'shieldHeroes';
                const collectionName = 'user';

                (async function mongo() {
                    try {
                        client = await MongoClient.connect(mongoUrl);
                        const db = client.db(dbName);
                        const collection = db.collection(collectionName);
                        debug(collection)
                        const user = await collection.findOne({ user: username });

                        if (user && user.password === password) {
                            done(null, user);
                        } else {
                            done(null, false);
                        }
                    } catch (error) {
                        debug(error.stack)
                    }
                    client.close();
                })();

                // buscar en la DDBB si existe el usuario

                // si esta logeado
                // done(null, user)

                // si no esta logeado
                // done(null, false)

                // req.user
            })
    )
}

module.exports = localStrategy();