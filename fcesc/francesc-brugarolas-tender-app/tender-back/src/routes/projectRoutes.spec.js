const request = require('supertest');
const express = require('express');
const DATABASE_CONFIG = require('./../../database/DATABASE_CONFIG');

const mockServer = express();

mockServer.use(express.urlencoded({ extended: false}));

const projectRoutes = require('./projectRoutes')(DATABASE_CONFIG.projectsCollection);

const ROOT_ROUTES = '/api/projects';
mockServer.use(`${ROOT_ROUTES}`, projectRoutes);

describe('PROJECT ROUTES test set', () => {

  it('GET projects ByUser with valid userId should return json data with status 200', () => {
    request(mockServer)
      .get(`${ROOT_ROUTES}/byUser/5f4faca78b141a231040efad`)
      .expect('Content-type', /json/)
      .expect(200)
  });

  it('GET projects ByUser with invalid userId should return status 404', () => {
    request(mockServer)
      .get(`${ROOT_ROUTES}/byUser/invalidId`)
      .expect(404)
  });

  it('GET projects Flow ByUser with valid userId should return json data with status 200', () => {
    request(mockServer)
      .get(`${ROOT_ROUTES}/flow/byUser/5f4faca78b141a231040efad`)
      .expect('Content-type', /json/)
      .expect(200)
  });

  it('GET projects Flow ByUser with invalid userId should return status 404', () => {
    request(mockServer)
      .get(`${ROOT_ROUTES}/flow/byUser/invalidId`)
      .expect(404)
  });

  it('GET project BySlug with valid slug should return json data with status 200', () => {
    request(mockServer)
      .get(`${ROOT_ROUTES}/bySlug/house-spanish-wells-bahamas`)
      .expect('Content-type', /json/)
      .expect(200)
  });

  it('GET project BySlug with invalid slug should return status 404', () => {
    request(mockServer)
      .get(`${ROOT_ROUTES}/bySlug/invalidId`)
      .expect(404)
  });

  it('GET project with valid projectId should return json data with status 200', () => {
    request(mockServer)
      .get(`${ROOT_ROUTES}/5f58e82a91c33d3f4808481e`)
      .expect('Content-type', /json/)
      .expect(200)
  });

  xit('GET project with invalid projectId should return status 404', () => {
    request(mockServer)
      .get(`${ROOT_ROUTES}/invalidId`)
      .expect(404)
  }); 
});