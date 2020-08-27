const express = require('express');
const { readdirSync } = require('fs');
const fileManagement = require('./file.management');

const app = express();
const port = 1312;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(`${__dirname}/public/`));

app.get('/', (req, res) => {
	fileManagement.getAllFiles((err, data) => {
		res.render('pages/index', {
			articles: data,
			content: null,
			selectedFile: null
		});
	});
});

app.get('/data/:file', (req, res) => {
	res.send('File is working');
});

app.post('/new-file', (req, res) => {
	res.send('New file is working');
});

app.post('/save-file', (req, res) => {
	res.send('Save file is working');
});

app.listen(port, () => console.log(`Server is listening at port ${port}`));
