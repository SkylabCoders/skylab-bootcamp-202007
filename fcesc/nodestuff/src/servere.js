const http = require('http');
// const process = require('process');

const hostname = '127.0.0.1';
const port = 3010;
const NODE_ENV = 'development';

function showEnvironmentVariables(){
    let obj = process.env;
    return printObjPropsAndValues(obj);
}

function showGlobalObject(){
    let obj = global;
    return printObjProps(obj);
}

function showThis(){
    let obj = this;
    return printObjProps(obj);
}

function printObjPropsAndValues(obj){
    let res = [];
    for (el in obj){
        res.push(`   -> \'${el}\' : ${obj[el]}\n`);
    }
    return res.sort().join('');
}

function printObjProps(obj){
    let res = [];
    for (el in obj){
        res.push(`   -> \'${el}\'\n`);
    }
    return res.sort().join('');
}

let text = `Hello World! This is a running node server in your local computer. \n
Running on port ${port} with hostname ${hostname} \n
Server running in node envirnoment: ${NODE_ENV} \n
And these are the environment variables: \n
${showEnvironmentVariables()}\n
and THIS is \'this\':\n
${showThis()}\n
and the GLOBAL object is:\n
${showGlobalObject()}`;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(text);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

process.on('SIGTERM', () => {
    server.close(() => {
      console.log('Process terminated')
    })
})