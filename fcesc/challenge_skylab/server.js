/* Francesc Brugarolas - Skylab bootcamp 2020-07 - challenge #GameOfLife */
'use strict';

const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const connectionString = 'mongodb+srv://skylaber:skylabRocks@cluster0.kerwn.mongodb.net/<dbname>?retryWrites=true&w=majority';
const ejs = require('ejs');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function() {
    console.log('fcesc: Node server with express awaken and listening on port 3000. May the server be with you.')
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

MongoClient.connect(connectionString, { useUnifiedTopology: true }, (err, client) => {
    if (err) {return console.error(err);}
    let date = new Date();
    console.log(`---> MongoClient successfully listening, skylaber. ${date}`);
    const db = client.db('skylabers');
    const skylabersCollection = db.collection('skylabers');
    //app.use(/* ... */)
    app.get('/', (req, res) => {
        console.log('---> this is a test of a GET operation, skylaber. Using bodyParser.');
        console.log('---> req.body', req.body);
        const cursor = db.collection('skylabers').find().toArray()
            .then((results) => {
                res.render('index.ejs', { quotes: results });
                console.log('cursor', cursor);
            })
            .catch(error => console.error(error));
    });
    app.post('/quotes', (req, res) => {
        console.log('---> this is a test of a POST operation, skylaber. Using bodyParser.');
        console.log('---> req.body', req.body);
        skylabersCollection.insertOne(req.body)
            .then(result => {
                res.redirect('/');
            })
            .catch(error => console.error(error));
    });    
    //app.listen(/* ... */)
});

