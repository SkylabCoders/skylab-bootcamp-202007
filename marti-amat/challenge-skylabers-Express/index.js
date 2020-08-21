const express = require('express');
const debug = require('debug')('app');
const path = require('path');
const morgan = require('morgan');

const sql = require('mssql');



const app = express();
const port = 3000;

const config = {
    user: 'marti',
    password: 'jukebox75!',
    server: 'martisanti.database.windows.net',
    database: 'Skylabbers',
    option: {
        encrypt: true // Because we are using Microsoft Azure
    }
};

sql.connect(config).catch(debug);

const nav = [
    { link: '/', title: 'Dashboard' },
    { link: '/skylabbers', title: 'Skylabbers' }
];

app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', './src/views');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('SkylaberDashboard', {
        title: 'SkylaberDashboard',
        nav,
        skylabbers: [{ id: 1, name: 'Martí' }, { id: 2, name: 'Gerard' }]
    });
});

const SkylabRoutes = require('./src/routes/SkylabRoutes')(nav);

app.use('/skylabbers', SkylabRoutes);

app.listen(port, () => debug(`Listener on port ${port}`));
