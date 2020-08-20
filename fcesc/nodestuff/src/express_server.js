const express = require('express');
const path = require('path');
const server = express();

// console.log('dirname', path.join(__dirname, '/../public/'));
server.set('views', path.join(__dirname, '../public/'));

server.set('view engine', 'ejs');

server.get('/', (request, response) => {
    response.render('index');
})

server.get('/about', (request, response) => {
    // console.dir(request, { depth: 0 });
    response.render('about');
})

server.get('/heroes-list', (request, response) => {
    response.render('paginated-list');
})

server.get('/hero', (request, response) => {
    response.render('hero-detail');
})

server.get('/full-list', (request, response) => {
    response.render('full-list');
})

server.get('/edit', (request, response) => {
    response.render('edit');
})

server.get('/api/full-list', (request, response) => {
    response.render('api/full-list');
})

server.listen(3014, () => {
    console.log('Server running in port 3014...');
})
