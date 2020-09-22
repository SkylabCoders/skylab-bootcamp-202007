const express = require('express');
const debug = require('debug')('app:authRoutes');
const { MongoClient } = require('mongodb');
const passport = require('passport');

const authRoutes = express.Router();
const dbUrl = 'mongodb://localhost:27017';
const dbName = 'shieldHeroes';
const collectionName = 'users';
let client;

function router(nav) {
	/**
	 * GET signin
	 * Mostrar un formulario con dos controles (user/password)
	 *
	 * POST signin
	 * Comprobar que el uuario y el password existen en la DDBB juntos
	 * SI existe, redirecciono a profile
	 * NO existe, respondo con información que mejore la UX
	 *
	 *
	 *
	 * GET signup
	 * Mostrar un formulario con dos controles (user/password)
	 *
	 * POST signup
	 * Insertar los datos en la base de datos
	 * SI inserta, redirecciono a profile
	 * NO inserta, respondo con información que mejore la UX
	 *
	 *
	 *
	 * POST signout
	 * Limpio toda la información de autenticación de usuario
	 * y redireciono a la raiz ('/')
	 *
	 *
	 *
	 * GET profile
	 * Mostrar la información del perfile de usuario
	 *
	 * POST profile
	 * Insertar los datos en la base de datos
	 * SI inserta, redirecciono a profile
	 * NO inserta, respondo con información que mejore la UX
	 */

	authRoutes
		.route('/signin')
		.get((req, res) => {
			res.render('auth/signin', { nav });
		})
		.post(
			passport.authenticate('local', {
				successRedirect: '/auth/profile',
				failureRedirect: '/auth/signin'
			})
		);

	authRoutes
		.route('/signup')
		.get((req, res) => {
			res.render('auth/signup', { nav });
		})
		.post((req, res) => {
			const newUser = {
				...req.body,
				user: req.body.user.toLowerCase()
			};

			(async function mongo() {
				try {
					client = await MongoClient.connect(dbUrl);
					const db = client.db(dbName);
					const collection = await db.collection(collectionName);

					const user = await collection.findOne({ user: newUser.user });
					if (user) {
						res.redirect('/auth/signin');
					} else {
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

	authRoutes.route('/signout').post((req, res) => {
		res.send('POST signout works !');
	});

	authRoutes
		.route('/profile')
		.all((req, res, next) => {
			if (req.user) {
				next();
			} else {
				res.redirect('/auth/signin');
			}
		})
		.get((req, res) => {
			res.render('auth/profile', { nav, user: req.user });
		})
		.post((req, res) => {
			res.send('POST profile works !');
		});

	return authRoutes;
}

module.exports = router;
