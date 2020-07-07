function inferiorA(a, lim) {
    var result = [];
    for (i in a) {
        if (a[i]["cost"] <= lim) {
            result.push(a[i]);
        }
    }
    return result;
}

function superiorA(a, lim) {
    var result = [];
    for (i in a) {
        if (a[i]["cost"] >= lim) {
            result.push(a[i]);
        }
    }
    return result;
}

function igualA(a, lim) {
    var result = [];
    for (i in a) {
        if (a[i]["cost"] == lim) {
            result.push(a[i]);
        }
    }
    return result;
}

function entreAyA(a, min,max) {
    var result = [];
    for (i in a) {
        if (a[i]["cost"] >= min && a[i]["cost"] <= max) {
            result.push(a[i]);
        }
    }
    return result;
}


function airlines() {
    //Declaramos las variables
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
        { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }],
        acc = 0,
        escales = 0,

        //Preguntamos el nombre al usuario y le damos la bienvenida
        name = prompt("¿Com te llamas?");
    console.log("Welcome to Skylab airlines " + name);

    //Recorremos "flights" y imprimimos de forma comoda toda la informacion, sumamos todos los costes a "acc" y contamos los vuelos con escalas
    for (i in flights) {
        console.log("El vuelo con origen: " + flights[i]["from"] + " y destino a: " + flights[i]["to"] + " cuesta " + flights[i]["cost"] + "€ y" + ((flights[i]["scale"] == false) ? " no" : "") + " hace escalas");
        acc += flights[i]["cost"];
        if (flights[i]["scale"] == true) {
            escales += 1;
        }
    }

    //Imprimimos la media de precios, los vuelos con escalas y el destino de los últimos 5 vuelos
    console.log("La media de precio de todos los vuelos es: " + (acc / flights.length).toFixed(2) + "€");
    console.log("En total " + escales + " vuelos hacen escalas");

    console.log("Los últimos 5 vuelos tienen destino a:");
    for (i = 6; i < flights.length; i++) {
        console.log("    " + flights[i]["to"]);
    }

    //Preguntamos al usuario si es ADMIN
    if (confirm("¿Eres ADMIN?")) {
        do {
            //Si ya hay 15 vuelos salta la alerta
            if (flights.length == 15) {
                alert("Ya hay 15 vuelos añadidos");
                break;
            }
            //Pedimos la información al usuario y lo guardamos en flights
            var arr = (prompt("Introduce la información en el orden determinado1", "Barcelona,Menorca,200,false").split(","));
            flights.push({ id: flights.length, to: arr[0], from: arr[1], cost: arr[2], scale: arr[3] });
        }
        while (confirm("¿Quieres añadir más vuelos?"));

        do {
            //Imprimimos la informacion de los vuelos con la ID delante
            for (i in flights) {
                console.log("(" + flights[i]["id"] + ") El vuelo con origen: " + flights[i]["from"] + " y destino a: " + flights[i]["to"] + " cuesta " + flights[i]["cost"] + "€ y" + ((flights[i]["scale"] == false) ? " no" : "") + " hace escalas");
            }

            //Pedimos que introduzca los IDs a eliminar
            var del = prompt("Introduce el ID de los vuelos que quieres eliminar", "0,5,2").split(",");
            //Eliminamos de "flights" los vuelos
            for (i in del) {
                for (a in flights) {
                    if (flights[a]["id"] == del[i]) {
                        delete flights[a];
                    }
                }
            }
        }
        while (confirm("¿Quieres eliminar algun vuelo?"));

        //Imprimim els vols restants
        for (i in flights) {
            console.log("(" + flights[i]["id"] + ") El vuelo con origen: " + flights[i]["from"] + " y destino a: " + flights[i]["to"] + " cuesta " + flights[i]["cost"] + "€ y" + ((flights[i]["scale"] == false) ? " no" : "") + " hace escaleras");
        }
    } else {
        var lim = 0,
            result = [];
        do {
            result = [];
            switch (prompt("Como quieres filtrar los precios? (a) Menos de X€ / (b) Más de X€ / (c) Igual a X€ / (d) Entre X€ y X€", "a")) {
                case 'a':
                    lim = parseInt(prompt("¿Que limite de precio quieres poner?", "2000"));
                    result = inferiorA(flights, lim);
                    break;

                case 'b':
                    lim = parseInt(prompt("¿A partir de que precio quieres buscar?", "2000"));
                    result = superiorA(flights, lim);
                    break;

                case 'c':
                    lim = parseInt(prompt("¿Que precio quieres filtrar?", "2000"));
                    result = igualA(flights, lim);
                    break;

                case 'd':
                    result = entreAyA(flights,prompt("¿Que mínimo quieres poner?","500"),prompt("¿I que máximo?","1200"));
                    break;
            }
            if(result.length != 0){
                for (i in result) {
                    console.log("(" + result[i]["id"] + ") El vuelo con origen: " + result[i]["from"] + " y destino a: " + result[i]["to"] + " cuesta " + result[i]["cost"] + "€ y" + ((result[i]["scale"] == false) ? " no" : "") + " hace escaleras");
                }
            }
            else{
                console.log("¡No hay vuelos a mostrar!");
            }
            if(prompt("¿Quieres comprar algun vuelo? Indica su id","4") != ""){
                console.log("Gracias por su compra, vuelva pronto.");
            }
            
            
        }
        while (confirm("¿Quieres volver a filtrar los resultados?"));
        console.log("¡Adioh mu buenas!");
    }
}
