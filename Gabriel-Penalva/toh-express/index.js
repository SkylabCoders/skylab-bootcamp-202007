const express = require('express');
const path = require('path');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const expressSession = require('express-session');



//  const { routes } = require('./routes');

const nav = [
    { link: '/', title: 'Dasboard' },
    { link: '/heroes', title: 'myheroes' },
    { link: '/auth', title: 'Singin' },
    { link: '/auth/profile', title: 'Profile' }
];
/*const sql = require('mssql');

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


const app = express();
const PORT = process.env.PORT || 4040;*/

app.use(cookieParser());
app.use(expressSession({ secret: 'heroes' }));
require('./src/config/passport')(app);

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: 'false' }));

app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', './src/views')
app.set('view engine', 'ejs');
app.get('/', (request, res) => {
    const url = 'mongodb://localhost:27017';
    const dbname = 'shieldHeroes';
    let client;
    (async function query() {
        try {
            client = await MongoClient.connect(url);
            debug('connection stablished')
            const db = client.db(dbname);
            const collection = await db.collection('heroes');
            const heroes = await collection.find().limit(4).toArray();
            debug(heroes)
            res.render('dashboard', {
                nav, title: 'my Heroes',
                heroes
            })

        } catch (error) {
            debug(error.stack);
        }
        finally {
            client.close();
        }
    }())
});

const heroRoutes = require('./src/heroRoutes')(nav);

app.use('/heroes', heroRoutes);

const shieldRoutes = require('./src/shieldRoutes')(nav);

app.use('/shield', shieldRoutes);

const authRoutes = require('./src/authRoutes')(nav);

app.use('/auth', authRoutes);


// function generateRoutes({ pathF, file, title, info, nav }) {
//     app.get(pathF, (request, response) => {
//         response.render(file, { nav, title, heroes: info });
//     });
// }

// routes.map((x) => generateRoutes(x))
 



app.listen(PORT, () => debug(`Server is running in port : ${chalk.greenBright(PORT)}`));


