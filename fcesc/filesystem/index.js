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

app.get('/data/:file', (req, res)=>{
  const files = readdirSync('./data');
  const data = fileManagement.getFile(req.params.file);
  res.render('pages/index', {
    articles: files,
    content: data,
    selectedFile: req.params.file
  });
})

app.post('/new-file', (req, res)=>{
  fileManagement.createFileSafe(req.body.filename);
  res.redirect(`/data/${req.body.filename}`);
})

app.post('/save-file', ({ body: { filename, contents }}, res)=>{
  fileManagement.saveFile(filename, contents);
  res.redirect(`/data/${filename}`);
})

app.listen(PORT, ()=>{ console.log(`Server running on port ${PORT}`)});