const http = require('http');//el require() es como el import...en este caso estamos importando el modulo http.


const server = http.createServer((request, response) => response.end(`Que onda! Saimon recomienda Wire Shark! para mas informacion ir a http://192.168.0.151:2626/` ));

server.listen(4242, () => console.log('Server is running...'));

