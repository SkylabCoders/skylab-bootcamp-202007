const express = require('express');
const debug = require('debug')('app:authRoutes');
const { MongoClient } = require('mongodb');
const DATABASE_CONFIG = require("../database/DATABASE_CONFIG");
const ROUTES = require('./ROUTES');
const { NText } = require('mssql');

const authRoutes = express.Router();

/*
  GET signin 
    (display a form requesting user and params)
  POST signin 
    (check user exists in db) 
    redirect to profile if successful
    send error message to UI if unsuccessful
    (this is authentication)

  GET singup 
    (display a form requesting user data)
  POST signup 
    (validate form and create user in db)
    redirect to profile if successful
    send error message to UI if unsuccessful

  GET profile 
    (dipslay user info)
  POST profile 
    (to update user profile)
    insert data into database if successful
    send error message to UI if unsuccessful

  GET signout 
    remove user session info
    redirect to home
  */

function router(nav){
  const LOGGED_USER = { isLogged: false };

  authRoutes
    .route('/signin')
    .post((req, res)=>{
      (async function getSigninData(){
        let client;
        try{
          client = await MongoClient.connect(DATABASE_CONFIG.url);
          debug('Connection to db stablished...');
          const db = client.db(DATABASE_CONFIG.dbName);
          const collection = db.collection(DATABASE_CONFIG.userCollection);
          const data = req.body;
          const result = await collection.find({ username: data.signin__name, password: data.signin__password }).toArray();
          if(result){
            LOGGED_USER.name = await result.name;
            LOGGED_USER.isLogged = true;
            console.log('login successful for user', LOGGED_USER);
          } else {
            throw 'User not found in database.';
          }
        } catch (error) {
          debug(error.stack);
        }
        debug('Connection to db closed.');
        client.close();
        res.redirect(ROUTES.profile.path);
      })();
    })
    .get((req, res)=>{
      (async function displaySigninPage(){
        try{
          console.log('HERE IN THE GET', LOGGED_USER);
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
    .post((req, res)=>{
      (async function getSignupData(){
        let client;
        try{
          client = await MongoClient.connect(DATABASE_CONFIG.url);
          debug('Connection to db stablished...');
          const db = client.db(DATABASE_CONFIG.dbName);
          const collection = db.collection(DATABASE_CONFIG.userCollection);
          const data = req.body;
          if (data.signup__password === data.signup___passwordConfirm){
            const result = await collection.insertOne({ 
              username: data.signup__name, 
              password: data.signup__password,
              name: data.signup__name,
              email: data.signup__email
            });
            debug('user created successfully');
          } else {
            debug('Passwords must be equal');
          }
        } catch (error) {
          debug(error.stack);
        }
        debug('Connection to db closed.');
        client.close();
        res.redirect(ROUTES.signin.path);
      })();
    })
    .get((req, res)=>{
      (async function displaySignupPage(){
        try{
          console.log('HERE IN THE GET', LOGGED_USER);
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
    .get((req, res)=>{
      (async function displaySigninPage(){
        try{
          res.render('index', {
            nav,
            body: ROUTES.profile.page,
            title: ROUTES.profile.title,
            ROUTES,
            LOGGED_USER
          })
        } catch (error) {
          debug(error.stack);
        }
      })();
    })

  return authRoutes;
}



module.exports = router;
