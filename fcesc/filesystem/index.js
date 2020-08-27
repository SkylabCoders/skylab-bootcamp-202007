const express = require('express');
const { readdirSync } = require('fs');
const fileManagement = require('./file.management.js');

const app = express();
const PORT = process.env.PORT || 3010;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(`${__dirname}/public/`));

app.get('/', (req, res)=>{
  fileManagement.getAllFiles((error, data)=>{
    res.render('pages/index', {
      articles: data,
      content: null,
      selectedFile: null
    })
  })
})

app.get('data/:file', (req, res)=>{
  res.send('File is working');
})

app.post('new-file', (req, res)=>{
  res.send('New file is working');
})

app.post('save-file', (req, res)=>{
  res.send('File has been saved');
})

app.listen(PORT, ()=>{ console.log(`Server running on port ${PORT}`)});