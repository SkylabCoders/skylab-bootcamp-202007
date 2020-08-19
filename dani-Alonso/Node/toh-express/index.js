const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 2427;

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(morgan('tiny'));

const heroList = [
	{ id: 11, name: 'Dr Nice' },
	{ id: 12, name: 'Narco' },
	{ id: 13, name: 'Bombasto' },
	{ id: 14, name: 'Celeritas' },
	{ id: 15, name: 'Magneta' },
	{ id: 16, name: 'RubberMan' },
	{ id: 17, name: 'Dynama' },
	{ id: 18, name: 'Dr IQ' },
	{ id: 19, name: 'Magma' },
	{ id: 20, name: 'Tornado' }
];
app.get('/', (req, res) => {
	const dashboardList = heroList.slice(0, 4);
	res.render('dashboard', { title: 'my Hero' }, { dashboardList });
});
app.get('/list', (req, res) => {
	res.render('list', { heroList });
});
app.get('/hero', (req, res) => {
	const id = +req.query.id;
	const hero = heroList.find((element) => element.id === id);
	res.render('detail', { hero });
});
app.listen(port, () =>
	debug(chalk.red(`Server is running at port `) + chalk.green(port))
);
