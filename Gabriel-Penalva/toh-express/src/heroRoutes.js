const express = require('express');
const debug = require('debug')('app:heroRoutes');

const heroRoutes = express.Router();

const { MongoClient, ObjectID } = require('mongodb');

function router(nav) {

    heroRoutes
        .route('/')
        .all((req, res, next) => {
            const url = 'mongodb://localhost:27017';
            const dbname = 'shieldHeroes';
            let client;
            (async function query() {
                try {
                    client = await MongoClient.connect(url);
                    debug('connection stablished')
                    const db = client.db(dbname);
                    const collection = await db.collection('heroes');
                    const heroes = await collection.find().toArray();
                    res.heroes = heroes;
                    next();

                } catch (error) {
                    debug(error.stack);
                }
                finally {
                    client.close();
                }
            }())
        })
        .post((req, res) => {
            const newValues = req.body.id;
            debug(newValues);
            const url = 'mongodb://localhost:27017';
            const dbName = 'shieldHeroes';
            const collectionName = 'heroes';
            let client;
            (async function quer() {
                try {
                    client = await MongoClient.connect(url);
                    debug('connection stablished')
                    const db = client.db(dbName);
                    const collection = await db.collection(collectionName);
                    await collection.deleteOne({ _id: new ObjectID(newValues) }, (error) => {
                        if (error) {
                            throw error;
                        }
                        res.redirect('/heroes');
                    });

                } catch (error) {
                    debug(error.stack);
                }
                finally {
                    client.close();
                }

            }())

        })
        .get((req, res) => {
            const { heroes } = res
            res.render('heroes', { nav, title: 'my Heroes', heroes })
        });


    heroRoutes
        .route('/:heroid')
        .all((req, res, next) => {
            const ID = req.params.heroid;
            const url = 'mongodb://localhost:27017';
            const dbname = 'shieldHeroes';
            let client;
            (async function query() {
                try {
                    client = await MongoClient.connect(url);
                    debug('connection stablished')
                    const db = client.db(dbname);
                    const collection = await db.collection('heroes');
                    const hero = await collection.findOne({ _id: new ObjectID(ID) });
                    res.hero = hero;
                    next();
                } catch (error) {
                    debug(error.stack);
                }
                finally {
                    client.close();
                }
            }())
        })
        .post((req, res) => {


            const newValues = { $set: req.body };
            const filter = { _id: new ObjectID(req.params.heroid) };
            const url = 'mongodb://localhost:27017';
            const dbName = 'shieldHeroes';
            const collectionName = 'heroes';
            let client;
            (async function mongo() {
                try {
                    client = await MongoClient.connect(url);
                    const db = client.db(dbName);
                    const collection = await db.collection(collectionName);
                    await collection.updateOne(filter, newValues, (error) => {
                        if (error) {
                            throw error;
                        }
                        res.redirect('/heroes');
                    })
                } catch (error) {
                    debug(error)
                } finally {
                    client.close();
                }
            }())
            debug(req.body);

        })
        .get((req, res) => {

            res.render('hero-detail', { nav, hero: res.hero });

        });
    return heroRoutes;
}
module.exports = router;