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
  res.render('dashboard.component.ejs', { hero_search: 'hero-search.component.ejs' });
});

server.get('/heroes', (req, res) => {
  res.render('heroes.ejs');
});

server.get('/heroes/:heroId', (req, res) => {
  res.send('Details works');
});





server.listen(PORT, () => console.log(`Server listenening on port: ${PORT}`));

