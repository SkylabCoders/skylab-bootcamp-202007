const express = require('express');
const debug = require('debug')('app:heroRoutes');
const { MongoClient } = require('mongodb');
const DATABASE_CONFIG = require("../database/DATABASE_CONFIG");
const ROUTES = require('./ROUTES');

const dashboardRoutes = express.Router();

function router(nav) {
	dashboardRoutes
		.route('/')
		.all((req, res, next)=>{
      if(req.user) {
        next();
      } else {
        res.redirect(ROUTES.signin.path);
      }
    })
		.get((req, res) => {
			let client;
			(async function query() {
				try {
					client = await MongoClient.connect(DATABASE_CONFIG.url);
					debug('Connection stablished...');

					const db = client.db(DATABASE_CONFIG.dbName);
					const colection = db.collection(DATABASE_CONFIG.heroCollection);
					const heroes = await colection.find().limit(4).toArray();

					res.render('index', {
						nav,
						body: ROUTES.dashboard.page,
						title: ROUTES.dashboard.title,
						heroes,
						ROUTES
					});
				} catch (error) {
					debug(error.stack);
				}
			})();
		});

	return dashboardRoutes;
}

module.exports = router;
