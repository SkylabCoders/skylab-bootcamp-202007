let vuelos = [
    {id: 0, from: 'Barcelona', to: 'Madrid', precio: 90, escalas: false},
    {id: 1, from: 'Vigo', to: 'M\u00E1laga', precio: 100, escalas: false},
    {id: 2, from: 'Madrid', to: 'Lisboa', precio: 150, escalas: false},
    {id: 3, from: 'Amsterdam', to: 'Par\u00EDs', precio: 140, escalas: false},
    {id: 4, from: 'Barcelona', to: 'Berl\u00EDn', precio: 195, escalas: false},
    {id: 5, from: 'Kiev', to: 'Londres', precio: 250, escalas: false},
    {id: 6, from: 'Barcelona', to: 'Mallorca', precio: 75, escalas: false},
    {id: 7, from: 'Madrid', to: 'San Francisco', precio: 550, escalas: true},
    {id: 8, from: 'Barcelona', to: 'Singapur', precio: 700, escalas: true},
    {id: 9, from: 'Bilbao', to: 'M\u00E1laga', precio: 65, escalas: false}
];

var name;

function greeting() {
    // debugger
    name = prompt('Introduzca su nombre por favor:')
    if (name === null || name === undefined) {
        return
    } else if (isNaN(parseInt(name)) == false || name == ''){
        greeting();
    }
    window.alert("Bienvenido/a " + name + '. ' 
                 + 'Estos son todos los vuelos disponibles hoy:\n\n')
}

// logs all the available flights to console
function salidas() {
    for (let i = 0; i < vuelos.length; i++) {
        if (vuelos[i].escalas == false) {
            console.log('id: ' + vuelos[i].id + '. Vuelo sin escalas de ' + vuelos[i].from + ' a ' 
                        + vuelos[i].to + ' por ' + vuelos[i].precio + '\u20AC');
        } else {
            console.log('id: ' + vuelos[i].id + '. Vuelo con escalas de ' + vuelos[i].from + ' a ' 
                        + vuelos[i].to + ' por ' + vuelos[i].precio + '\u20AC');
        }  
    }     
}

// logs to console average flight cost 
function costeMedio(){
    let medio = 0;
    for (let i = 0; i < vuelos.length; i++) {
        medio += vuelos[i].precio;
    }
    medio = medio / (vuelos.length);
    console.log(`\nEl coste medio de los billetes es de ${medio}\u20AC`)
}

// logs to console what flights have stops
function escalas() {
    console.log('\nLos vuelos con escalas son los siguientes:')
    for (let i = 0; i < vuelos.length; i++) {
        if (vuelos[i].escalas == true) {
            console.log('* ' + vuelos[i].from + ' - ' + vuelos[i].to)
        }
    }
}

// logs to console the last 5 flights 
function ultimosVuelos() {
    console.log('\nLos últimos cinco vuelos del día son:');
    for (let i = 5; i < 10; i++) {
        console.log('* ' + vuelos[i].from + ' - ' + vuelos[i].to);
    }
}

// prompts de user to choose between User or Admin options
function userAdmin () {
    let answer = '';
    while (answer !== 'admin' && answer !== 'user') {
        answer = window.prompt('User or Admin?').toLowerCase();
        if (answer === null || answer === '') {
            return
        }
    }
    switch (answer) {
        case 'admin':
            admin();
            break;
        case 'user':
            user();
        }
    }    
 

// greets the user and asks for cost of flight to look for
function user() {
    alert('Bienvenido/a usuario.');
    let vuelo;
    vuelo = prompt('Busque vuelo por precio', 'precio');
    console.log('\n\nEstos son los vuelos disponibles:\n')    
    orderFlights(vuelo, vuelos);
}
    


