//Code by Gabriel Penalva on Skylabcoders Academy 08/06/2020
var MAX_FLIGHTS = 15;

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
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }];

function getName(str) {
    var rExp = /^[A-Za-z]+$/;
    var nameL;
    do {
        nameL = prompt(str);
        if (nameL.match(rExp));
        console.log("Please, use JUST Letters.")
    } while (!nameL.match(rExp));
    return nameL;
}

function showAll(flights) {
    console.log("Flights Info:");
    for (x in flights) {
        console.log("Flingt nº", flights[x].id, "goes To:", flights[x].to, ", comes From:", flights[x].from, "Cost:", flights[x].cost, "€ and", showScale(flights[x].scale));
    }
}

function showScale(boolean) {
    if (boolean)
        return ("has a scale.");
    else
        return ("has not a scale.");
}

function showMediumCost(flights) {
    var sum = 0;
    for (x in flights) {
        sum += flights[x].cost;
    }
    return ((Number.parseFloat(sum / (flights.length))).toFixed(2));

}

function showOnlyScales(flights) {
    console.log("Flights with scale:");
    for (x in flights) {
        if (flights[x].scale)
            console.log("Flingt nº", flights[x].id, "goes To:", flights[x].to, ", comes From:", flights[x].from, "Cost:", flights[x].cost, "€ and", showScale(flights[x].scale));

    }
}

function showLastFligthDestiny(flights) {
    console.log("Destiny of last 5 fligths:");
    var trying = flights.slice(-5);
    for (x in trying) {
        console.log("Flingt nº", trying[x].id, "Destination:", trying[x].to);
    }
}

function getNum(str) {
    var numbers;
    do {
        numbers = prompt(str);
        if (isNaN(numbers) || numbers == '')
            console.log("Must be a number!, Cannot be empty");
    } while (isNaN(numbers) || numbers == '');
    return numbers;
}

function checkId(idToCheck){
    console.log(flights.length);
    for (var x = 0; x < flights.length; x++) {
        if (flights[x].id == idToCheck){
            return false;
        }
    }
    return true;
}
function createFlight() {
    var long = flights.length;
    var idi;
    if (long < MAX_FLIGHTS) {
        do{
            idi = getNum("ID?");
            if(!checkId(idi)){
                console.log("Esa ID ya existe!");
            }
        }while(!checkId(idi));
        flights.push([]);
        flights[long].id = idi;
        flights[long].to = getName("To:?");
        flights[long].from = getName("From:?");
        flights[long].cost = getNum("Cost?");
        flights[long].scale = confirm("Scale?\n CANCELAR = NO, ACEPTAR = YES");
        console.log("New fligth created:");
        showAll([flights[long]]);
    } else {
        alert("You can not add more flights!\n", MAX_FLIGHTS, "is the maximum");
    }

}

function deleteFlight() {
    var ide;
    var deleted = false;
    if (flights.length > 0) {
        ide = getNum("Type the ID of fligth to delete");
        for (var i = 0; i < flights.length; i++) {
            if (flights[i].id == ide) {
                console.log("deleting:");
                showAll(flights.splice(i, 1));
                deleted = true;1
            }
        }
        if (deleted)
            console.log("Delete succesful");
        else
            console.log("Delete failed, id not found?");
    } else {
        console.log("There are no flights to delete, add one first.");
    }
}

function serchByHigh() {
    flights.sort(function (a, b) { return b.cost - a.cost });
    showAll(flights);
}
function serchByLow() {
    flights.sort(function (a, b) { return a.cost - b.cost });
    showAll(flights);
}

function serchByPrice(costToSerch) {
    var array = [];
    console.log(costToSerch);
    for (x in flights) {
        if (flights[x].cost == costToSerch) {
            array.push(flights[x]);
        }
    }
    return array;
}


var name = getName("Username:");

console.log("Hello", name, "! Welcome!");
showAll(flights);
console.info("The medium cost is:", showMediumCost(flights));
showOnlyScales(flights);
showLastFligthDestiny(flights);

var user;
var passControl = false;
var createDelete;
var option;
var costToSerch;
var idToBuy;
while (!passControl) {
    user = (getName("For Admin user type, 'ADMIN'. \n for a normal user type: 'USER'.\n for exit type 'EXIT'")).toUpperCase();
    console.log(user);
    switch (user) {
        case 'USER':
            do {
                option = parseInt(getNum("Choose:\n 1. Higer prices. \n 2. Lower prices \n 3. Exactly price \n 4. Buy a flight with ID\n 5.EXIT"));
                switch (option) {
                    case 1:
                        serchByHigh();

                        break;
                    case 2:
                        serchByLow();

                        break;
                    case 3:
                        costToSerch = parseInt(getNum("Enter the price you want"));
                        showAll(serchByPrice(costToSerch));
                        break;
                    case 4:
                        idToBuy = parseInt(getNum("Enter the id of flight you want to buy"));
                        if (!checkId(idToBuy))
                            console.log("Gracias por su compra, vuelva pronto.");
                        else
                            console.log("Error, el vuelo seleccionado no existe");
                        
                        break;

                    case 5:
                        console.log("Exit from USER mode.");
                        break;
                    default:
                        console.log("Bad answer, try again");
                }


            } while (option != 5);

            break;
        case 'ADMIN':
            do {
                option = parseInt(getNum("Choose:\n 1. Create\n 2.Delete\n 3.Exit"));
                switch (option) {
                    case 1:
                        
                        createFlight();
                        break;
                    case 2:
                        deleteFlight();
                        break;
                    case 3:
                        console.log("Exit from ADMIN mode.");
                        break;
                    default:
                        console.log("Bad answer, try again");
                }
            } while (option != 3);

            break;
        case "EXIT":
            passControl = true;
            break;

        default:
            console.log("Please enter USER or ADMIN.");
    }
}
console.log("Bye!");