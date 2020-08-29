const express = require('express');
const fs = require('fs');

const server = express();

function startRoute(htmlFile){
    server.get('/', (request, response) => {
        console.dir(request, { depth: 0 });
        response.send(sendHtmlFileToRoute('index.html'));
    })
    fs.readFile(`./../public/${htmlFile}`, null, function (error, pgResp) {
        if (error) {
            response.writeHead(404);
            response.write('Contents you are looking are Not Found');
        } else {
            response.writeHead(200, { 'Content-Type': 'text/html charset=utf-8', 'lang': 'ca.ES' });
            response.write(pgResp);
        }
        response.end();
    });
}

// server.get('/', (request, response) => {
//     console.dir(request, { depth: 0 });
//     response.send(sendHtmlFileToRoute('index.html'));
// })

server.get('/', (request, response) => {
    console.dir(request, { depth: 0 });
    response.render('./../public/index');
})

server.get('/about', (request, response) => {
    console.dir(request, { depth: 0 });
    response.render('./../public/about');
})

server.listen(3014, () => {
    console.log('Server running in port 3014...');
})
