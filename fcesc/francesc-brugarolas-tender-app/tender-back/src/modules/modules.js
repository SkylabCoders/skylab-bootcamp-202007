const DATABASE_CONFIG = require('../../database/DATABASE_CONFIG');
const { MongoClient } = require('mongodb');
const debug = require('debug')('server:modules.js');

function db(selectedCollection){

  async function findToArray(searchCriteria){
    let client;
    try {
      client = await MongoClient.connect(DATABASE_CONFIG.url, { useNewUrlParser: true, useUnifiedTopology: true });
      const collection = client.db(DATABASE_CONFIG.dbName).collection(selectedCollection);

      const data = await collection.find(searchCriteria).toArray();

      return data;
    } catch (error) {
      debug(error);
    } finally {
      await client.close();
    }
  }

  async function findProjectionToArray(searchCriteria, projection){
    let client;
    try {
      client = await MongoClient.connect(DATABASE_CONFIG.url, { useNewUrlParser: true, useUnifiedTopology: true });
      const collection = client.db(DATABASE_CONFIG.dbName).collection(selectedCollection);

      const data = await collection.find(searchCriteria).project(projection).toArray();

      return data;
    } catch (error) {
      debug(error);
    } finally {
      await client.close();
    }
  }

  async function createOne(entity){
    let client;
    try {
      client = await MongoClient.connect(DATABASE_CONFIG.url, { useNewUrlParser: true, useUnifiedTopology: true });
      const collection = client.db(DATABASE_CONFIG.dbName).collection(selectedCollection);

      await collection.insertOne(entity);

      return 'successfully';
    } catch (error) {
      debug(error);
    } finally {
      await client.close();
    }
  }

  async function deleteOne(entity){
    let client;
    try {
      client = await MongoClient.connect(DATABASE_CONFIG.url, { useNewUrlParser: true, useUnifiedTopology: true });
      const collection = client.db(DATABASE_CONFIG.dbName).collection(selectedCollection);

      await collection.deleteOne(entity);

      return 'successfully';
    } catch (error) {
      debug(error);
    } finally {
      await client.close();
    }
  }

  return { findToArray, findProjectionToArray, createOne, deleteOne }
}

module.exports = db;