const express = require('express');
// const debug = require('debug')('app:authRoutes');
const { MongoClient } = require('mongodb');
const passport = require('passport')

const authRoutes = express.Router(); // Router es un objeto que permite a express conectar las rutas de las request con los template de una manera ordenada. COnecta una url(fragmento de ruta) con un componente(o template)
const dbUrl = 'mongodb://localhost:27017'
const dbName = 'shieldHeroes';
const collectionName = 'user';
let client;

// function onSigninSuccess(req, res, user, url) {
//     req.login(user, () => {
//         res.redirect(url)
//     });
// }

function router(nav) {

    authRoutes.route('/signin')
        .get((req, res) => {
            res.render('signin', { nav }) // {} es el objeto que contiene la informacion que queremos renderizar, en este caso la info de nav
        })
        .post(passport.authenticate('local', {
            successRedirect: '/auth/profile',
            failedRedirect: '/auth/signin'
        }))

    authRoutes.route('/signup')
        .get((req, res) => {
            res.render('signup', { nav })
        })
        .post((req, res) => {
            const newUser = {
                ...req.body,
                user: req.body.user.toLowerCase()
            };

            (async function mongo() {
                client = await MongoClient.connect(dbUrl);
                const db = client.db(dbName);
                const collection = await db.collection(collectionName)


                // buscar si el usuario existe
                const user = await collection.findOne({ user: newUser.user });

                if (user) {
                    // si existe
                    // onSigninSuccess(req, res, user, '/auth/profile')
                    res.redirect('/auth/signin')

                } else {
                    // si NO existe
                    const result = await collection.insertOne(newUser)
                    req.login(result.ops[0], () => {
                        res.redirect('/auth/profile');
                    })
                    // res.login(result.ops[0], () => {     // metodo de passport (npm i passport)
                    //     res.redirect('/auth/profile');
                    // o...
                    // onSigninSuccess(req, res, result.ops[0], '/auth/profile')


                }
            })();

        });


    authRoutes.route('/signout').get((req, res) => {
        res.send('Post Sign Out Works')
    })

    authRoutes.route('/profile')
        .all((req, res, next) => {
            if (req.user) {
                next();                 // pasa al .get
            } else {
                res.redirect('/auth/signin');
            }
        })
        .get((req, res) => {
            res.render('profile', { nav, user: req.user })
        })
        .post((req, res) => {
            res.send('Post profile works!')
        });


    return authRoutes;
}


module.exports = router;





