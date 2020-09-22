const express = require('express');
const debug = require('debug')('app');
const path = require('path');
const morgan = require('morgan');
const sql = require('mssql');

const HEROES = require('./heroes');

const app = express();
const PORT = 3000;

const config = {
	user: 'Dani',
	password: 'Patataninja8',
	server: 'skylab-dani.database.windows.net',
	database: 'tohdb',
	option: {
		encrypt: true
	}
};
sql.connect(config).catch(debug);

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

const nav = [
	{ link: '/', title: 'Dashboard' },
	{ link: '/heroes', title: 'Heroes' }
];

app.use(morgan('tiny'));

app.get('/', (req, res) => {
	res.render('dashboard', {
		nav,
		title: 'Top Heroes',
		heroes: HEROES.slice(0, 4)
	});
});
const heroRoutes = require('./src/routes/heroRoutes')(nav);

app.use('/heroes', heroRoutes);

app.listen(PORT, () => debug('server is running...'));
