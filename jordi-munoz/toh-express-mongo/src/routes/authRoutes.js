const express = require('express');
const debug = require('debug')('app:authRoutes');
const { MongoClient, ObjectID } = require('mongodb');

const dbUrl = 'mongodb://localhost:27017';
const passport = require('passport');

const authRoutes = express.Router();
const dbName = 'shieldHeroes';
const collectionName = 'users';
let client;

function router(nav) {

  authRoutes.route('/logout')
    .post((req, res) => {
      req.logout();
      res.redirect('/auth/signin');
    })

  authRoutes.route('/signin')
    .all((req, res, next) => {
      if (!req.user) {
        next();
      } else {
        res.redirect('/auth/profile');
      }
    })
    .get((req, res) => {
      res.render('auth/signin', {
        nav
      });
    })
    .post(passport.authenticate('local', {
      successRedirect: '/auth/profile',
      failureRedirect: '/auth/signin'
    }));


  authRoutes
    .route('/signup')
    .get((req, res) => {

      res.render('auth/signup', {
        nav,
        title: 'Signup'
      });
    })
    .post((req, res) => {
      const newUser = {
        user: req.body.user.toLowerCase(),
        password: req.body.password[0]
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
            const result = await collection.insertOne({ ...newUser });
            req.login(result.ops[0], () => {
              res.redirect('/auth/profile');
            });
          }

        } catch (error) {
          debug(error.stack);
        }

        client.close();
      }());
    });

  authRoutes.route('/profile')
    .all((req, res, next) => {

      if (req.user) {
        next();
      } else {
        res.redirect('auth/signin');
      }
    })
    .get((req, res) => {
      res.render('auth/profile', { nav, user: req.user });
    })
    .post((req) => {
      const { password } = req.body;
      const { _id } = req.user;


      (async function mongo() {
        try {
          client = await MongoClient.connect(dbUrl);
          const db = client.db(dbName);
          const collection = await db.collection(collectionName);

          await collection.updateOne({ _id: new ObjectID(_id) }, { $set: { password } });


        } catch (error) {
          debug(error.stack);
        }

        client.close();
      }());
    });


  return authRoutes;
}

module.exports = router;