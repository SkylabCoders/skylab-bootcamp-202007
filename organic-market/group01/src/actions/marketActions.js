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


