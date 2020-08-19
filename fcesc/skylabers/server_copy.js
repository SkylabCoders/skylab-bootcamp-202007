const express = require('express');
const chalk = require('chalk');
const debug = require('debug');
const morgan = require('morgan');
const path = require('path');
const db = require('./config/DATABASE_CONFIG');
const sql = require('mssql');
const SKYLABROUTES = require('./src/routes/SKYLABROUTES');
console.log('SKY',SKYLABROUTES);

const PORT = 3010;
sql.connect(db).catch(debug);

const app = express();
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname,'/public')));
app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'ejs');

// app.get('/', (req, res)=>{
//   res.render('index.ejs', { skylabers: [{id:1},{id:2}] });
// })
// app.render('index.ejs', { skylabers: [{id:1},{id:2}] });
const appRouter = require('./src/routes/routes')();
app.use('/prefijo', appRouter);

app.listen(PORT, ()=>{`Server listening on port ${chalk.blueBright(PORT)}`});



