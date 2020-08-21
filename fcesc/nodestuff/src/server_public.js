const http = require('http');
var fs = require('fs');
// const process = require('process');

const hostname = '192.168.0.153';
const port = '3015';

const someHtmlStuff = `This is some added stuff - using plain node and js - displaying some wikipedia stuff \n\n`;

const server = http.createServer((req, resp) => {
    fs.readFile("./../assets/stuff.txt", 'UTF-8', function (error, pgResp) {
        if (error) {
            resp.writeHead(404);
            resp.write('Contents you are looking are Not Found');
        } else {
            resp.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8', 'lang': 'ca.ES'});
            resp.write(someHtmlStuff);
            resp.write(pgResp);
        }
        resp.end();
    });
    
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
