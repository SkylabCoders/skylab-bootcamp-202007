const express = require('express');
const debug = require('debug')('app:heroRoutes');
const { MongoClient, ObjectID } = require('mongodb');
const path = require('path');
const DATABASE_CONFIG = require("../database/DATABASE_CONFIG");
const ROUTES = require('./ROUTES');
let { products } = require('./ROUTES');

const adminProductsRoutes = express.Router();


function router(nav) {
  adminProductsRoutes
    .route('/')
    .all((req, res, next) => {
      if (req.user.type === 'admin') {
        next();
      }
    })
    .post((req, res) => {
      const { deleteProduct } = req.body;
      // const { addedProductId } = req.body;
      // const { username } = req.user;
      // const { _id } = req.user;

      (async function deleteProductFromList() {
        let client;
        try {
          client = await MongoClient.connect(DATABASE_CONFIG.url);
          debug('Connection to db established...');
          const db = client.db(DATABASE_CONFIG.dbName);
          const collection = db.collection(DATABASE_CONFIG.productCollection);

          await collection.deleteOne({ _id: new ObjectID(deleteProduct) });
          res.redirect(ROUTES.adminProducts.path);
        } catch (error) {
          debug(error.stack);
        }
      })();
    })
    .get((req, res) => {
      const { type } = req.user;
      (async function getAllProducts() {
        let client;
        try {
          client = await MongoClient.connect(DATABASE_CONFIG.url);
          debug('Connection to db established...');
          const db = client.db(DATABASE_CONFIG.dbName);

          const colection = db.collection(DATABASE_CONFIG.productCollection);

          products = await colection.find().sort({ name: 1 }).toArray();

          res.render('index', {
            nav,
            body: ROUTES.adminProducts.page,
            title: ROUTES.adminProducts.title,
            products,
            type,
            ROUTES
          });
        } catch (error) {
          debug(error.stack);
        }
        debug('Connection to db closed.');
        client.close();
      })();
    });


  adminProductsRoutes
    .route('/:productId')
    .all((req, res, next) => {
      const { productId } = req.params;
      (async function getProduct() {
        let client;
        try {
          client = await MongoClient.connect(DATABASE_CONFIG.url);
          debug('Connection to db established...');
          const db = client.db(DATABASE_CONFIG.dbName);
          const collection = db.collection(DATABASE_CONFIG.productCollection);
          res.product = await collection.findOne({ _id: new ObjectID(req.params.productId) });
          debug(res.product);
          next();
        } catch (error) {
          debug(error.stack);
        }
        debug('Connection to db closed.');
        client.close();
      })();
    })
    .post((req, res) => {

      const { product_title } = req.body;
      const { product_type } = req.body;
      const { product_description } = req.body;
      const { product_price } = req.body;
      const { product_rating } = req.body;
      const { productId } = req.params;
      console.log(productId);


      (async function updateProductInfo() {
        let client;
        try {
          client = await MongoClient.connect(DATABASE_CONFIG.url);
          const db = client.db(DATABASE_CONFIG.dbName);
          const collection = db.collection(DATABASE_CONFIG.productCollection);

          await collection.updateOne(
            { _id: new ObjectID(productId) },
            {
              $set: {
                title: product_title,
                type: product_type,
                description: product_description,
                price: product_price,
                rating: product_rating
              }
            })
          res.redirect(ROUTES.adminProduct.path)

          client.close();
        } catch (error) {
          debug(error.stack)
        }
      }())






    })
    .get((req, res) => {
      res.render('index', {
        nav,
        body: ROUTES.adminProduct.page,
        title: ROUTES.adminProduct.title,
        product: res.product,
        ROUTES
      });
    });

  return adminProductsRoutes;
}

module.exports = router;
