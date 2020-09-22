// 1.-require express
const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');

// 4.-
const app = express();

const VIEW_FOLDER = 'src/views';

// 5.- app use
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, 'public')));
// 6.- define more routes to take account for
app.use(
	'/css',
	express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css'))
);
app.use(
	'/js',
	express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js'))
);
app.use(
	'/js',
	express.static(path.join(__dirname, 'node_modules/jquery/dist'))
);

// 2.- declare the root route
app.get('/', (req, res) => {
	// send is an alias from res.write + res.end
	// res.send('Hello World');
	res.sendFile(path.join(__dirname, VIEW_FOLDER, 'index.html'));
});

app.get('/books', (req, res) => {
	// res.send('Books works!');
	res.sendFile(path.join(__dirname, VIEW_FOLDER, 'books.html'));
});

// 3.- declare a port to listen at
const PORT = 3000;
// app.listen(PORT, () => console.log('Server is running in port: ' + PORT));
app.listen(PORT, () =>
	debug(`Server is running in ${chalk.cyan('port: ')}${chalk.cyan(PORT)}`)
);
