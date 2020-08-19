/**
 * Behave in Nodejs different than a browser.
 * Each file is wrapped with a function that takes 5 arguments
 * The code becomes the body of that wrapper function
 *
 * "exports or module.exports" defined the API of the module
 * "require" to require other modules inside this one
 * "__filename" is the path of the file
 * "__dirname" is the path to the folder
 *
 * They are not global objects, they are customized for each file
 */

// function (exports, module, require, __filename, __dirname) {

console.log(arguments);

// return module.exports;

// } (module.exports, )

/**
 * Try the following before the next example:
 *
 * let g = 1;
 * exports.a = 42;
 * module.exports.b = 37;
 *
 * exports = () => {} // not ok! Breaking assignment reference.
 * module.exports = () => {} // Ok!
 */
