// local strategy que es usuario y contraseña
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
                const mongoUrl = 'mongodb+srv://admin:1234Abcd!@cluster0.vdzqh.mongodb.net/mongoProducts?retryWrites=true&w=majority';
                const dbName = 'mongoProducts';
                // creamos nueva colección users
                const collectionName = 'users';
                (async function mongo() {
                    try {
                        client = await MongoClient.connect(mongoUrl);
                        const db = client.db(dbName);
                        const collection = db.collection(collectionName);
                        const user = await collection.findOne({ user: username });
                        if (user && user.password === password) {
                            done(null, user);
                        } else {
                            done(null, false);
                        }
                    } catch (error) {
                        debug(error.stack);
                    }
                    client.close();
                })();
            }
        )
    );
}
module.exports = localStrategy();
 