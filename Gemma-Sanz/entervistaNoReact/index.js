const express = require('express');
const debug = require('debug');
const bodyParser = require('body-parser');
//const api = require('./servidor');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

/* app
	fetch('https://www.boardgameatlas.com/api/docs/search')
	.then((response) => response.json())
	.catch((error) => debug(`There's an error ${error}`));
 */
app.listen(PORT, () => {
	debug(`Listening on port ${PORT}`);
});

app.get('/', (req, res) => {
	res.render('dashboard.ejs');
});
