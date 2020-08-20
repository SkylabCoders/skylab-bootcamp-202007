const http = require('http');
var fs = require('fs');
// const process = require('process');

const hostname = '127.0.0.1';
const port = 3011;

const server = http.createServer((req, resp) => {
    fs.readFile("./../public/index.html", null, function (error, pgResp) {
        if (error) {
            resp.writeHead(404);
            resp.write('Contents you are looking are Not Found');
        } else {
            resp.writeHead(200, { 'Content-Type': 'text/html', 'lang': 'ca.ES' });
            resp.write(pgResp);
        }
        resp.end();
    });
    
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

process.on('SIGTERM', () => {
    server.close(() => {
      console.log('Process terminated')
    })
})