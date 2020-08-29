const express = require('express');
const chalk = require('chalk');
const debug = require('debug');
const morgan = require('morgan');
const path = require('path');
const db = require('./config/DATABASE_CONFIG');
const sql = require('mssql');
const SKYLABROUTES = require('./src/routes/SKYLABROUTES');
const COMPONENTS = require('./src/routes/COMPONENTS');

const PORT = 3010;

const app = express();
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname,'/public')));
app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'ejs');

function serverGetters( { path, parameter, page }, ROUTES ){
  app.get(path, async (request, response) => {
    let QUERY;
    if (parameter){
      QUERY = request.params[parameter];
    }
    let NAVITEMS = ROUTES.filter(route=>route.nav)
    response.locals = { header: COMPONENTS.header, nav: COMPONENTS.nav, navitems: NAVITEMS, footer: COMPONENTS.footer, body: page, skylabers: [{id: 12, name: 'John'},{id: 23, name: 'Sabine'}], skylaber: {id: 12, name: 'John', likesPets: 1, lastName: 'Lennon', city: 'Berlin', country: 'Antigua y Barbuda', age: 28, birthDate: '23/12/1991', gender: 'male' } };
    response.render('index.ejs');
  })
}

for ( let route of SKYLABROUTES ){
  serverGetters(route, SKYLABROUTES);
}

app.listen(PORT, ()=>{`Server listening on port ${chalk.blueBright(PORT)}`});
