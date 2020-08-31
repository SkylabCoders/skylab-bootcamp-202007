const express = require('express');
const path = require('path');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const sql = require('mssql');

const nav = [{
    link: '/',
    title: 'Dashboard'
},
{
    link: '/list',
    title: 'List'
},
{
    link: '/staff',
    title: 'Staff'
}
];

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


const laberRoutes = require('./src/laberRoutes')(nav);

const app = express();
const PORT = process.env.PORT || 1010;

app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', './src/views')
app.set('view engine', 'ejs');


app.use('/', laberRoutes);


//sql.connect(function (err) {
//    if (err) throw err;
//    con.query(sql, function (err, result) {
//        if (err) throw err;
//        console.log("Number of records deleted: " + result.affectedRows);
//    });
//});





app.listen(PORT, () => debug(`Server is running in port : ${chalk.greenBright(PORT)}`));
