const express = require('express');
const debug = require('debug')('app:addproductRoutes');
const { MongoClient } = require('mongodb');

const addProduct = express.Router();


const url = 'mongodb+srv://admin:admin1234@cluster0.rpj2g.mongodb.net/organics?retryWrites=true&w=majority';
const dbName = 'organics';
const collectionName = 'products'
let client;

function router(nav){
    addProduct.route('/').get((req, res) => {
        res.render('addproduct', {nav});
    })
    .post((req, res) => {
        const { title, type, description, filename, height, width, price, rating } = req.body;
        (async function mongo(){

            client = await MongoClient.connect(url);
            const db =  client.db(dbName);
            const collection = db.collection(collectionName);
            
            await collection.insertOne( {title, type, description, filename, height, width, price, rating} );
            res.redirect('/products');
          
            client.close();
        }())
       
    })
    return addProduct;
}

module.exports = router;