// creates 3 arrays for flights: more expensive, cheaper or same price as 
function orderFlights (vuelo) {
    let caros = [];
    let baratos = [];
    let exacto = [];
    for (let i = 0; i < vuelos.length; i++) {
        if(vuelos[i].precio > vuelo) {
            caros.push(vuelos[i]);
        } else if (vuelos[i].precio < vuelo) {
            baratos.push(vuelos[i]);
        } else {
            exacto.push(vuelos[i]);
            console.log('\nEl vuelo con precio exacto es: ');
            console.log('* ' + 'id ' + exacto[0].id + ': ' + exacto[0].from + ' - ' + exacto[0].to 
                        + ' por ' + exacto[0].precio + '\n');
            }
        }
    
    // sorts the caros and baratos arrays from most expensive to cheapest
    function compara(a, b) {
        let vueloA = a.precio;
        let vueloB = b.precio;

        let comparacion = 0;
        if (vueloA > vueloB) {
            return 1;
        } else if (vueloA < vueloB) {
            return -1;
        }
        return comparacion;
    }
    
    // logs to console the next cheaper and more expensive flights, depending on user input
    caros.sort(compara);
    baratos.sort(compara);
    console.log('\nEl vuelo más caro es:');
    console.log('* ' + 'id ' + caros[0].id + ': ' + caros[0].from + ' - ' + caros[0].to + ' por ' + caros[0].precio + '\n');
    console.log('\nEl vuelo más barato es: ');
    console.log('* ' + 'id ' + baratos[baratos.length - 1].id + ': ' + baratos[baratos.length - 1].from + ' - ' + baratos[baratos.length - 1].to
                + ' por ' + baratos[baratos.length - 1].precio + '\n');

    let compra = parseInt(prompt('Introduzca el id del vuelo que quiere comprar'));
    if (compra == null || compra == ''){
        return;
    } else {
        switch (compra) {
            case caros[0].id:
                alert('Ha comprado el vuelo ' + caros[0].from + ' - ' + caros[0].to + '. Gracias.');
                break;
            case baratos[baratos.length - 1].id:
                alert('Ha comprado el vuelo ' + baratos[baratos.length - 1].from + ' - ' + baratos[baratos.length - 1].to + '. Gracias.');
                break;
            default:
                alert('Ha comprado el vuelo ' + exacto[0].from + ' - ' + exacto[0].to + '. Gracias.');

        }
    }    
}

// prompts user to choose between create or delete flights
function admin() {
    const admins = prompt('Introduce 1 para crear vuelos\n' 
                        + 'Introduce 2 para borrar vuelos');
    if (admins == null || admins == '') {
        alert('Sesion cerrada.\nHasta pronto');
        return;
    } else if (admins == '1'){
        crearVuelos(vuelos);
    } else {
        borrarVuelos(vuelos);
    }    

}

// deletes flights
function borrarVuelos() {
    let borrar = parseInt(prompt("Introduce el id del vuelo que quieres borrar", 'id'));
    if (borrar == null || borrar == '') {
        alert('Sesión cerrada.\nHasta pronto.');
        return;
    } else {
        for (let i = 0; i < vuelos.length; i++) {   
            if (borrar == vuelos[i].id) {
                let index = vuelos.findIndex(x => x.id == vuelos[i].id);  //finds the index number of the id to delete
                vuelos.splice(index, 1);
                for (let i = 0; i < vuelos.length; i++) {
                    if (vuelos[i].escalas == false) {
                        console.log('id: ' + vuelos[i].id + '. Vuelo sin escalas de ' + vuelos[i].from + ' a ' 
                                    + vuelos[i].to + ' por ' + vuelos[i].precio + '\u20AC');
                    } else {
                        console.log('id: ' + vuelos[i].id + '. Vuelo con escalas de ' + vuelos[i].from + ' a ' 
                                    + vuelos[i].to + ' por ' + vuelos[i].precio + '\u20AC');
                    } 
                }
                admin();
            }
        }
    }
}

// creates new flights 
function crearVuelos(){
    while (vuelos.length < 15) {
        if (confirm('¿Quieres introducir nuevos vuelos en el sistema?')) {
            let nuevoVuelo = {};
            let crearVuelo = ['id', 'from', 'to', 'precio', 'escalas']
            let text = ['id number', 'from', 'to', 'price in numbers', 'true/false']
            for (let i = 0; i < 5; i++) {
                let crear = prompt('Introduce ' + crearVuelo[i], text[i]);
                if (crear == null || crear == '') {
                    alert('Sesión cerrada.\nHasta pronto.');
                    return;
                } else {
                    if (crearVuelo[i] == 'id' || crearVuelo[i] == 'precio') {
                        crear = parseInt(crear);
                    } else if (crearVuelo[i] == 'escalas') {
                        if (crear == 'true') {
                            crear = !!crear;
                        } else {
                            crear = !crear;
                        }
                    }
                    nuevoVuelo[crearVuelo[i]] = crear;
                }
            }

            vuelos.push(nuevoVuelo);
            for (let i = 0; i < vuelos.length; i++) {
                if (vuelos[i].escalas == false) {
                    console.log('id: ' + vuelos[i].id + '. Vuelo sin escalas de ' + vuelos[i].from + ' a ' 
                                + vuelos[i].to + ' por ' + vuelos[i].precio + '\u20AC');
                } else {
                    console.log('id: ' + vuelos[i].id + '. Vuelo con escalas de ' + vuelos[i].from + ' a ' 
                                + vuelos[i].to + ' por ' + vuelos[i].precio + '\u20AC');
                }  
            } 
            continue;   

        } else {
            alert('Sesión cerrada.\nHasta pronto.');
        }

    }
        
    alert('Has alcanzado el máximo de 15 vuelos.\n' 
    + 'No es posible crear más.');
    return;
        
}

function airlinesPro() {
    greeting();
    salidas();
    costeMedio();
    escalas();
    ultimosVuelos();
    userAdmin();
}

airlinesPro();
    
        
        
       
    
