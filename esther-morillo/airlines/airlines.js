function usuario() {
    var nombre = prompt('Hola, ¿cuál es su nombre?');
    var fecha = new Date();
    fecha = (fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear());
    console.log(`Hola ${nombre}, bienvenido/a a Skylab Airlines! \nPara hoy, día ${fecha}, tenemos estos vuelos:`);
}

usuario();

var flights = [
    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false } 
];

var mediaCost = 0;
var escalas = ``;
var ultimosDest = ``;

for (var i = 0; i < flights.length; i++){
    if (flights[i].scale == true){
        console.log(`${i + 1} >> El vuelo con origen: ${flights[i].to} y destino: ${flights[i].from} tiene un coste de ${flights[i].cost}€ y realiza una escala.`);

        escalas += `· Vuelo con origen: ${flights[i].to} y destino: ${flights[i].from}\n`;

    } else {
        console.log(`${i + 1} >> El vuelo con origen: ${flights[i].to} y destino: ${flights[i].from} tiene un coste de ${flights[i].cost}€ y no realiza ninguna escala.`);
    }
    mediaCost += flights[i].cost;
}

function VuelosUltimaHora() {
    for (var i = 0; i < flights.length; i++){
        if (i >=  flights.length - 5){
            ultimosDest += `·${flights[i].from}\n`;
        }
    }
    console.log(`Los vuelos de última hora tienen destino: \n${ultimosDest}`);
}

console.log(`Este es el MEJOR MOMENTO para COMPRAR nuestros vuelos, ya que tenemos los precios MÁS BARATOS. El coste medio de nuestros vuelos es: ${(mediaCost / i).toFixed(2)}€`);

console.log(`Los vuelos que efectúan escalas son: \n${escalas}`);

VuelosUltimaHora();

