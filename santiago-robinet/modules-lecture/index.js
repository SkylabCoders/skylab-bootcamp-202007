

/*
si a exports le asignamos una variable vamos a exportar esa variable dentro del objeto de exports.
pero si asignamos module.exports = 20, ya no devolvera un objeto con las asignaciones dentro
sino que devolvera directamente 20 .
*/
// module.exports.b = 37;


// module.exports = (bootcam, promo) => `Estamos en ${bootcam} y somos de la promo ${promo}`;


module.exports.bootcamp={
    name: 'Skylab',
    promo: 18
}