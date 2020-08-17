const express = require('express');
const path = require('path');
const debug = require('debug')('server');
const morgan = require('morgan')


const server = express();

const VIEW_FOLDER = 'views';
const port = process.env.PORT || 4200;

server.use(morgan('dev'));

server.set('view engine', 'ejs');// esto va siempre que usemos EJS
server.use(express.static(__dirname + "/views"));

server.get('/', (request, response) => {
  response.sendFile(path.join(__dirname,VIEW_FOLDER,'HeroList.html'));
});

server.get('/herodetail', (request, response) => {
  response.sendFile(path.join(__dirname,VIEW_FOLDER,'HeroDetail.html'));
});

server.get('/herodashboard', (request, response) => {
  response.sendFile(path.join(__dirname,VIEW_FOLDER,'HeroDashboard.html'));
});

server.listen(port, () => debug(`Server running in port ${port}...`));
