/* console.log('Hello Node!');
console.log(__filename);
console.log(__dirname); */

/* function dynamicArgsFunction() {
	console.log(arguments);
}
dynamicArgsFunction('Hello Node!', true, [1, 2, 3, 4, 6], 'abcd');
 */ // module(exports, module , require, __filename, __dirname);
//module apunta a module.exports

//console.log(arguments);
/*
const a = 15;
exports.b = 30;

 module.exports = { a };

module.exports.language = 'Catalan';
module.exports.city = 'Barcelona';
module.exports.bootcamp = 'skylab';

module.exports = [1, 2, 4]; 

module.exports = `Mi edad NO es ${a}`;
*/
//podemos exportar directamente un html poniendole module.exports = arriba deltodo tal cual

module.exports.bootcamp = {
	name: 'Skylab',
	promos: 18
};
