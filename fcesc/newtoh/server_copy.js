const express = require('express');
// const debug = require('debug');
// const morgan = require('morgan');
// const chalk = require('chalk');
const path = require('path');
const heroList = require('./src/mockdata/HEROES');

const server = express();

const PORT = 3010;

// server.use(morgan('tiny'));
server.use(express.static(path.join(__dirname, 'public/css')));

server.set('views', path.join(__dirname, './src/views'));
server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index.ejs', { header: 'header.ejs', apptitle: 'My Heroes', body: 'dashboard.component.ejs', hero: null });
});

server.get('/heroes', (req, res) => {
  res.render('index.ejs', { header: 'header.ejs', apptitle: 'My Heroes', body: 'heroes.component.ejs', heroList: heroList, hero: null });
});

server.get('/hero/:heroId', (req, res) => {
  const id = req.params.heroId;
  console.log('ID', id, heroList);
  const hero = heroList.find(hero => hero.id === Number(id));
  console.log('===>' + hero)
  res.render('index.ejs', { header: 'header.ejs', apptitle: 'My Heroes', body: 'hero-detail.component.ejs', hero: hero });
});

server.listen(PORT, () => console.log(`Server listenening on port: ${PORT}`));

