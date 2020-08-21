const DBCONF = require('../dbConf');
const { ObjectID } = require('mongodb');

let cart = [];

console.log(DBCONF);




module.exports = function getAllProducts(){
    (async function mongo() {
        const allProducts;
        try {
            const client = await MongoClient.connect(DBCONF.url);
            const db = client.db(DBCONF.dbName);
            const collection = await db.collection(DBCONF.marketCall);
             allProducts = await collection.find({});
            
        } catch (error) {
            debug(error.stack)
        }
        return allProducts
    
})
}


module.exports = function getProductById(_id){
    (async function mongo() {
        const productById;
        try {
            const client = await MongoClient.connect(DBCONF.url);
            const db = client.db(DBCONF.dbName);
            const collection = await db.collection(DBCONF.marketCall);
             productById = await collection.findOne({_id: new ObjectID(id)})
            
        } catch (error) {
            debug(error.stack)
        }
        return productById
    
})
}



module.exports = function deleteProductById(_id){
    (async function mongo() {
        const productById;
        try {
            const client = await MongoClient.connect(DBCONF.url);
            const db = client.db(DBCONF.dbName);
            const collection = await db.collection(DBCONF.marketCall);
            await collection.deleteOne({_id: new ObjectID(id)})
            
        } catch (error) {
            debug(error.stack)
        }
        
    
})
}



