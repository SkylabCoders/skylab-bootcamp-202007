const express = require('express');
const debug = require('debug')('server:server.js');
const chalk = require('chalk');

const ROUTES = require('./src/routes/ROUTES');

const port = process.env.PORT || 3010;
const server = express();

server.get(ROUTES.home.root, (req, res)=>{
  res.send('My server works...');
});

server.listen(port, ()=>{debug(`Listening on port, ${chalk.blueBright(port)}`)});