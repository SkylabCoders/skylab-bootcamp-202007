const http = require('http');

// req and res are streams
const requestListener = (req, res) => {
	res.end('Hello World\n');
	/**
	 * Shorthand notation for
	 * writting a single line and ending the connection:
	 * res.write('Hello World\n');
	 * res.end();
	 */
};
const server = http.createServer(requestListener);
// server.on('request', requestListener); // server is an event emitter

server.listen(4242, () => {
	console.log('Server is running...');
});

/**
 * Try for watching file changes and restarting Node
 * npm install nodemon
 *
 * nodemon is a wrapper around the Node command.
 * Also, you dont need nodemon in production, is just for development.
 */

/**
 * After installing nodemon...
 * console.dir(req, {depth: 0});
 * Notice 'req' is of type IncommingMessage
 *
 * console.log(req.url);
 *
 * console.dir(req, {depth: 0});
 * Notice 'res' is of type ServerResponse
 */
