const request = require('supertest');
const express = require('express');
const DATABASE_CONFIG = require('./../../database/DATABASE_CONFIG');

const mockServer = express();

mockServer.use(express.urlencoded({ extended: false}));

const budgetRoutes = require('./budgetRoutes')(DATABASE_CONFIG.budgetsCollection);

const ROOT_ROUTES = '/api/budgets';
mockServer.use(`${ROOT_ROUTES}`, budgetRoutes);

describe('BUDGET ROUTES test set', () => {

  it('GET budgets ByUser with valid userId should return json data with status 200', () => {
    request(mockServer)
      .get(`${ROOT_ROUTES}/byUser/5f4faca78b141a231040efad`)
      .expect('Content-type', /json/)
      .expect(200)
  });

  it('GET budgets ByUser with invalid userId should return status 404', () => {
    request(mockServer)
      .get(`${ROOT_ROUTES}/byUser/invalidId`)
      .expect(404)
  });

  it('GET budgets Flow ByUser with valid userId should return json data with status 200', () => {
    request(mockServer)
      .get(`${ROOT_ROUTES}/flow/byUser/5f4faca78b141a231040efad`)
      .expect('Content-type', /json/)
      .expect(200)
  });

  it('GET budgets Flow ByUser with invalid userId should return status 404', () => {
    request(mockServer)
      .get(`${ROOT_ROUTES}/flow/byUser/invalidId`)
      .expect(404)
  });

  it('GET budgets Flow ByUser with valid projectId should return json data with status 200', () => {
    request(mockServer)
      .get(`${ROOT_ROUTES}/byProject/5f58e82a91c33d3f4808481e`)
      .expect('Content-type', /json/)
      .expect(200)
  });

  it('GET budgets Flow ByUser with invalid projectId should return status 404', () => {
    request(mockServer)
      .get(`${ROOT_ROUTES}/byProject/invalidId`)
      .expect(404)
  });

  it('GET budget with valid budgetId should return json data with status 200', () => {
    request(mockServer)
      .get(`${ROOT_ROUTES}/5f5692eec76df948689ed9ba`)
      .expect('Content-type', /json/)
      .expect(200)
  });

  xit('GET budget with invalid budgetId should return status 404', () => {
    request(mockServer)
      .get(`${ROOT_ROUTES}/invalidId`)
      .expect(404)
  }); 
});
