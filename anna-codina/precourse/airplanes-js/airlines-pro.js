const pointString = '.';
const flightString = 'El vuelo ';
const originString = ' con origen: ';
const destinyString = ', y destino: ';
const costString = ' tiene un coste de ';
const noAnswer = 'NO';
const yesAnswer = 'SI';
const farewell = 'Muchas gracias, hasta la próxima.';
const idString = 'Id vuelo';
const scaleTrue = ' y realiza escalas.';
const scaleFlase = ' y no realiza ninguna escala.';
const yesNoAnswer = 'Sí,No';
const todayFlightsString = 'Los vuelos de hoy son:';
const idNotFoundAlert = 'No hay ningun vuelo con ese ID.';

let flights = [
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
let contador = 11

function airlines() {
    const adminUser = 'ADMIN';
    const normalUser = 'USER';
    const typeUserAsk = 'Tipo de usuario:';
    const typeUserAnswerDefault = 'USER/ADMIN'
    const typeUserString = 'Introduzca su nombre de usuario:';
    const userNameString = 'Nombre de usuario';
    const welcome = 'Bienvenido/a ';
    const typeUserAlert = 'No se ha indicado tipo de usuario correcto.';
    let user = prompt(typeUserString, userNameString);
    console.log(welcome + user);
    console.log(todayFlightsString);
    friendlyFlights(flights);

    averagePrice();
    scaleCkecker();
    lastFlights();
    let userComprovator = undefined;
    do {
        let typeUser = prompt(typeUserAsk, typeUserAnswerDefault);
        typeUser = typeUser.toUpperCase();
        userComprovator = false;

        if (typeUser === adminUser) {
            adminUserFlow();
            userComprovator = true;
        } else if (typeUser === normalUser) {
            normalUserFlow();
            userComprovator = true;
        } else {
            alert(typeUserAlert)
        }
    } while (!userComprovator)
}

function friendlyFlights(arrayFlights) {
    for (let i of arrayFlights) {
        let scale = i.scale ? scaleTrue : scaleFlase;

        let flight = flightString + i.id + originString + i.from + destinyString + i.to + costString + i.cost + scale;
        console.log(flight);
    }
}

function averagePrice() {
    const priceAverageString = 'El precio medio de los vuelos es ';
    let price = 0;
    for (let i of flights) {
        price += i.cost;
    }
    let priceAverage = price / flights.length;
    console.log(priceAverageString + priceAverage.toFixed(2) + pointString);
}

// checker de escalas en los vuelos.
function scaleCkecker() {
    const totalFlightsString = 'Hay un total de ';
    const totalFlightScaleEnd = ' de vuelos con escala. Son los siguientes:';
    const noScaleFLight = 'No hay vuelos con escalas.';
    let total = 0
    // Se contabilizan el nº de vuelos que tienen escalas.
    for (let i of flights) {
        if (i.scale) {
            ++total;
        }
    }
    // Se valora si el nº de escalas es igual a 0 (en caso que que asi sea se avisará que no hay vuelos con escalas.)
    if (total !== 0) {
        console.log(totalFlightsString + total + totalFlightScaleEnd)
        for (let i of flights) {
            if (i.scale) {
                console.log(flightString + i.id + originString + i.from + destinyString + i.to + costString + i.cost + pointString);
            }
        }
    } else {
        console.log(noScaleFLight);
    }
}

// Indica los ultimos vuelos del día independientemente del nº de vuelos en flights:
function lastFlights() {
    const fiveLastFlightString = 'Los últimos 5 vuelos de hoy son:';
    const idStringItem = 'Id: ';
    const destined = ' destinado a ';
    console.log(fiveLastFlightString);
    let indice = flights.length - 5;
    let listLastFlights = flights.slice(indice);
    for (let i in listLastFlights) {
        let id = listLastFlights[i].id;
        let to = listLastFlights[i].to;
        console.log(idStringItem + id + destined + to);
    }
}

function adminUserFlow() {
    const actionQuestion = '¿Que acción quiere realizar? Borrar vuelo existente / Crear un nuevo vuelo.';
    const answerActionDefault = 'Borrar/Crear';
    const erraseAnswer = 'BORRAR';
    const createAnswer = 'CREAR';
    const alertAccionQuestion = 'No se ha introducido una acción adecuadamente.';
    const newActionQuestion = 'Quieres realizar una nueva acción?';
    let newAdminAction;
    do {
        let adminAction = prompt(actionQuestion, answerActionDefault);

        if (adminAction.toUpperCase() === erraseAnswer) {
            erraseFlight();
        } else if (adminAction.toUpperCase() === createAnswer) {
            createFlight();
        } else {

            alert(alertAccionQuestion);
        }
        newAdminAction = prompt(newActionQuestion, yesNoAnswer);
    } while (newAdminAction.toUpperCase() !== noAnswer);
    console.log(farewell);
}

function erraseFlight() {
    const erraseIdQuestion = 'Indique la ID del vuelo que quiere borrar';
    const errasedFlightFriendly = 'El vuelo borrado es: Id: ';
    let erraseId = prompt(erraseIdQuestion, idString);
    erraseId = parseInt(erraseId);
    let existeId = false;
    for (let i in flights) {
        if (erraseId === flights[i].id) {
            existeId = true;
            let scale = flights[i].scale ? scaleTrue : scaleFlase;
            console.log(errasedFlightFriendly + flights[i].id + originString + flights[i].from + destinyString + flights[i].to + costString + flights[i].cost + scale);
            flights.splice(i, 1);
        }
    }
    if (!existeId) {
        alert(idNotFoundAlert);
    }
}

function createFlight() {
    const maxFlightAlert = 'Se ha llegado al máximo de vuelos diarios.';
    const cityName = 'Nombre de la ciudad.';
    const destinyFlight = 'Destino del vuelo:';
    const originLocation = 'Lugar de orgien:';
    const costFlight = 'Coste del vuelo: ';
    const priceString = 'Precio';
    const scaleQuestion = '¿El vuelo contiene escalas?';
    let newFlight = []
    if (flights.length >= 15) {
        alert(maxFlightAlert)
    } else {
        let newId = contador++;
        let newTo = prompt(destinyFlight, cityName);
        let newFrom = prompt(originLocation, cityName)
        let newCost = prompt(costFlight, priceString);
        //Conversión de string a num:
        newCost = parseInt(newCost);
        let newScale = prompt(scaleQuestion, yesNoAnswer)
        //conversión de string a booleans:
        newScale = newScale === yesAnswer;
        newFlight = { id: newId, to: newTo, from: newFrom, cost: newCost, scale: newScale };
        flights.push(newFlight);
        console.log(todayFlightsString);
        friendlyFlights(flights);
    }
}

// función que controla las acciones del usuario.
function normalUserFlow() {
    const questionFilter = 'El precio que quiere buscar es mayor, menor o igual:';
    const defaultFilterAnswer = 'Mayor/Menor/Igual o >/</=.';
    const searchFlightString = 'Busco un vuelo que sea ';
    const aString = ' a:';
    const priceReferenceString = 'Precio referencia.';
    const noMatchAlert = 'No hay ningun vuelo con esos criterios.';
    const newSearchQuestion = "¿Quieres realizar otra busqueda?"
    let confirmUserNextAction = undefined;
    do {
        let accionUser = prompt(questionFilter, defaultFilterAnswer);
        accionUser = accionUser.toLowerCase();
        let referencePrice = prompt(searchFlightString + accionUser + aString, priceReferenceString);
        referencePrice = parseInt(referencePrice);
        let vuelosBuscados = [];
        // se realiza busqueda con filtros ed usuario y se comprueba si existen resultado para ella. Avisando al usuario si no hubiera coincidencia.
        let checker = userFilter(accionUser, flights, referencePrice, vuelosBuscados);

        if (!checker) {
            alert(noMatchAlert);
        } else {
            buyValidation(vuelosBuscados);
        }
        confirmUserNextAction = confirm(newSearchQuestion);
    } while (confirmUserNextAction)
    console.log(farewell);
}

// Funcion que controla los filtros de la compra del usuario.  
function userFilter(comparador, arrayOriginal, indice, arrResultados) {
    const more = 'mayor';
    const moreSymbol = '>'
    const morePriceString = 'Los vuelos con mayor coste que ';
    const areString = 'son:';
    const noCorrectSymbolAlert = 'No se ha indicado de forma correcta si es mayor, menor o igual';
    const minor = 'menor';
    const minorSymbol = '<';
    const minorPriceString = 'Los vuelos con menor coste que ';
    const equal = 'igual';
    const equalSymbol = '=';
    const equalString = 'Los vuelos con coste igual a ';
    let checker = false;

    if (comparador === more || comparador === moreSymbol) {
        for (let j of arrayOriginal) {
            if (j.cost > indice) {
                checker = true;
                arrResultados.push(j);
            }
        }
        console.log(morePriceString + indice + areString);
        friendlyFlights(arrResultados);
    } else if (comparador === minor || comparador === minorSymbol) {
        for (let j of arrayOriginal) {
            if (j.cost < indice) {
                checker = true;
                arrResultados.push(j);
            }
        }
        console.log(minorPriceString + indice + areString);
        friendlyFlights(arrResultados);
    } else if (comparador === equal || comparador === equalSymbol) {
        for (let j of arrayOriginal) {
            if (j.cost === indice) {
                arrResultados.push(j);
                checker = true;
            }
            console.log(equalString + indice + areString);
            friendlyFlights(arrResultados);
        }
    } else {
        alert(noCorrectSymbolAlert);
    }
    return checker;
}

// valida la compra hecha por el usuario.
function buyValidation(actualBuyFlight) {
    // En caso de que haya coincidencias se pregunta al usuario que vuelo quiere adquirir:
    const thanksBuy = 'Gracias por su compra';
    const idBuyQuestion = 'Indique la ID del vuelo que desee comprar';
    const buyString = 'Su vuelo comprado es: Id: ';
    const newIdQuestion = "¿Quieres introducir otra ID?";
    do {
        let idBuy = prompt(idBuyQuestion);
        idBuy = parseInt(idBuy);
        let buyFlight = [];
        let idchecker = false;

        for (let i of actualBuyFlight) {
            if (i.id === idBuy) {
                idchecker = true;
            }
        }

        if (!idchecker) {
            alert(idNotFoundAlert);
        } else {
            idBuy = parseInt(idBuy);
            for (let i of actualBuyFlight) {
                if (i.id === idBuy) {
                    buyFlight = i;
                }
            }
            let escalas = buyFlight.scale ? scaleTrue : scaleFlase;
            console.log(buyString + buyFlight.id + originString + buyFlight.from + destinyString + buyFlight.to + costString + buyFlight.cost + escalas);
            console.log(thanksBuy);
        }
    } while (confirm(newIdQuestion));
}
