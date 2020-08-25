const express = require('express');
const debug = require('debug')('server:server.js');
const chalk = require('chalk');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Hero = require('./database/models/heroModel');
const User = require('./database/models/userModel');

const DATABASE_CONFIG = require('./database/DATABASE_CONFIG');

const port = process.env.PORT || 3010;
const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

const db = mongoose.connect(DATABASE_CONFIG.url, { useUnifiedTopology: true, useNewUrlParser: true });

const heroRoutes = require('./src/routes/heroRoutes')(Hero);

server.use('/api/heroes', heroRoutes);

const userRoutes = require('./src/routes/userRoutes')(User);

server.use('/api/user', userRoutes);

server.listen(port, ()=>{debug(`Listening on port, ${chalk.blueBright(port)}`)});