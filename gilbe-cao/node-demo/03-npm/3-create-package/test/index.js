const print = require('frame-print'); // Use '../' for local file

print('Hello NPM!');

/*
Expected Output:

**********
Hello NPM!
**********
*/

/**
 * module.exports = function print(msg) {
 * console.log(**********);
 * console.log(Hello NPM);
 * console.log(**********);
 * }
 */
