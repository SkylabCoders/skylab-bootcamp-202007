const DBCONF = require('../dbConf');

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


module.exports = function getProductById({_id}){
    (async function mongo() {
        const productById;
        try {
            const client = await MongoClient.connect(DBCONF.url);
            const db = client.db(DBCONF.dbName);
            const collection = await db.collection(DBCONF.marketCall);
             productById = await collection.findOne({_id})
            
        } catch (error) {
            debug(error.stack)
        }
        return productById
    
})
}



