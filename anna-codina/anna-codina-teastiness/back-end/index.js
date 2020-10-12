const express = require('express');
const debug = require('debug')('server');
const chalk = require('chalk');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const TeaVarieties = require('./src/models/teas-varieties-model');
const PrincipalTeas = require('./src/models/teas-principal-types-model');
const Users = require('./src/models/user-model');
const Shops = require('./src/models/shop-model');

const server = express();
const PORT = process.env.PORT || 3001;

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

const db = mongoose.connect('mongodb://localhost/teastiness');

server.get('/', (req, res) => {
  res.send('server working');
});

const teaVarRouter = require('./src/routes/itemRouter')(TeaVarieties);

server.use('/api/teaVarieties', teaVarRouter);

const principalTeasRouter = require('./src/routes/itemRouter')(PrincipalTeas);

server.use('/api/principalTeas', principalTeasRouter);

const usersRouter = require('./src/routes/userRouter')(Users);

server.use('/api/users', usersRouter);

const shopsRouter = require('./src/routes/shopRouter')(Shops, Users);

server.use('/api/shops', shopsRouter);

server.listen(
  PORT,
  debug(chalk.cyanBright(`Port working in port ${chalk.blue(PORT)}`))
);
