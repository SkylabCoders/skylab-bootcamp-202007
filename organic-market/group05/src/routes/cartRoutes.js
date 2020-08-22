const express = require('express');
const debug = require('debug')('app:cartRoutes');
const { MongoClient } = require('mongodb');

const getCart = express.Router();

const url = 'mongodb+srv://admin:admin1234@cluster0.rpj2g.mongodb.net/organics?retryWrites=true&w=majority';
const dbName = 'organics';
const collectionName = 'carts'
let client;

function router(nav) {
	getCart.route('/').get((req, res) => {
        (async function mongo(){

            try{
                client = await MongoClient.connect(url);
                const db = client.db(dbName);
                const collection = db.collection(collectionName);
        
                const { _id, user } = req.user;
                debug(_id);
                
                const cart = await collection.find({ userid: _id});

                res.render('cart', { nav , cart, user});
        

            }catch(error){
                
                debug(error.stack)
            }

            client.close()
        }());
        
	});

	return getCart;
}

module.exports = router;
