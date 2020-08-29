const express = require('express');
const path = require('path');
const { ROUTES } = require('./../config/ROUTES');
const { COMPONENTS } = require('./../config/COMPONENTS');
const { heroStore } = require('./stores/heroStore');

const server = express();
const PORT = 3010;

server.use(express.static(path.join(__dirname, '/css')));
server.set('views', path.join(__dirname, '/components'));
server.set('view engine', 'ejs');

function serverGetters( { path, params, page } ){
  server.get(path, async (request, response) => {
    const ROUTE_PARAMETERS = { query: request.params[params], parameter: params, fromPage: path };
    //console.log('THESE ARE THE PARAMETERS', ROUTE_PARAMETERS, request.parameters, request.query);
    response.locals = { body: page, header: COMPONENTS.header, nav: COMPONENTS.nav, footer: COMPONENTS.footer, parameters: ROUTE_PARAMETERS, ROUTES: ROUTES, heroStore };
    response.render('index.ejs');
  })
}

for ( let route of ROUTES ){
  serverGetters(route);
}

server.listen(PORT, () => {
  console.log(`Server running in port:${PORT}...`);
})