const password = 'organicmarketSKYLAB';
const database = 'organicmarket';

const DATABASE_CONFIG = {
  url: `mongodb+srv://organicmarketADMIN:${password}@cluster0.blipm.mongodb.net/${database}?retryWrites=true&w=majority`,
  dbName: `${database}`,
  productCollection: 'products',
  userCollection: 'users',
  cartsCollection: 'carts'
}

module.exports = DATABASE_CONFIG;