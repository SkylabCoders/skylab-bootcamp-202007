const express = require('express');

const debug = require('debug')('app:authRoutes');

const authRoutes = express.Router();

const dbUrl = 'mongodb://localhost:27017'

const PasswordValidator = require('password-validator');

const { MongoClient } = require('mongodb');

const passport = require('passport');

const schema = new PasswordValidator();
schema
    .is().min(8)                                    // Minimum length 8
    .is().max(12)                                  // Maximum length 100
    .has().uppercase()                              // Must have uppercase letters
    .has().lowercase()                              // Must have lowercase letters
    .has().digits(1)                                // Must have at least 2 digits
    .has().not().spaces()
    .has().symbols();
const dbName = 'shieldHeroes';
const collectionName = 'users';
let client;

function router(nav) {
    authRoutes
        .route('/')
        .post(passport.authenticate('local', {
            successRedirect: '/auth/profile',
            failureRedirect: '/auth/register'
        }))
        .get((req, res) => {
            res.render('auth/auth-login', { nav, title: 'Log-in' })
        })

    authRoutes
        .route('/register')
        .post((req, res) => {
            const newUser = {
                ...req.body,
                user: req.body.user.toLowerCase()
            };
            (async function mongo() {
                try {
                    client = await MongoClient.connect(dbUrl)
                    const db = client.db(dbName);
                    const collection = db.collection(collectionName);
                    const user = await collection.findOne({ user: newUser.user });
                    debug(user)
                    debug(newUser.password)
                    if (user) {
                        res.render('auth/auth-login', { nav })
                    }
                    else if (schema.validate(newUser.password)) {

                        const result = await collection.insertOne(newUser);
                        req.login(result.ops[0], () => {
                            res.redirect('profile');
                        });
                    } else {

                        res.redirect('register')
                    }
                } catch (error) {
                    debug(error.stack)
                } finally {
                    client.close()
                }
            })();
        })
        .get((req, res) => {
            res.render('auth/register', { nav, title: 'Register' })
        });
    authRoutes
        .route('/logout')
        .get((req, res) => {
            req.logout();
            res.redirect('/');
        });
    authRoutes
        .route('/profile')
        .all((req, res, next) => {
            if (req.user) {
                next();
            } else {
                res.redirect('/auth')
            }
        })
        .get((req, res) => {
            res.render('auth/profile', { nav, user: req.user })
        })
        .post((req, res) => {
            const newPass = req.body;
            debug(newPass);
            (async function mongo() {
                try {
                    client = await MongoClient.connect(dbUrl)
                    const db = client.db(dbName);
                    const collection = db.collection(collectionName);

                    debug(newPass.password);
                    if (schema.validate(newPass.password)) {
                        await collection.updateOne({ user: newPass.user }, { $set: { password: newPass.password } }, function (err, res) {
                            if (err) throw err;
                        }
                        )
                        res.redirect('profile');
                    } else {

                        res.send('cannot update pass, doesnt acomplish with password requeriments')
                    }
                } catch (error) {
                    debug(error.stack)
                } finally {
                    client.close()
                }
            })();
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
