const express = require('express');
const debug = require('debug')('app');
const mongoose =  require('mongoose')
const bodyParser = require('body-parser');
const chalk = require('chalk');


const app = express();
const port = process.env.PORT || 2804;
const db = mongoose.connect('mongodb://localhost/sportivdatabase');
const Event = require('./models/eventModel');
const User = require('./models/userModel');
const Group = require('./models/groupModel')
const Lesson = require('./models/lessonModel')


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



const eventRouter = require('./src/routes/eventsRouter')(Event, User);

app.use('/api/events', eventRouter);

const userRouter = require('./src/routes/usersRouter')(User);

app.use('/api/user', userRouter);

const groupRouter = require('./src/routes/groupsRouter')(Group, User);

app.use('/api/groups', groupRouter);

const lessonRouter = require('./src/routes/lessonsRouter')(Lesson);

app.use('/api/lessons', lessonRouter);

app.listen(port, debug(chalk.cyan(`The server is running on port :`, chalk.bgYellow(port))));