const express = require('express');
const debug = require('debug');
const morgan = require('morgan');
const chalk = require('chalk');
const path = require('path');
const heroes = require('./heroList');

const server = express();

const PORT = 3010;

server.use(morgan('tiny'));
server.use(express.static(path.join(__dirname, 'public/css')));

server.set('views', path.join(__dirname, './src/views'));
server.set('view engine', 'ejs');

const nav = [
    { link: '/', title: 'Dashboard' },
    { link: '/heroes.', title: 'HeroList' },
];

server.get('/', (req, res) => {
    res.render('index.ejs', {
        nav,
        body: 'dashboard.component.ejs',
        title: 'Dasboard',
        heroes: heroes.slice(0, 4)
    });
});


const heroRoutes = require('./src/routes/heroRoutes')(nav, heroes);

server.use('/heroes', heroRoutes);

server.listen(PORT, () => debug(`Server listenening on port: ${PORT}`));
