const express = require('express');
const debug = require('debug')('app:authRoutes');
const { MongoClient } = require('mongodb');
const passport = require('passport');
const authRoutes = express.Router();
const dbUrl = 'mongodb://localhost:27017';
const dbName = 'organics';
const collectionName = 'users';
let client;
function router(nav) {
    authRoutes
        .route('/signIn')
        .get((req, res) => {
            res.render('auth/signIn', { nav }); //no es destructuring, es un objeto con la prop nav con valor nav
        })
        .post(
            passport.authenticate('local', {
                successRedirect: '/auth/profile',
                failureRedirect: '/auth/signIn'
            })
        );
    authRoutes
        .route('/signOut')
        .get((req, res) => {
            req.logout;
            res.render('auth/signOut', { nav });
        })
    authRoutes
        .route('/signUp')
        .get((req, res) => {
            res.render('auth/signUp', { nav });
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
                    //hay q buscar si el user ya existe
                    const user = await collection.findOne({ user: newUser.user });
                    if (user) {

                        res.redirect('/auth/signIn');
                    } else {
                        const result = await collection.insertOne(newUser);
                        req.login(result.ops[0], () => {
                            console.log('esta es la nuestra', res)
                            res.redirect('/auth/profile');
                        });
                    }
                } catch (error) {
                    debug(error.stack);
                }
                client.close();
            })();
        });
    authRoutes.route('/signOut').post((req, res) => {
        res.send('Hi, signIn');
    });
    authRoutes
        .route('/profile')
        .all((req, res, next) => {
            if (req.user) {
                next();
            } else {
                res.redirect('/auth/signIn');
            }
        })
        .get((req, res) => {
            res.render('auth/profile', { nav, user: req.user });
        })
        .post((req, res) => {
            res.send('post profile works');
        });
    return authRoutes;
}
module.exports = router;