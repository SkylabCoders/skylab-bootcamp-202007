// Variable global con los vuelos diarios
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
]
var contador = 11

// Funcion principal que administra las acciónes del usuario
function airlines () {
    var usuario = prompt('Introduzca su nombre de usuario:', 'Nombre de usuario');
    console.log('Bienvenido/a ' + usuario);
    console.log('Los vuelos de hoy son:');
    presentacionVuelos(flights);
  
    precioMedio();
    verificarEscalas();
    ultimosVuelos();
    do {
        var typeUser = prompt('Tipo de usuario:', 'USER/ADMIN');
        typeUser = typeUser.toUpperCase();
        var userComprovator = false;

        if (typeUser == 'ADMIN'){
            admin();
            userComprovator = true;
        } else if (typeUser == 'USER') {  
            user();
            userComprovator = true;
        } else {
            alert('No se ha indicado tipo de usuario correcto.')
        }
    } while (!userComprovator)
}

// Conversor de entradas a un formato amigable por el usuario
function presentacionVuelos (array){
    for ( i of array) {
        var escalas = i.scale ? ' y realiza escalas.' : ' y no realiza ninguna escala.' ;

        var vuelo = 'El vuelo '+ i.id + ' con origen: ' + i.from + ', y destino: ' + i.to + ' tiene un coste de ' + i.cost + escalas;
        console.log(vuelo);
    } 
}

// Calculador del precio medio de los vuelos independientemente del nº de vuelos en flights.
function precioMedio () {
    var precio = 0;
    for (i of flights) {
        precio += i.cost;
    }
    var precioMed = precio / flights.length;
    console.log('El precio medio de los vuelos es ' + precioMed.toFixed(2) + '.');
}

// Comprobador de escalas en los vuelos.
function verificarEscalas () {   
    var total = 0
    // Se contabilizan el nº de vuelos que tienen escalas.
    for (i of flights) {
        if (i.scale){
            ++total;
        }
    }
    // Se valora si el nº de escalas es igual a 0 (en caso que que asi sea se avisará que no hay vuelos con escalas.)
    if (total !== 0) {
        console.log('Hay un total de ' + total + ' de vuelos con escala. Son los siguientes:' )
        for (i of flights) {
            if (i.scale) {
            console.log('El vuelo '+ i.id +' con origen: ' + i.from + ', y destino: ' + i.to + ' tiene un coste de ' + i.cost + '.');
            }
        }
    } else {
        console.log('No hay vuelos con escalas.')
    }
}

// Indica los ultimos vuelos del día independientemente del nº de vuelos en flights:
function ultimosVuelos() {
    console.log('Los últimos 5 vuelos de hoy son:');
    var indice = flights.length - 5;
    var listaUltimosVuelos = flights.slice(indice);
    for (var i in listaUltimosVuelos) {
        var id = listaUltimosVuelos[i].id;
        var to = listaUltimosVuelos[i].to;
        console.log('Id: ' + id + ' destinado a ' + to);
    }
};

// Administra las acciones que puede realizar cuando el usuario es ADMIN
function admin(){
    var nuevaAccionAdmin;
    do {
        var accionAdmin = prompt('¿Que acción quiere realizar? Borrar vuelo existente / Crear un nuevo vuelo.', 'Borrar/Crear');
        
        if (accionAdmin.toUpperCase() == 'BORRAR'){
        borrarVuelo();
        } else if (accionAdmin.toUpperCase() == 'CREAR') {
        crearNuevoVuelo();
        } else {

            alert('No se ha introducido una acción adecuadamente.');
        }
        nuevaAccionAdmin = prompt('Quieres realizar una nueva acción?', 'Sí,No');
    } while (nuevaAccionAdmin.toUpperCase() !== 'NO');
console.log('Muchas gracias, hasta la próxima.');
};

//función para borrar vuelos mediante la ID
function borrarVuelo(){
    var idBorrar = prompt('Indique la ID del vuelo que quiere borrar', 'Id vuelo');
    //Conversión de string a num:
    idBorrar = parseInt(idBorrar);
    var existeId = false;
    for (var i in flights) {
        if (idBorrar == flights[i].id){
            existeId = true;
            var escalas = flights[i].scale ? ' y con escalas.' : ' y sin escalas.' ;
            console.log('El vuelo borrado es: Id: '+ flights[i].id + ' con origen: ' + flights[i].from + ', y destino: ' + flights[i].to + ' con un coste de ' + flights[i].cost + escalas);
            flights.splice(i,1);
        }
    }
    // Se comprobará si la ID introducida existe o no para avisar al usuario en caso de que no existe.
    if (!existeId){
            alert('No hay ningun vuelo con ese ID.');
    }
}

