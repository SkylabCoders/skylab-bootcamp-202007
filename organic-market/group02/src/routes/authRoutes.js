const express = require('express');
const debug = require('debug')('app:authRoutes');
const passport = require('passport');
const { MongoClient } = require('mongodb');
const DATABASE_CONFIG = require("../database/DATABASE_CONFIG");
const ROUTES = require('./ROUTES');
const validatePasswordFormat = require('./../utils/password_validator');

const authRoutes = express.Router();

function router(nav) {

  authRoutes
    .route('/signin')
    .post(passport.authenticate('local', {
      successRedirect: '/auth/profile',
      failureRedirect: '/auth/signin'
    }))
    .get((req, res) => {
      (async function displaySigninPage() {
        try {
          let pageData = {
            nav,
            body: ROUTES.signin.page,
            title: ROUTES.signin.title,
            ROUTES
          }
          res.render('index', pageData)
        } catch (error) {
          debug(error.stack);
        }
      })();
    })

  authRoutes
    .route('/signup')
    .post((req, res) => {
      (async function getSignupData() {
        let client;
        try {
          client = await MongoClient.connect(DATABASE_CONFIG.url);
          const db = client.db(DATABASE_CONFIG.dbName);
          const collection = db.collection(DATABASE_CONFIG.userCollection);
          const data = req.body;
          const newUser = {
            username: data.signup__userName,
            password: data.signup__password,
            name: data.signup__name,
            email: data.signup__email,
            type: 'user'
          };
          const user = await collection.findOne({ name: data.signup__name });
          if (!user && data.signup__password === data.signup__passwordConfirm && validatePasswordFormat(data.signup__password)) {
            await collection.insertOne(newUser);
            res.login({ ...newUser });
            debug('user created successfully');
          } else {
            let errMessage = 'Error: user creation failed. Reason:';
            if (user) { debug(`${errMessage} username already exists`) }
            if (data.signup__password !== data.signup__passwordConfirm) { debug(`${errMessage} passwords must be equal`) }
            if (!validatePasswordFormat(data.signup__pasword)) { debug(`${errMessage} invalid password format`) }
          }
        } catch (error) {
          debug(error.stack);
        } finally {
          client.close();
        }
        debug('Connection to db closed.');
      })();

      res.redirect(ROUTES.home.path);
    })
    .get((req, res) => {
      (async function displaySignupPage() {
        try {
          let pageData = {
            nav,
            body: ROUTES.signup.page,
            title: ROUTES.signup.title,
            ROUTES
          }
          res.render('index', pageData)
        } catch (error) {
          debug(error.stack);
        }
      })();
    })

  authRoutes
    .route('/profile')
    .all((req, res, next) => {
      if (req.user) {
        next();
      } else {
        res.redirect(ROUTES.signin.path);
      }
    })
    .get((req, res) => {
      (function displayProfilePage() {
        try {
          res.render('index', {
            nav,
            body: ROUTES.profile.page,
            title: ROUTES.profile.title,
            ROUTES,
            user: req.user // viene de la autorización
          })
        } catch (error) {
          debug(error.stack);
        }
      })();
    })
    .post((req, res) => {
      res.send('POST works');
    })

  authRoutes
    .route('/signout')
    .all((req, res, next) => {
      if (req.user) {
        req.logout();
        next();
      } else {
        res.redirect(ROUTES.home.path);
      }
    })
    .get((req, res) => {
      (function displaySigninPage() {
        try {
          res.render('index', {
            nav,
            body: ROUTES.home.page,
            title: ROUTES.home.title,
            ROUTES
          })
        } catch (error) {
          debug(error.stack);
        }
      })();
    })

  return authRoutes;
}

module.exports = router;