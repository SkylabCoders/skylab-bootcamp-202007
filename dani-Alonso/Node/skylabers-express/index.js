const express = require('express');
const debug = require('debug')('app');
const path = require('path');
const morgan = require('morgan');
const sql = require('mssql');

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

const laberRoutes = require('./src/routes/laberRoutes')(nav);
sql.connect(config).catch(debug);

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use('/labers', laberRoutes);

app.use(morgan('tiny'));

constlaberRoutes = require('./src/routes/laberRoutes')(nav);

app.use('/labers', laberRoutes);

app.listen(PORT, () => debug('server is running...'));
