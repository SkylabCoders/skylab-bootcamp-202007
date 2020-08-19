const express = require('express');
const path = require('path');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');

const { MongoClient } = require('mongodb');



//  const { routes } = require('./routes');

const nav = [
    { link: '/', title: 'Dasboard' },
    { link: '/heroes', title: 'myheroes' }
];
const heroRoutes = require('./src/heroRoutes')(nav);
const shieldRoutes = require('./src/shieldRoutes')(nav);

const app = express();
const PORT = process.env.PORT || 4040;



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
app.use('/heroes', heroRoutes);

app.use('/shield', shieldRoutes)


app.listen(PORT, () => debug(`Server is running in port : ${chalk.greenBright(PORT)}`));


