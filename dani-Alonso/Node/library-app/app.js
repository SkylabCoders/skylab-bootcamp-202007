const express = require('express');
const { response } = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'src/views', 'index.html'));
});

const PORT = 3000;
app.listen(3000, () => console.log('server is running in port' + PORT));

app.get('/books', function (req, res) {
	res.sendFile(path.join(__dirname, 'src/views', 'books.html'));
});
