const express = require('express');
const debug = require('debug')('app:authRoutes');

const authRoutes = express.Router();
const dbUrl = 'mongodb://localhost:27017'

const { MongoClient } = require('mongodb');

const dbName = 'shieldHeroes';
const collectionName = 'users';
let client;

function router(nav) {
    authRoutes
        .route('/')
        .post((req, res) => {
            res.json(req.body)
            debug(req.body)

        })
        .get((req, res) => {
            res.render('auth/auth-login', { nav, title: 'Log-in' })
        });

    authRoutes
        .route('/register')
        .post((req, res) => {
            const newUser = {
                ...req.body,
                user: req.body.user.toLowerCase()
            };
            (async function mongo() {

                client = await MongoClient.connect(dbUrl)
                const db = client.db(dbName);
                const collection = await db.collection(collectionName);
                const user = await collection.findOne({ user: newUser.user });
                debug(user)
                if (user) {
                    res.render('auth/auth-login', { nav })
                }
                else {
                    await collection.insertOne(newUser);
                    res.render('auth/profile', { nav });
                }
            })();
        })
        .get((req, res) => {
            res.render('auth/register', { nav, title: 'Register' })
        });
    authRoutes
        .route('/singout')
        .post((req, res) => {
            res.send('post Sing out')
            debug(req.body)
        })


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
	 * GET signup
	 * Mostrar un formulario con dos controles (user/password)
	 *
	 * POST signup
	 * Insertar los datos en la base de datos
	 * SI inserta, redirecciono a profile
	 * NO inserta, respondo con información que mejore la UX
	 *
     * POST signout
     * Limpio toda la información de autenticación de usuario
     * y redireciono a la raiz ('/')
	 *
	 * GET profile
	 * Mostrar la información del perfile de usuario
	 *
	 * POST profile
	 * Insertar los datos en la base de datos
	 * SI inserta, redirecciono a profile
	 * NO inserta, respondo con información que mejore la UX
	 */

    return authRoutes
}
module.exports = router;
