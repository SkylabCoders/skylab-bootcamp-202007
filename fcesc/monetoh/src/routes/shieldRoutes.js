const express = require('express');
const debug = require('debug')('app:shieldRoutes');
const { MongoClient } = require('mongodb');
const superHeroes = require('../../public/mocks/superHeroData.json');
const DATABASE_CONFIG = require("../database/DATABASE_CONFIG");

const shieldRoutes = express.Router();

function router() {
	shieldRoutes
		.route('/')
		.all((req, res, next)=>{
      if(req.user) {
        next();
      } else {
        res.redirect(ROUTES.signin.path);
      }
    })
		.get((req, res) => {

		(async function mongo() {
			let client = null;

			try {
				client = await MongoClient.connect(DATABASE_CONFIG.url);
				debug('Connection stablished...');

				const db = client.db(DATABASE_CONFIG.dbname);
				const response = await db.collection(DATABASE_CONFIG.heroCollection).insertMany(superHeroes);
				res.json(response);
			} catch (error) {
				debug(error.stack);
      }
      
			client.close();
    })();
    res.send('cargando heroes');
	});
	return shieldRoutes;
}

module.exports = router;