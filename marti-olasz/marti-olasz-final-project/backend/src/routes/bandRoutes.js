const express = require('express');

const getBand = require('../controllers/getBand');
const searchBand = require('../controllers/searchBand');
const followersBand = require('../controllers/followersBand');

const bandRouter = express.Router();

const User = require('../models/userModel');

function routes(Band) {
  bandRouter.route('/search/:text').get(searchBand(Band));
  bandRouter.route('/follow/:id').get(followersBand(User));
  bandRouter.route('/:id').get(getBand(Band));
  return bandRouter;
}

module.exports = routes;
