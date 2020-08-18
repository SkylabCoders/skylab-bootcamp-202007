const express = require('express');
const path = require('path');
const chalk = require('chalk');
// const debug = require('debug')('server');
// const morgan = require('morgan');
const { ROUTES } = require('./config/ROUTES');
const { COMPONENTS } = require('./config/COMPONENTS');

const server = express();
const PORT = process.env.PORT || 3010;
const NAVITEMS = Array.from(ROUTES.values()).filter(route=>route.nav);

// server.use(morgan('tiny'));
server.use(express.static(path.resolve(__dirname, './src/css')));
server.set('views', path.resolve(__dirname, './src/views'));
server.set('view engine', 'ejs');

function sendToServer(path, bodyComponent, enableParams){
  let ROUTE_PARAMETERS = {};
  if(enableParams){
    ROUTE_PARAMETERS = { query: request.params[params], parameter: params, fromPage: path };
    //console.log(`    .> with ${ROUTE_PARAMETERS}`);
  }
  server.get(path, function(req, res){
    res.locals = { body: bodyComponent, header: COMPONENTS.get('HEADER').file, footer: COMPONENTS.get('FOOTER').file, nav: COMPONENTS.get('NAV').file, ROUTES: ROUTES, NAVITEMS: NAVITEMS }; // pass here any data to children
    res.render('index.ejs');
  })
}

for(let [key, value] of ROUTES){
  sendToServer(value.path, value.page, value.enableParams);
  console.log(`${key} route initialized`);
}

server.listen(PORT, ()=>{console.log(`Server is running on port ${chalk.blueBright(PORT)}`)});
