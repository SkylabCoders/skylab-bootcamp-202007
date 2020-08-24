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


const db = mongoose.connect(DATABASE_CONFIG.url);
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


// let db1;
// (async() => {
//   db1 = await mongoose.connect(
//     DATABASE_CONFIG.url, 
//     { useUnifiedTopology: true, useNewUrlParser: true }
//   );
//   debug('DB10', db1);
//   db1.close();
// })()

// server.route('/heroes').get((req, res)=>{
//   const query = {};
//   if(req.query.id){
//     query.id = req.query.id;
//   }
//   Hero.find(query, (error, hero)=>{
//     if (error) { return res.send(error)}
//     return res.json(hero);
//   })
// })

const db2 = mongoose.connect(DATABASE_CONFIG.url, { useUnifiedTopology: true, useNewUrlParser: true });
server.route('/miniheroes').get(async (req, res)=>{
  MiniHero.find({}, (error, minihero)=>{
    if (error) { return res.send(error)}
    return res.json(minihero);
  })
})
debug('DB2', db2);
// db2.close();

// let db2;
// (async() => {
//   db2 = await mongoose.connect(DATABASE_CONFIG.url, { useUnifiedTopology: true, useNewUrlParser: true });
//   server.route('/miniheroes').get(async (req, res)=>{
//     await MiniHero.find({}, (error, minihero)=>{
//       if (error) { return res.send(error)}
//       return res.json(minihero);
//     })
//   })
//   debug('DB2', db2);
//   db2.close();
// })()

let db3;
server.route('hero/:heroId').get(async (req, res)=>{
  db3 = await mongoose.connect(DATABASE_CONFIG.url, { useUnifiedTopology: true, useNewUrlParser: true });
  Hero.find(req.params.heroId, (error, hero)=>{
    if (error) { return res.send(error) }
    return res.json(hero);
  });
  debug('db3', db3);
  db3.close();
});


server.get(ROUTES.home.root, (req, res)=>{
  res.send('My server works...');
});

// const mongoApiRoutes = require('./src/routes/mongoApiRoutes')();
// server.use('/api', mongoApiRoutes);

server.listen(port, ()=>{debug(`Listening on port, ${chalk.blueBright(port)}`)});