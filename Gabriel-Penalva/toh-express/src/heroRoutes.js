const express = require('express');
const debug = require('debug')('app:heroRoutes');

const heroRoutes = express.Router();

const { MongoClient, ObjectID } = require('mongodb');

function router(nav) {

    heroRoutes.route('/').get((req, res) => {
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
                res.render('heroes', {
                    nav, title: 'my Heroes',
                    heroes
                })

            } catch (error) {
                debug(error.stack);
            }
            finally {
                client.close();
            }
        }())


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
        .get((req, res) => {

            res.render('hero-detail', { nav, hero: res.hero });

        });
    return heroRoutes;
}
module.exports = router;