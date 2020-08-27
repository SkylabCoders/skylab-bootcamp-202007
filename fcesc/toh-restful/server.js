const express = require('express');
const debug = require('debug')('server:server.js');
const chalk = require('chalk');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Hero = require('./database/models/heroModel');
const User = require('./database/models/userModel');
const Random = require('./database/models/randomModel');

const DATABASE_CONFIG = require('./database/DATABASE_CONFIG');

const port = process.env.PORT || 3010;
const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

const db = mongoose.connect(DATABASE_CONFIG.url, { useUnifiedTopology: true, useNewUrlParser: true }, function dbConnection (error){
  if (error) { throw error }
  server.listen(port, ()=>{debug(`Listening on port, ${chalk.blueBright(port)}`)});
});

const heroRoutes = require('./src/routes/collectionRoutes')(Hero);

server.use('/api/heroes', heroRoutes);

const userRoutes = require('./src/routes/collectionRoutes')(User);

server.use('/api/users', userRoutes);

const randomRoutes = require('./src/routes/collectionRoutes')(Random);

server.use('/api/random', randomRoutes);
