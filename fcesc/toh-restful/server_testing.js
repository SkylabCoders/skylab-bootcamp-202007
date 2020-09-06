const express = require('express');
const debug = require('debug')('server:server.js');
const chalk = require('chalk');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const HeroTest = require('./database/models/heroTestModel');
const UserTest = require('./database/models/userTestModel');

const DATABASE_CONFIG = require('./database/DATABASE_CONFIG');

const port = process.env.PORT || 3010;
const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

const db = mongoose.connect(DATABASE_CONFIG.url, { useUnifiedTopology: true, useNewUrlParser: true }, function dbConnection (error){
  if (error) { throw error }
  server.listen(port, ()=>{debug(`Listening on port, ${chalk.blueBright(port)}`)});
});

const heroTestRoutes = require('./src/routes/collectionRoutes')(HeroTest);

server.use('/api/heroes', heroTestRoutes);

const userTestRoutes = require('./src/routes/collectionRoutes')(UserTest);

server.use('/api/users', userTestRoutes);
