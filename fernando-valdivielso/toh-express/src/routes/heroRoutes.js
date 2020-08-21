const express = require('express');
const debug = require('debug')('app:heroRoutes');
const { MongoClient, ObjectID } = require('mongodb');
const { error } = require('console');


const heroRoutes = express.Router();
function router(nav) {
    heroRoutes.route('/').get((req, res) => {
        const url = 'mongodb://localhost:27017';
        const dbName = 'shieldHeroes'
        let client;
        (async function query() {
            try {
                client = await MongoClient.connect(url);
                debug('Connection stablished...')

                const db = client.db(dbName);

                const collection = await db.collection('heroes');
                const heroes = await collection.find().toArray();
                debug(heroes)
                res.render('heroes', {
                    nav,
                    title: 'My Heroes',
                    heroes
                });
            } catch (error) {
                debug(error.stack);
            }
        })();
    });

    heroRoutes
        .route('/:heroId')
        .all((req, res, next) => {    // requestHandler que recibe 3 argumentos
            const id = req.params.heroId;
            const url = 'mongodb://localhost:27017';
            const dbName = 'shieldHeroes';
            const collectionName = 'heroes';
            let client;
            (async function query() {
                try {
                    client = await MongoClient.connect(url);
                    debug('Connection stablished...');
                    const db = client.db(dbName);
                    const collection = await db.collection(collectionName);
                    res.hero = await collection.findOne({ _id: new ObjectID(id) });
                    next();
                } catch (error) {
                    debug(error.stack);
                }
                client.close();
            })();
        })
        .post((req, res) => {
            // conectar a mongodb, 
            // actualizar el hero con id: id
            // responder con la pagina actualizada
            // o responder redireccionando a la lista

            // capturar el error manteniendo la misma pagina
            const updateQuery = ({ $set: req.body });
            const filter = { _id: new ObjectID(req.params.heroId) };
            const url = 'mongodb://localhost://27017';
            const dbName = 'shieldHeroes';
            const collectionName = 'heroes';
            let client;  // cliente de sql

            (async function mongo() {
                try {
                    client = await MongoClient.connect(url);
                    const db = client.db(dbName);
                    const collection = await db.collection(collectionName);
                    await collection.updateOne(filter, updateQuery, (error, response) => {
                        if (error) {
                            throw error
                        }
                        res.redirect('/heroes')
                    });
                } catch (error) {
                    debug(error.stack);
                }
                client.close();
            }())


        })
        .get((req, res) => {
            res.render('hero-detail', {
                nav, hero: res.hero
            })
        })
    return heroRoutes;
}
module.exports = router;