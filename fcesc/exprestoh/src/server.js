const https = require('https');
const express = require('express');
const path = require('path');
const ROUTES = require('./../config/ROUTES');

const server = express();
const PORT = 3010;

server.set('views', path.join(__dirname, '/components/'));
server.set('view engine', 'ejs');

function serverGetters(routeElement){
  server.get(routeElement.path, (request, response) => {
    console.dir( request, { depth: 1} );
    response.render(routeElement.page);
  })
}

for ( let route of ROUTES ){
  serverGetters(route);
}

server.listen(PORT, () => {
  console.log(`Server running in port:${PORT}...`);
})