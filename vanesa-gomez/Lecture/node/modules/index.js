/*Si le paso argumentos a la función, 
cuando imprima esos argumentos me debe devolver una array, 
con todos los argumentos indexados.*/

// function dynamicArgsFunction() {
// 	console.log(arguments);
// }

// dynamicArgsFunction('Hello node!', true, [1, 2, 3, 4], 'abc');
// moduleWrapperFunction(exports, module, require, __filename, __dirname);
// console.log(arguments);

// const a = 15;
// exports.b = 30; // exports es un alias de module.exports. este viene siendo una "variable" que apunta al valor de module.export
// module.exports.c = 37; // cuando el modulo invoca una función, se debe invocar

module.exports.language = 'Catalan';
module.exports.city = 'Barcelona';
module.exports.bootcamp = 'Skylab';

//Ejemplo1 para mostrar lo que me interesa
module.exports = [1, 2, 3, 4];

//Ejemplo num 2
module.exports = (title, promo) => `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link rel="stylesheet" href="calc.css">
</head>
<body>
<p>${promo} </p>
</body>
</html>`;

//Ejemplo num 3, nos guta mas que ejemplo num 2

function fn(title, promo) {
	return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link rel="stylesheet" href="calc.css">
</head>
<body> 
<p>${promo} </p>
</body>
</html>`;
}
module.exports = fn;

//ejemplo num 4
console.log('Qué es el Event Loop?');
