const express = require('express');
const debug = require('debug')('server:server.js');
const chalk = require('chalk');
const mongoose = require('mongoose');

const Hero = require('./database/models/heroModel');
const MiniHero = require('./database/models/miniheroModel');

const ROUTES = require('./src/routes/ROUTES');
const DATABASE_CONFIG = require('./database/DATABASE_CONFIG');

const port = process.env.PORT || 3010;
const server = express();

let db1;
(async() => {
  db1 = await mongoose.connect(
    DATABASE_CONFIG.url, 
    { useUnifiedTopology: true, useNewUrlParser: true }
  );
})()

server.route('/heroes').get((req, res)=>{
  MiniHero.find({ }, (error, hero)=>{
    if (error) { return res.send(error)}
    return res.json(hero);
  })
})

let db2;
(async() => {
  db2 = await mongoose.connect(DATABASE_CONFIG.url, { useUnifiedTopology: true, useNewUrlParser: true });
  server.route('/miniheroes').get(async (req, res)=>{
    await Hero.find({ }, (error, minihero)=>{
      if (error) { return res.send(error)}
      return res.json(minihero);
    })
  })
})()

debug(db1, db2);


server.get(ROUTES.home.root, (req, res)=>{
  res.send('My server works...');
});

// const apiRoutes = require('./src/routes/apiRoutes')();

// server.use('/api', apiRoutes);

server.listen(port, ()=>{debug(`Listening on port, ${chalk.blueBright(port)}`)});