const express = require('express');
const path = require('path');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const sql = require('mssql');

const config = {
    user: 'gaeremtro',
    password: 'Penalva91',
    server: 'gaeremtro.database.windows.net',
    database: 'thodb',
    option: {
        encrypt: true // for a azure DB
    }

}

sql.connect(config).catch(debug);

//  const { routes } = require('./routes');

const heroes = require('./heroes');

const dashboardList = heroes.slice(0, 4)
const nav = [
    { link: '/', title: 'Dasboard' },
    { link: '/heroes', title: 'myheroes' }
];
const heroRoutes = require('./src/heroRoutes')(nav);

const app = express();
const PORT = process.env.PORT || 4040;


app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', './src/views')
app.set('view engine', 'ejs');
app.get('/', (request, response) => {
    response.render('dashboard', { nav, title: 'Top Heroes', dashboardList });
});
app.use('/heroes', heroRoutes);

// function generateRoutes({ pathF, file, title, info, nav }) {
//     app.get(pathF, (request, response) => {
//         response.render(file, { nav, title, heroes: info });
//     });
// }

// routes.map((x) => generateRoutes(x))



app.listen(PORT, () => debug(`Server is running in port : ${chalk.greenBright(PORT)}`));


