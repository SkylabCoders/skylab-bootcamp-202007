const request = require('supertest');
const express = require('express');
const DATABASE_CONFIG = require('./../../database/DATABASE_CONFIG');

const mockServer = express();

mockServer.use(express.urlencoded({ extended: false}));

const userRoutes = require('./userRoutes')(DATABASE_CONFIG.usersCollection);

const ROOT_ROUTES = '/api/users';
mockServer.use(`${ROOT_ROUTES}`, userRoutes);

describe('USER ROUTES test set', () => {

  it('GET user ByUser with valid userId should return json data with status 200', () => {
    request(mockServer)
      .post(`${ROOT_ROUTES}/auth0|5f53d71242e345006db2cc02`)
      .expect('Content-type', /json/)
      .expect('Content-Length', '56')
      .expect(200)
  });

  it('GET user ByUser with invalid userId should return status 404', () => {
    request(mockServer)
      .post(`${ROOT_ROUTES}/invalidId`)
      .expect(404)
  });

});
