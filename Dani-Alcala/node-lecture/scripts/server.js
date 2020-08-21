//server en express

const express = require('express');

const server = express();

server.set('view engine', 'ejs')

server.get('/', (request, response) => {
  response.render('index');
});

server.get('/about', (request, response) => {
  response.render('about');
});

server.listen(4200, () => console.log('Server running '));


// const express = require('express');

// const server = express();

// server.get('/', (request, response) => {
//   response.send('Hello Express');
// });

// server.get('/about', (request, response) => {
//   console.dir(request, { depth: 0 });
//   response.send('About works...');
// });

// server.listen(4200, () => console.log('Server running '));
