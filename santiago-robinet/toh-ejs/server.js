const express = require('express');
const { heroList } = require('./hero.mock.js');

const server = express();

server.set('view engine', 'ejs');// esto va siempre que usemos EJS

server.get('/', (request, response) => {
  response.render('HeroList');
});

server.get('/herodetail', (request, response) => {
  response.render('HeroDetail');
});

server.get('/herodashboard', (request, response) => {
  response.render('HeroDashboard');
});

server.listen(4200, () => console.log('Server running in port 4200...'));
