const express = require('express');
const debug = require('debug')('server:server.js');
const chalk = require('chalk');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Hero = require('./database/models/heroModel');
const MiniHero = require('./database/models/miniheroModel');
const User = require('./database/models/userModel');




// const ROUTES = require('./src/routes/ROUTES');
const DATABASE_CONFIG = require('./database/DATABASE_CONFIG');

const port = process.env.PORT || 3010;
const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

const db = mongoose.connect(DATABASE_CONFIG.url, { useUnifiedTopology: true, useNewUrlParser: true });


server.route('/superheroes').get((req, res)=>{
  const query = {};
  if (req.query.id){
    query.id = req.query.id;
  }
  Hero.find(query, (error, hero)=>{
    if (error) { res.send(error) };
    res.json(hero);
  })
})
// db.close();

// const db2 = mongoose.connect(DATABASE_CONFIG.url, { useUnifiedTopology: true, useNewUrlParser: true });
server.route('/miniheroes').get((req, res)=>{
  MiniHero.find({}, (error, minihero)=>{
    if (error) { return res.send(error)}
    return res.json(minihero);
  })
})
// db2.close();

// let db3;
// server.route('hero/:heroId').get((req, res)=>{
//   db3 = mongoose.connect(DATABASE_CONFIG.url, { useUnifiedTopology: true, useNewUrlParser: true });
//   Hero.find(req.params.heroId, (error, hero)=>{
//     if (error) { return res.send(error) }
//     const somehero = JSON.parse(hero);
//     debug('HERE', somehero);
//     return res.json(hero);
//   });
//   db3.close();
// });

// const mongoApiRoutes = require('./src/routes/mongoApiRoutes')();
// server.use('/api', mongoApiRoutes);

const heroRoutes = require('./src/routes/heroRoutes')(Hero);

server.use('/api', heroRoutes);

const userRoutes = require('./src/routes/userRoutes')(User);

server.use('/user', userRoutes);


server.listen(port, ()=>{debug(`Listening on port, ${chalk.blueBright(port)}`)});