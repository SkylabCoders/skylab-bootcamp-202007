const express = require('express');

const { readdirSync } = require('fs');
const { ppid } = require('process');
const fileManagementt = require('./file.management.js');

const app = express();

const PORT = 4200;

app.get('/', (req, res) => {
	res.send('Server fookin running');
});

app.get('/data/:file', (req, res) => {
	res.send('File is working');
});

app.post('/new-file', (req, res) => {
	res.send('new file is working');
});

app.post('/save-file', (req, res) => {
	res.send('save file is working');
});

app.listen(PORT, () => {
	console.log(`Server running at port ${PORT}`);
});
