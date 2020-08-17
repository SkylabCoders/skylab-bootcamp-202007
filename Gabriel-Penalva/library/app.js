const express = require('express');
const path = require('path');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');


const PORT = process.env.PORT || 4040;
const app = express();
const VIEW_FOLDER = 'src/views';

app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, 'public')))
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));



app.get('/', (require, response) => {
    response.sendFile(path.join(__dirname, VIEW_FOLDER, 'index.html'));
});
app.get('/books', (require, response) => {
    response.sendFile(path.join(__dirname, 'src/views/books.html'));
})

app.listen(PORT, () => debug(`Server is running in port : ${chalk.greenBright(PORT)}`));
