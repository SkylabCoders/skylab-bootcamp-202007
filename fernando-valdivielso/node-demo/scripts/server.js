const express = require('express');
const { request } = require('express');
const server = express();

server.set('view engine', 'ejs')

server.get('/', (request, response) => {
    response.render('index');
})


server.get('/about', (request, response) => {
    console.dir(request, { depth: 0 });
    response.render('about');
})

server.listen(4200, () => {
    console.log('Server running in port 4200')
})