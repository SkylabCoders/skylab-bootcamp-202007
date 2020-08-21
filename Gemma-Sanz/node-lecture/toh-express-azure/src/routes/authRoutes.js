const express = require('express');
const debug = require('debug')('app:authRoutes');
const { MongoClient, ObjectId } = require('mongodb');
const passport = require('passport');

const authRouter = express.Router();
const dbUrl = 'mongodb://localhost:27017';
const dbName = 'shieldHeroes';
const collectionName = 'users';

let client;

function router(nav) {
	authRouter.route('/logout').post((req, res) => {
		if (req.user) {
			// req.logout() es una fn de passport que te limpia la sessión
			req.logout();
			res.redirect('/auth/signin');
		}
	});
	authRouter
		// La ruta que pponemos tiene que tener en cuenta la relativa, en este caso en index le decimos que es /auth
		.route('/signin')
		.get((req, res) => {
			// Aquí el get se complementa con el passport
			// La ruta del render se coge a partir de lo que continua el puerto del localhost
			res.render('auth/signin', {
				// Le pasas como propiedades, ya que render recibe como 2o argumento un objeto con las propiedades que le quieres pasar
				nav
			});
		})
		.post(
			passport.authenticate('local', {
				successRedirect: '/auth/profile',
				failureRedirect: '/auth/signin'
			})
		);
	authRouter
		.route('/signup')
		.get((req, res) => {
			res.render('auth/signup', {
				nav
			});
		})
		.post((req, res) => {
			// con esto nos aseguramos conevertir a lowercase el nombre i hacemos un destructuring que newUser almacene user
			const newUser = { ...req.body, user: req.body.user.toLowerCase() };

			// Creamos coleccion y base de datos y inserimos este elemento
			(async function mongo() {
				try {
					client = await MongoClient.connect(dbUrl);
					const db = client.db(dbName);
					const collection = await db.collection(collectionName);
					// Buscar si el usuario existe,
					const user = await collection.findOne({
						user: newUser.user
					});
					if (user) {
						// Tanto si existe como si no redirecciono a signin
						res.redirect('/auth/signin');
					} else {
						// Si NO existe inserto y redirecciono a profile
						const result = await collection.insertOne(newUser);
						req.login(result.ops[0], () => {
							res.redirect('/auth/profile');
						});
					}
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
		});
	authRouter.route('/signout').post((req, res) => {
		res.render('auth/signout', {
			nav
		});
	});
	authRouter
		.route('/profile')
		.all((req, res, next) => {
			// aqui llega la información de local.strategy, dónde passport pone la info dentro de req.user
			if (req.user) {
				next();
			} else {
				res.redirect('/auth/signin');
			}
		})
		.get((req, res) => {
			res.render('auth/profile', {
				nav,
				user: req.user
			});
		})
		.post((req, res) => {
			//			debug('REQ.USER ======>', req.user); tiene la info de password

			//			debug('REQ.BODY ======>', req.body); tiene user, _id and passwor
			(async function mongo() {
				try {
					// Destructuramos todo y sólo nos quedamos con _id
					const { _id } = req.user;
					const { password } = req.body;
					client = await MongoClient.connect(dbUrl);
					const db = client.db(dbName);
					const collection = await db.collection(collectionName);
					await collection.updateOne(
						{
							_id: ObjectId(_id)
						},
						{ $set: { password } }
					);
				} catch (error) {
					debug(error.stack);
				}
				client.close();
			})();
			res.send('POST login works!');
			debug(req.user);
		});
	return authRouter;
}
module.exports = router;
