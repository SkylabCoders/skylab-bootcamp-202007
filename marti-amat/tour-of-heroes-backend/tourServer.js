const express = require('express');
const server = express();
server.set('view engine', 'ejs');
server.get('/', (request, response) => {
    response.render('dashboard');
});

server.get('/listItems', (request, response) => {
    console.dir(request, { depth: 0 });
    response.render('listItems');
});
server.get('/detailItem', (request, response) => {
    console.dir(request, { depth: 0 });
    response.render('detailItems');
});
server.use('/public', express.static('public'));

server.listen(4202, () => console.log('Server is in port 4202...'));
