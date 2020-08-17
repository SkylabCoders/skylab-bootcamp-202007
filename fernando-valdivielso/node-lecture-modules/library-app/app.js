const express = require('express');  // npm i nodemon -> nos permite refrescar el servidor automaticamente y no tener que cerrarlo y abrilo

const app = express();
const path = require('path');
const debug = require('debug')('app') // debug recibe la aplicacion 'app'. se especifica el modulo que quieres debugear
const chalk = require('chalk')   // permite cambiar el color
const morgan = require('morgan')

const port = process.env.PORT || 3000; // puerto definido dinamicamente || 3000 es por el puerto por defecto (el que queramos)

const VIEW_FOLDER = 'src/views';
app.use(morgan('tiny')) // combined, def, tiny... comandos por defecto

app.use(express.static(path.join(__dirname, 'public')));  // cada vez que quiera un fichero estatico, ve a la carpeta public. En este caso boostrap (al final borramos la carpeta e instalamos bootstrap -> npm i bootstrap)

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))

app.get('/', (req, res) => {
    // res.send('Hello world, what up');   //alias de res.write y res.end
    // res.write('...');
    // res.end();


    res.sendFile(path.join(__dirname, VIEW_FOLDER, 'index.html'))   // o 'src/views/index.html'
});



app.get('/books', function (req, res) {     // url que va a renderizar "book works"
    res.sendFile(path.join(__dirname, VIEW_FOLDER, 'books.html'))
});


app.listen(port, () => debug(`Server is running in port ${chalk.green(port)}`)); // node app.js starts the server   //debug reemplaza a console.log




