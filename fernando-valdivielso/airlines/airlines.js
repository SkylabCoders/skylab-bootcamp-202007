let vuelos = [
    {id: 0, from: 'Barcelona', to: 'Madrid', precio: 90, escalas: false},
    {id: 1, from: 'Vigo', to: 'M\u00E1laga', precio: 100, escalas: false},
    {id: 2, from: 'Madrid', to: 'Lisboa', precio: 150, escalas: false},
    {id: 3, from: 'Amsterdam', to: 'Par\u00EDs', precio: 150, escalas: false},
    {id: 4, from: 'Barcelona', to: 'Berl\u00EDn', precio: 195, escalas: false},
    {id: 5, from: 'Kiev', to: 'Londres', precio: 250, escalas: false},
    {id: 6, from: 'Barcelona', to: 'Mallorca', precio: 75, escalas: false},
    {id: 7, from: 'Madrid', to: 'San Francisco', precio: 550, escalas: true},
    {id: 8, from: 'Barcelona', to: 'Singapur', precio: 700, escalas: true},
    {id: 9, from: 'Bilbao', to: 'M\u00E1laga', precio: 65, escalas: false}
];

function greeting() {
    let name = prompt('Introduzca su nombre por favor:')
    console.log("Bienvenido/a " + name + '. ' + 'Estos son todos los vuelos disponibles hoy:\n\n')
}

function salidas() {
    for (let i = 0; i < vuelos.length; i++) {
        if (vuelos[i].escalas == false) {
            console.log('Vuelo sin escalas de ' + vuelos[i].from + ' a ' + vuelos[i].to + ' por ' + vuelos[i].precio + '\u20AC');
        } else {
            console.log('Vuelo con escalas de ' + vuelos[i].from + ' a ' + vuelos[i].to + ' por ' + vuelos[i].precio + '\u20AC');
        }  
    }     
}

function costeMedio(){
    let medio = 0;
    for (let i = 0; i < vuelos.length; i++) {
        medio += vuelos[i].precio;
    }
    medio = medio / (vuelos.length);
    console.log(`\nEl coste medio de los billetes es de ${medio}\u20AC`)
}

function escalas() {
    console.log('\nLos vuelos con escalas son los siguientes:')
    for (let i = 0; i < vuelos.length; i++) {
        if (vuelos[i].escalas == true) {
            console.log('* ' + vuelos[i].from + ' - ' + vuelos[i].to)
        }
    }
}

function ultimosVuelos() {
    console.log('\nLos últimos cinco vuelos del día son:');
    for (let i = 5; i < 10; i++) {
        console.log('* ' + vuelos[i].from + ' - ' + vuelos[i].to);
    }
}

function airlines() {
    greeting();
    salidas();
    costeMedio();
    escalas();
    ultimosVuelos();
}

airlines();