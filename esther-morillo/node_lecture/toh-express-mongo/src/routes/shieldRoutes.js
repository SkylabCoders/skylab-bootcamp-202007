const express = require('express');
const debug = require('debug')('app:shieldRoutes');
const {
    MongoClient
} = require('mongodb');
const superHeroes = require('../../public/mocks/superHeroData.json');

// Que sea una instancia de express.Router
const shieldRoutes = express.Router();

// función que recibe nav y return shieldRoutes
function router() {

    // cuando alguien haga un get, acceda a esta ruta recibo dos objetos: req, res
    shieldRoutes.route('/').get((req, res) => {
        const url = 'mongodb://localhost:27017';
        const dbname = 'shieldHeroes';

        (async function mongo() {
            let client;

            try {
                client = await MongoClient.connect(url);
                debug('Connection stablished...')

                const db = client.db(dbname);
                // Insertar muchos superHeroes (MANY) 
                const response = await db.collection('heroes').insertMany(superHeroes);
                // veremos todo en la terminal
                debug(response);
                // sale el json en el navegador
                res.json(response);
                client.close();
            } catch (error) {
                debug(error.stack);
            }

            // cerramos conexión
        })();

        // Cuando yo haga npm start saldrá este mensaje en el navegador
        // res.send('Shield mola más que cualquier otra empresa de súper héroes')
    })
    return shieldRoutes;
}

module.exports = router;