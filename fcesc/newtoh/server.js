const express = require('express');
const debug = require('debug');
const morgan = require('morgan');
const chalk = require('chalk');
const path = require('path');

const server = express();

const PORT = 3010;

server.use(morgan('tiny'));
server.use(express.static(path.join(__dirname, 'public/css')));

server.set('views', path.join(__dirname, './src/views'));
server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index.ejs', { body: 'dashboard.component.ejs'});
});

server.get('/heroes', (req, res) => {
  res.render('index.ejs', { body: 'heroes.component.ejs' });
});

server.get('/heroes/:heroId', (req, res) => {
  res.render('index.ejs', { body: 'hero.detail.component.ejs' });
});





server.listen(PORT, () => console.log(`Server listenening on port: ${PORT}`));

