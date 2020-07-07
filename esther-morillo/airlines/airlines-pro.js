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


var nombre = prompt('Hola, ¿cuál es su nombre?');
    while (nombre == null ||  nombre == '')
    nombre = prompt('Hola, ¿cuál es su nombre?');

var fecha = new Date();
fecha = (fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear());
console.log(`Hola ${nombre}, bienvenido/a a Skylab Airlines! \nPara hoy, día ${fecha}, tenemos estos vuelos:`); 



function mostrarVuelos() {
var mediaCost = 0;
var escalas = ``;
    for (var i = 0; i < flights.length; i++){
        if (flights[i].scale == true){
            console.log(`${i + 1} >> El vuelo con origen: ${flights[i].from} - Destino: ${flights[i].to} tiene un coste de ${flights[i].cost}€ y realiza una escala.`);

            escalas += `· Vuelo con origen: ${flights[i].from} - Destino: ${flights[i].to}\n`;

        } else {
            console.log(`${i + 1} >> El vuelo con origen: ${flights[i].from} y destino: ${flights[i].to} tiene un coste de ${flights[i].cost}€ y no realiza ninguna escala.`);
        }
        mediaCost += flights[i].cost;
    }
console.log(`Este es el MEJOR MOMENTO para COMPRAR nuestros vuelos, ya que tenemos los precios MÁS BARATOS. El coste medio de nuestros vuelos es: ${(mediaCost / i).toFixed(2)}€`);
console.log(`Los vuelos que efectúan escalas son: \n${escalas}`);
}

function VuelosUltimaHora() {
    var ultimosDest = ``;
        for (var i = 0; i < flights.length; i++){
            if (i >=  flights.length - 5){
                ultimosDest += `·${flights[i].from}\n`;
            }
        }
        console.log(`Los vuelos de última hora tienen destino: \n${ultimosDest}`);
}

function adminOrUser() {
    var usuario = prompt('¿Es usted ADMIN o USER?', 'ADMIN/USER').toLowerCase();
    switch (usuario) {
        case 'admin':
            crearEliminar()
            break;
        case 'user':
            user();
            break;
        default:
            adminOrUser();
            break;
    } 
}

function crearEliminar() {
    var pregunta = prompt('¿Qué desea hacer con los vuelos?', 'Crear/Eliminar').toLowerCase();
    switch (pregunta) {
        case 'crear':
            crear();
            break;
        case 'eliminar':
            eliminar();
            break;
        default:
            crearEliminar();
            break;
    }
}

function crear() {
var nuevoFlight;
var cont = 0;   
vuelo();

    function vuelo(){
        var origen = prompt('Origen del vuelo:');
            while (origen == '') origen = prompt('Por favor, introduzca el Origen del vuelo:');
            if (origen == null) crearEliminar();
        var destino = prompt('Destino del vuelo:');
            while (destino == '') destino = prompt('Por favor, introduzca el Destino del vuelo:');
            if (destino == null) crearEliminar();
        var coste = prompt('Coste del vuelo:');
            while (coste == '' || isNaN(coste)) coste = prompt('Por favor, introduzca el Coste del vuelo:');
            if (coste == null) crearEliminar();
            coste = parseFloat(coste).toFixed(2);
        var escala = prompt('¿Tiene alguna escala?', 'S/N').toLowerCase();
            switch(escala){
                case 's':
                    escala = true;
                    break;
                case 'n':
                    escala = false;
                    break;
            }
            
        nuevoFlight = { id: (flights.length -1) + 1, to: origen, from: destino, cost: parseFloat(coste), scale: escala };
        flights.push(nuevoFlight);

        cont++; 
        addVuelo();
    }


    function addVuelo() {
        
        var otroVuelo = prompt('¿Quieres crear otro vuelo?', 'S/N').toLowerCase();
        switch(otroVuelo) {
            case 's':
                if (cont !== 15 ) vuelo();
                else alert('Lo siento, como mucho puedes añadir 15 vuelos. ¡Gracias!');
                break;
            case 'n':
                console.log('Los nuevos vuelos ya están añadidos. ¡Gracias!');
                mostrarVuelos();
                VuelosUltimaHora();
                break;
            default:
                addVuelo();
                break;
        }
    }  
}


function eliminar() {
    var elim = prompt('Introduzca el ID del vuelo que desea eliminar:');
    while (isNaN(elim) || elim == '') eliminar();
    if (elim == null) crearEliminar();
    
    elim = Number(elim);
    console.log(elim);

    //Menudo jaleo he metido aquí ¿?
    var flightsEliminar = [];
    
    for (flight of flights) {
        flightsEliminar.push(flight.id)
    }

    if (flightsEliminar.indexOf(elim) !== -1) {
        flights = flights.filter(function(flight) {
            return flight.id !== elim; 
        });
        addEliminar();
    } else {
        alert('El ID introducido no existe');
        addEliminar();
    }
}


function addEliminar() {
    var elimMas = prompt('¿Desea eliminar otro vuelo?', 'S/N').toLowerCase();
    switch (elimMas) {
        case 's':
            eliminar();
            break;
        case 'n':
            console.log('Los vuelos han sido eliminados.');
            mostrarVuelos();
            VuelosUltimaHora();
            break;
        default:
            addEliminar();
            break;
    }
}


function user() {
    var buscarPrecio = prompt('Precio del vuelo que busca:');
    var precioMax = [];
    var precioMin = [];
    var precioIgual = [];
    
    var igual = ``;
    var min = ``;
    var max = ``;


    while(isNaN(buscarPrecio)) 
        buscarPrecio = prompt('Por favor, introduzca un precio:');

    if (buscarPrecio == '' || buscarPrecio == null) 
        buscarPrecio = 0;
    
    buscarPrecio = parseFloat(buscarPrecio).toFixed(2);
    
    
      for (var i = 0; i < flights.length; i++){
        if (flights[i].cost == buscarPrecio){
          precioIgual.push(flights[i]);
          igual += `ID ${flights[i].id} destino ${flights[i].to} \n`;
        } else if (flights[i].cost < buscarPrecio) {
          precioMin.push(flights[i]);
          min += `ID ${flights[i].id} destino ${flights[i].to} por ${flights[i].cost}€ \n`;
        } else {
          precioMax.push(flights[i]);
          max += `ID ${flights[i].id} destino ${flights[i].to} por ${flights[i].cost}€ \n`;
        }
      }
      
      console.log(`· Los vuelos encontrados por ${buscarPrecio}€ son: \n${igual}`);
      console.log(`· Los vuelos encontrados por debajo de ${buscarPrecio}€ son: \n${min}`);
      console.log(`· Los vuelos encontrados que superan los ${buscarPrecio}€ son: \n${max}`);
}
    
    
mostrarVuelos();
adminOrUser();





  
