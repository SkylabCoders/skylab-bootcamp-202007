const express = require('express');
const server = express();
const { heroList } = require('./hero.mock');

server.set('view engine', 'ejs');

server.use(express.static(__dirname + "/views"));

server.get('/dashboard', (request, response) => {
    response.render('heroDashboard');
})

server.get('/list', (request, response) => {
    response.render('heroList');
    response.send(heroList.map((hero) => console.log(hero) ))
})

server.get('/', (request, response) => {
    response.render('heroDetail');
})

server.listen(4200, () => console.log('Server is running...'))