const DATABASE_CONFIG = require('./DATABASE_CONFIG');
const { MongoClient } = require('mongodb');

async function testConexion() {
  const client = new MongoClient(DATABASE_CONFIG.url, { useNewUrlParser: true });
  client.connect(async () => {
    const collection = client.db(DATABASE_CONFIG.dbName).collection(DATABASE_CONFIG.productCollection);
    const data = await collection.find().toArray();
    console.log('AQUI LOS DATOS:\b', data);
    client.close();
  });
}

testConexion();


