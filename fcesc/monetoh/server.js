const express = require('express');
const debug = require('debut')('app');
const chalk = require('chalk');

const app = express();
const PORT = 3010;



app.listen(PORT, ()=>{console.log(`Server listening on port ${chalk.blueBright(PORT)}`)});


