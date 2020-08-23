const express = require('express');
const debug = require('debug')('app:addproductRoutes');
const { MongoClient } = require('mongodb');

const addProduct = express.Router();


const url = 'mongodb+srv://admin:admin1234@cluster0.rpj2g.mongodb.net/organics?retryWrites=true&w=majority';
const dbName = 'organics';
const collectionName = 'carts'
let client;

function router(nav){
    addProduct.route('/').get((req, res) => {
        res.render('addproduct', {nav});
    })
    .post((req, res) => {
        
        (async function mongo(){

            client = await MongoClient.connect(url);
            const db =  client.db(dbName);
            const collection = db.collection(collectionName);
    
            debug(req.body)
    
            client.close();
        }())
       
    })
    return addProduct;
}

module.exports = router;

