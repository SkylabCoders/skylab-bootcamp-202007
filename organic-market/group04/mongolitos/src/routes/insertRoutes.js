const express = require('express');
const debug = require('debug')('app:shieldRoutes');
const { MongoClient } = require('mongodb');
const productsData = require('../../public/mocks/foodsData.json');

const insertRoutes = express.Router();

function router() {

    insertRoutes.route('/').get((req, res) => {
        const url = 'mongodb+srv://admin:1234Abcd!@cluster0.vdzqh.mongodb.net/mongoProducts?retryWrites=true&w=majority';
        const dbname = 'mongoProducts';

        (async function mongo() {
            let client;/*   */

            try {
                client = await MongoClient.connect(url);
                debug('Connection stablished...')

                const db = client.db(dbname);

                const response = await db.collection('products').insertMany(productsData);

                debug(response);

                res.json(response);
                client.close();
            } catch (error) {
                debug(error.stack);
            }

        })();
    })
    return insertRoutes;
}

module.exports = router;
