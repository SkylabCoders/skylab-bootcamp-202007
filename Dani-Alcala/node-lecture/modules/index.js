// console.log('something')
// // //ejecutar con node index.js para ver q sale
// console.log(__filename)
// console.log(__dirname)

// function dynamicArgsFunction() {
//     console.log(arguments)
// }

// dynamicArgsFunction(1, 2, 3, 4, 6, 8) //arguments es palabra reservada
// dynamicArgsFunction("hi", true, [2, 6, 8], 4, 6, 8) //arguments es palabra reservada
// // moduleWrapperFunction(exports, module, required, __filename, __dirname) // esto es cuando creamos un modulo

// console.log(arguments)//ver lo que sale en la consola cuando hago node index.js, ahi se ven las 5 cosas que salen
// //module.exports en la posicion 1 es la posicion 0

// const a = 15// no se ve nada en requireModule.js
// exports.b = 30//ahora si

// module.exports = () => console.log('hi') //en este caso en el fichero que haga require tendré que llamar a la funcion

// module.exports.language = 'catalan'
// module.exports.city = 'bcn'
// module.exports.bootcamp = 'skylab'

// //en requireModule veremos un objeto con esas 3 propiedades

// module.exports = [1, 2, 4]
// module.exports.list = [1, 2, 4] //ojo, si hago esto, cuando lo llamo con require desde el otro archivo tendré q hacer destructuring

// //puedo exportar un string, o una constante, o un html,...

// //el template literal respeta el multilinea!!!

//---------------------------
// module.exports = (title, promo) => `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>${title}</title>
// </head>
// <body>
//     <h1>${promo}</h1>
// </body>
// </html>`
//----------------------------

module.exports.bootcamp = {
    name: 'Skylab',
    promos: 18
}

//------------------------
console.log('Q es el Event Loop?')

