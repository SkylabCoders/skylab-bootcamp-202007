const express = require('express')
const path = require('path')
// const debug = require('debug')('app')
// const chalk = require('chalk')
const morgan = require('morgan')

const app = express ();
const port = process.env.PORT || 3000

const VIEW_FOLDER = 'src/views'

app.use(morgan('tiny'))
app.use(express.static(path.join(__dirname, 'public')))// esto es para indicar donde encontrar los ficheros estaticos
app.use('/css', express.static(path.join(__dirname, 'node-modules/bootstrap/dist/css')))// esto es pq puedo instalarlo y decir si no lo encuentro en public, lo busco aqui
app.use('/js', express.static(path.join(__dirname, 'node-modules/jquery/dist')))// esto es pq puedo instalarlo y decir si no lo encuentro en public, lo busco aqui
app.use('/js', express.static(path.join(__dirname, 'node-modules/bootstrap/dist/js')))// esto es pq puedo instalarlo y decir si no lo encuentro en public, lo busco aqui
// es preferible usar lo q está en node-modules para cuando salgan actualizaciones, lo pillo con npm update

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, VIEW_FOLDER, 'index.html'))
})

app.get('/books', function (req, res) {
    res.sendFILE(path.join(__dirname, VIEW_FOLDER, 'books.html'))
})


app.listen(port, () => console.log(`server runs in port ${  port}`))