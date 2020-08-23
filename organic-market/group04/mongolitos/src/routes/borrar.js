const debug = require('debug')('app:productsRoutes');
const { MongoClient, ObjectId } = require('mongodb');
const findRoutes = express.Router();

function router(nav) {
    findRoutes.route('/').post((req, res) => {
        const url =
            'mongodb+srv://admin:admin1234@cluster0.rpj2g.mongodb.net/organics?retryWrites=true&w=majority';
        const collectionName = 'products';
        const dbName = 'organics';
        let client;


        const { finder } = req.body;
        const finderSubString = finder[0];

        (async function query() {
            try {
                client = await MongoClient.connect(url);
                const db = client.db(dbName);
                const collection = db.collection(collectionName);
                const products = await collection.find().toArray();

                
                const foundProducts = products.filter(
                    (element) =>
                        element.title
                            .toLowerCase()
                            .includes(finderSubString.toLowerCase()) ||
                        element.type
                            .toLowerCase()
                            .includes(finderSubString.toLowerCase()) ||
                        element.description
                            .toLowerCase()
                            .includes(finderSubString.toLowerCase())
                );
                debug('FOUND PRODUCTS ------->', foundProducts);
                debug('PRODUCTS -------------->', products);
                debug('FINDER SUBSTRING -------------->', finderSubString);
                res.render('find', {
                    nav,
                    foundProducts,
                    user: req.user
                });
            } catch (error) {
                debug(error.stack);
            }
            client.close();
        })();
    });
    return findRoutes;
}
module.exports = router;