// Función para crear vuelos
function crearNuevoVuelo(){
    var nuevoVuelo = []
    // Aviso al usuario que hay más de 15 vuelos
    if (flights.length >= 15){
        alert('Se ha llegado al máximo de vuelos diarios.')
    } else {
        //Información que se le pide al usuario para crear el nuevo vuelo.  
        //la id se asigna de forma autmatica usando la variable contador.  
        var newId = contador++;
        var newTo = prompt('Destino del vuelo:', 'Nombre de la ciudad.');
        var newFrom = prompt('Lugar de orgien:', 'Nombre de la ciudad.')
        var newCost = prompt ('Coste del vuelo:', 'Precio');
        //Conversión de string a num:
        newCost = parseInt(newCost); 
        var newScale = prompt ('¿El vuelo contiene escalas?', 'S/N')
        //conversión de string a booleans:
        newScale = newScale == 'S'|| newScale == 's';
        nuevoVuelo = {id: newId, to: newTo, from: newFrom, cost: newCost, scale: newScale};
        flights.push(nuevoVuelo);
        console.log('Los vuelos de hoy son:');
        presentacionVuelos(flights);
    }
}

// función que controla las acciones del usuario.
function user(){
    do {
        var accionUser = prompt('El precio que quiere buscar es mayor, menor o igual:', 'Mayor/Menor/Igual o >/</=.');
        accionUser = accionUser.toLowerCase();
        var precioReferencia = prompt('Busco un vuelo que sea ' + accionUser +' a:', 'Precio referencia.');
        precioReferencia = parseInt(precioReferencia);
        var vuelosBuscados = [];
        // se realiza busqueda con filtros ed usuario y se comprueba si existen resultado para ella. Avisando al usuario si no hubiera coincidencia.
        var comprobador = filtrosUsuario(accionUser, flights, precioReferencia, vuelosBuscados);
        
        if (!comprobador){
            alert('No hay ningun vuelo con esos criterios.');
        } else {
            buyValidation(vuelosBuscados);
        }
        var confirmUserNextAction = confirm("¿Quieres realizar otra busqueda?");
    } while(confirmUserNextAction)
    console.log('Muchas gracias, hasta la próxima.');
}

// Funcion que controla los filtros de la compra del usuario.  
function filtrosUsuario (comparador, arrayOriginal, indice, arrResultados){
    comprobador = false;
    if (comparador == 'mayor'|| comparador == '>') {
        for (var j of arrayOriginal){
            if (j.cost > indice){
                comprobador = true;
                arrResultados.push(j);
            }
        }
        console.log('Los vuelos con mayor coste que ' + indice + ' son:');
        presentacionVuelos(arrResultados);
    } else if (comparador == 'menor'|| comparador == '<'){
        for (var j of arrayOriginal){
            if (j.cost < indice){
                comprobador = true;
                arrResultados.push(j);
            }
        }
        console.log('Los vuelos con menor coste que ' + indice + ' son:');
        presentacionVuelos(arrResultados);
    } else if (comparador == 'igual'|| comparador == '='){
        for (var j of arrayOriginal){
            if (j.cost == indice){
                arrResultados.push(j);
                comprobador = true;
            }
            console.log('Los vuelos con coste igual a ' + indice + ' son:');
            presentacionVuelos(arrResultados);
        }
    } else {
        alert('No se ha indicado de forma correcta si es mayor, menor o igual');
    }
    return comprobador;
}

// valida la compra hecha por el usuario.
function buyValidation (vuelosBusquedaActual){
    // En caso de que haya coincidencias se pregunta al usuario que vuelo quiere adquirir:
    do {
        var idCompra = prompt('Indique la ID del vuelo que desee comprar', 'Id del vuelo');
        idCompra = parseInt(idCompra);
        var vueloComprado = [];
        var idComprobador = false;

        for (var i of vuelosBusquedaActual){
            if (i.id === idCompra){
            idComprobador = true;
            }
        }

        if (!idComprobador) {
            alert("No hay ningun vuelo con esa ID.");
        } else {
            idCompra = parseInt(idCompra);
            for (i of vuelosBusquedaActual){
                if (i.id == idCompra){
                    vueloComprado = i;
                }
            }
            //Se valida compra y se muestra al usuario el vuelo comprado.
            var escalas = vueloComprado.scale ? ' y realiza escalas.' : ' y no realiza ninguna escala.' ;
            console.log('Su vuelo comprado es: Id: '+ vueloComprado.id + ' con origen: ' + vueloComprado.from + ', y destino: ' + vueloComprado.to + ' tiene un coste de ' + vueloComprado.cost + escalas);
            console.log('Gracias por su compra');
        }
    } while(confirm("¿Quieres introducir otra ID?"));
}
