const express = require('express');
const debug = require('debug')('app:authRoutes');
const { MongoClient, ObjectId } = require('mongodb');

const authRouter = express.Router();
const dbUrl = 'mongodb://localhost:27017';
const dbName = 'shieldHeroes';
const collectionName = 'users';

let client;

function router(nav) {
	authRouter
		.route('/signin')
		.get((req, res) => {
			res.render('auth/signin', {
				// Le pasas como propiedades, ya que render recibe como 2o argumento un objeto con las propiedades que le quieres pasar
				nav
			});
		})
		.post((req, res) => {
			res.json(req.body);
		});
	authRouter
		.route('/signup')
		.get((req, res) => {
			res.render('auth/signup', {
				nav
			});
		})
		.post((req, res) => {
			const newUser = req.body;

			// Creamos coleccion y base de datos y inserimos este elemento
			(async function mongo() {
				client = await MongoClient.connect(dbUrl);
				const db = client.db(dbName);
				const collection = await db.collection(collectionName);
				// Buscar si el usuario existe,
				const user = await collection.findOne({
					user: newUser.user
				});
				if (!user) {
					// Si NO existe, redirecciono a signin
					await collection.insertOne(newUser);
				} else {
					// Si exist,
					res.redirect('/auth/signin');
				}
			})();
		});
	authRouter.route('/signout').post((req, res) => {
		res.render('auth/signout', {
			nav
		});
	});
	authRouter
		.route('/profile')
		.get((req, res) => {
			res.render('auth/profile', {
				nav
			});
		})
		.post((req, res) => {
			res.send('POST signin works!');
		});
	return authRouter;
}
module.exports = router;
