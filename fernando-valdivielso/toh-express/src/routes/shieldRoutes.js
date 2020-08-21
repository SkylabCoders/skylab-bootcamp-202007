// este componente crea la base de datos con la informacion del mock al meterse en localhost:3000 /shield

const express = require('express');
const debug = require('debug')('app:shieldRoutes');
const { MongoClient } = require('mongodb'); // hay que instalarlo -> npm i mongodb
const superHeroes = require('../../public/mocks/superHeroData.json')

const shieldRoutes = express.Router();  // que shieldRoutes sea una instancia de express.Router()

function router() {
    shieldRoutes.route('/').get((req, res) => {
        const url = 'mongodb://localhost:27017';
        const dbName = 'shieldHeroes';

        (async function mongo() {
            let client;

            try {
                client = await MongoClient.connect(url);  // creo el cliente y me conecto

                const db = client.db(dbName);
                const response = await db.collection('heroes').insertMany(superHeroes);
                debug(response);
                res.json(response);
            } catch (error) {
                debug(error.stack)
            }
            client.close(); // hay que cerrar la conexion de mongo (de linea 17)
        })();
        res.send('shield mola')
    });
    return shieldRoutes

}

module.exports = router


