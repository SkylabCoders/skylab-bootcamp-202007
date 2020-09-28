const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const crypto = require("crypto");
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.set('port', 4200);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(multer({
    storage,
    dest: path.join(__dirname, 'public/uploads')
}).single('image'));

app.get('/', (req, res) => {
    res.render('index');
})
app.post('/upload', (req, res) => {
    console.log(req.file);
    res.send('uploaded');
})
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})

