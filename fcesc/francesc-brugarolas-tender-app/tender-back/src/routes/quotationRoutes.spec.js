const request = require('supertest');
const express = require('express');
const DATABASE_CONFIG = require('./../../database/DATABASE_CONFIG');

const mockServer = express();

mockServer.use(express.urlencoded({ extended: false}));

const quotationRoutes = require('./quotationRoutes')(DATABASE_CONFIG.quotationsCollection);

const ROOT_ROUTES = '/api/quotations';
mockServer.use(`${ROOT_ROUTES}`, quotationRoutes);

describe('QUOTATION ROUTES test set', () => {

  it('GET quotations ByUser with valid userId should return json data with status 200', () => {
    request(mockServer)
      .get(`${ROOT_ROUTES}/byUser/5f4faca78b141a231040efad`)
      .expect('Content-type', /json/)
      .expect(200)
  });

  it('GET quotations ByUser with invalid userId should return status 404', () => {
    request(mockServer)
      .get(`${ROOT_ROUTES}/byUser/invalidId`)
      .expect(404)
  });

  it('GET quotations ByBudget with valid budgetId should return json data with status 200', () => {
    request(mockServer)
      .get(`${ROOT_ROUTES}/byBudget/5f5692eec76df948689ed9ba`)
      .expect('Content-type', /json/)
      .expect(200)
  });

  it('GET quotations ByBudget with invalid budgetId should return status 404', () => {
    request(mockServer)
      .get(`${ROOT_ROUTES}/byBudget/invalidId`)
      .expect(404)
  });

  it('GET quotations ById with valid quotationId should return json data with status 200', () => {
    request(mockServer)
      .get(`${ROOT_ROUTES}/5f578c0b91c33d3f4808481d`)
      .expect('Content-type', /json/)
      .expect(200)
  });

  it('GET quotations ById with invalid quotationId should return status 404', () => {
    request(mockServer)
      .get(`${ROOT_ROUTES}/invalidId`)
      .expect(404)
  });

});