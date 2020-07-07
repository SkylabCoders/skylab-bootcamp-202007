//declaración e instancia de variables globales
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
],

  sinEscala       = 0,
  conEscala       = 0,
  ultimosDestinos = [],
  mediaCoste      = 0,
  eliminar        = 0;
  vuelosMaxPrice  = [],
  vuelosMinPrice  = [],
  vuelosSamePrice = [];

//llamada a la función que captura el nombre del usuario
bienvenida();

//función que recoge el nombre del usuario y muestra un mensaje
function bienvenida() {
  var name = prompt("Por favor, introduce tu nombre de usuario a continuación:");
  
  if(name === null || name ===""){
    console.log("Adiós!");
  }
  else{
    console.log("Bienvenido " + name + " a continuación te mostramos la información de los vuelos:");
    //llamada a la función que muestra los vuelos y sus características
    showFlights();
  }
}

//función que devuelve los vuelos y sus detalles
function showFlights() {
  console.log("****************************************************************************");
  //iteración sobre los vuelos
  for (var i = 0; i < flights.length; i++) {

    //condición que muestra los destinos de los últimos 5 vuelos
    if (i >= flights.length - 5) {
      ultimosDestinos.push(flights[i].to);
    }

    //condicionante que muestra si el vuelo tiene escala o no y suma el contador
    if (flights[i].scale == false) {
      console.log("El vuelo número " + flights[i].id + " procedente de " + flights[i].from + " con destinación a " + flights[i].to + " tiene un coste de " + flights[i].cost + " y no tiene ninguna escala.");
      sinEscala++;
    }
    else {
      console.log("El vuelo número " + flights[i].id + " procedente de " + flights[i].from + " con destinación a " + flights[i].to + " tiene un coste de " + flights[i].cost + " y tiene escala.");
      conEscala++;
    }
    //media de coste de todos los vuelos
    mediaCoste = mediaCoste + flights[i].cost / flights.length;
  }
  //mostramos los datos calculados en la lógica anterior y reiniciamos los contadores para futuras consultas
  console.log("- El coste medio de los vuelos es: " + mediaCoste.toFixed(2) + ".\n - Hay " + sinEscala + " vuelos sin escala y " + conEscala + " vuelos con escala.\n  - Los destinos de los últimos 5 vuelos son: " + ultimosDestinos);
  sinEscala = 0;
  conEscala = 0;
  mediaCoste = 0;
  ultimosDestinos = [];

  //llamada a la función que determina si es usuario o administrador
  getCredentials();
}

//Función que recoge qué tipo de usuario es
function getCredentials() {
  
  var user = prompt("Por favor, introduzca a continuación qué tipo de usuario eres: (Admin / User):");
  
  //llamada a la función administrador o usuario dependiendo de la condición
  if(user === null ||user === ""){
    console.log("Hasta la próxima!");
  }
  else if (user.toUpperCase() === "ADMIN") {
    adminActions();
  }
  else if (user.toUpperCase() === "USER") {
    userActions();
  }
  else if(user.toUpperCase() != "ADMIN" || user.toUpperCase() != "USER"){
    console.log("opción incorrecta, por favor vuelve a intentarlo.");
    getCredentials();
  }
}

//Función que filtra los vuelos por importe mayor al insertado por pantalla
function filterByMax() {
  
  var valorMax = prompt("Introduzca que vuelos mostrar por precio mayor que:");

  if(valorMax === null || valorMax ===""){
    console.log("Hasta la próxima!");
  }
  else if(valorMax != isNaN){
    console.log("valor incorrecto, por favor vuelve a intentarlo.");
    filterByMax();
  }
  else{

  for (i = 0; i < flights.length; i++) {

    if (flights[i].cost > valorMax) {
      vuelosMaxPrice.push(flights[i]);
    }
  }
  return console.log("****************************************************************************\n Vuelos filtrados por importe mayor a: " + valorMax);
  }
}

//Función que filtra los vuelos por importe menor al insertado por pantalla
function filterByMin(){

  let valorMin = prompt("Introduzca que vuelos mostrar por precio menor que:");

  if(valorMin === null || valorMin ===""){
    console.log("Hasta la próxima!");
  }
  else if(valorMin != isNaN){
    console.log("valor incorrecto, por favor vuelve a intentarlo.");
    filterByMin();
  }
  else{

  for (i = 0; i < flights.length; i++) {

    if (flights[i].cost < valorMin) {
      vuelosMinPrice.push(flights[i]);
    }
  }
  return console.log("****************************************************************************\n Vuelos filtrados por importe menor a: " + valorMin);
  }
} 

//Función que filtra los vuelos por importe igual al insertado por pantalla
function filterBySamePrice(){

  let mismoValor = prompt("Introduce que vuelos mostrar por precio igual que:");

  if(mismoValor === null || mismoValor ===""){
    console.log("Hasta la próxima!");
  }
  else if(mismoValor != isNaN){
    console.log("valor incorrecto, por favor vuelve a intentarlo.");
    filterBySamePrice();
  }
  else{

  for (i = 0; i < flights.length; i++) {

    if (flights[i].cost == mismoValor) {
      vuelosSamePrice.push(flights[i]);
    }
  }
  return console.log("****************************************************************************\n Vuelos filtrados por importe igual a: " + mismoValor);
  }
} 

//función que filtra el objeto por id y devuelve los resultados que no cumplen la condición
function filterByID(obj) {
  if ('id' in obj && obj.id == eliminar) {
    return false;
  } else {
    return true;
  }
}

//función que agrupa acciones del usuario administrador
function adminActions() {
  console.log("****************************************************************************");
  //Capturamos por pantalla qué opción quiere realizar
  let accionAdmin = prompt("*** ADMIN *** Por favor, seleccione que opción desea realizar:\n - A: Añadir un vuelo\n - E: Eliminar un vuelo\n - C: Consultar vuelos\n - S: Salir de la aplicación");

  if(accionAdmin === null || accionAdmin === ""){
    console.log("Hasta la próxima!");
  }

  else if(accionAdmin != "A" || "E" || "C" || "S"){
    console.log("opción incorrecta, por favor vuelve a intentarlo");
    adminActions();
  }
  else{

//controlo del flujo dependiendo la opción seleccionada
  switch (accionAdmin.toUpperCase()) {
    
    //Añadir
    case "A":
      //Muestra alerta si ya hay 15 vuelos existentes y vuelve a llamar a las funciones de administrador
      if (flights.length >= 15) {
        alert("Ya hay 15 vuelos y no pueden insertarse más, si desea añadir alguno, primero debe eliminar alguno.");
        adminActions();
        break;
      }
      //Si no hay 15 vuelos solicita los datos del vuelo y los inserta
      else {
        let infoVuelo = prompt("Inserte los datos del vuelo separado por comas: (id,destino,procedencia,coste y si tiene escalas (si/no))");

        if(infoVuelo === null || infoVuelo ===""){
          console.log("Hasta la próxima!");
          break;
        }
        else{


        //convertimos la cadena en un array separado por coma
        infoVuelo = infoVuelo.split(',');
        
        //Parseamos las variables de texto a numéricas
        infoVuelo[0] = parseInt(infoVuelo[0]);
        infoVuelo[3] = parseInt(infoVuelo[3]);
        infoVuelo[4] = infoVuelo[4].toUpperCase();

        //determinamos el booleano con el condicional de texto
        if (infoVuelo[4] == "SI") {
          infoVuelo[4] = true;
        }
        else {
          infoVuelo[4] = false;
        }

        //Insertamos el objeto completo en el array de vuelos
        flights.push({ id: infoVuelo[0], to: infoVuelo[1], from: infoVuelo[2], cost: infoVuelo[3], scale: infoVuelo[4] });
        console.log("Vuelo añadido correctamente!");
        //Llamamos a la función que muestra los vuelos de nuevo para ver los resultados
        showFlights();
        //Llamamos a la función de acciones de administrador para continuar de nuevo
        adminActions();
        break;
        }
      }
     
     //Eliminar 
    case "E":
      //capturamos el vuelo a eliminar 
      eliminar = prompt("Qué vuelo desea eliminar? (introduzca el identificador. Ej id: 5)");
      
      if(eliminar === null || eliminar ===""){
        console.log("Hasta la próxima!");
        break;
      }
      else if(eliminar != "E"){
        console.log("Opción incorrecta, por favor vuelve a intentarlo.");
      }
      else{

      //filtramos el array de vuelos con la función de filtrado por ID
      flights = flights.filter(filterByID);
      console.log("Vuelo eliminado correctamente!");
      //Llamamos a la función que muestra los vuelos de nuevo para ver los resultados
      showFlights();
      //Llamamos a la función de acciones de administrador para continuar de nuevo
      adminActions();
      break;
    }

    //CONSULTAR  
    case "C":
      
      //Llamamos a la función que muestra los vuelos de nuevo para ver los resultados
      showFlights();
      //Llamamos a la función de acciones de administrador para continuar de nuevo
      adminActions();
      break;

    //SALIR  
    case "S":
      console.log("Hasta la próxima!");
      break;

    //Opción por defecto    
    default:
      console.log("Opción incorrecta vuelva a intentarlo." + adminActions());
      break;
    }
  }
}

//función que agrupa acciones del usuario
function userActions(){
  console.log("****************************************************************************");
  //Capturamos por pantalla qué opción quiere realizar
  var accionUser = prompt("Por favor, seleccione que opción desea realizar:\n - M: Filtrar por precio mayor\n - N: Filtrar por precio menor\n - I: Filtrar por mismo precio\n - O: Comprar un vuelo\n - C: Consultar vuelos\n - S: Salir de la aplicación");
  
  if(accionUser === null || accionUser ===""){
    console.log("Hasta la próxima!");
  }
  else if(accionUser != "A" || "E" || "C" || "S"){
    console.log("opción incorrecta, por favor vuelve a intentarlo");
    userActions();
  }
  else{

 //controlo del flujo dependiendo la opción seleccionada
  switch (accionUser.toUpperCase()) {
    
    //FILTRAR POR PRECIO MAYOR
    case "M":
      
      //Llamada a la función que filtra por precio mayor
      filterByMax();
      console.log("****************************************************************************");
      
      //condicionante que muestra si el vuelo tiene escala o no
      for (i = 0; i < vuelosMaxPrice.length; i++) {
        if (vuelosMaxPrice[i].scale == false) {
          console.log("El vuelo número " + vuelosMaxPrice[i].id + " procedente de " + vuelosMaxPrice[i].from + " con destinación a " + vuelosMaxPrice[i].to + " tiene un coste de " + vuelosMaxPrice[i].cost + " y no tiene ninguna escala.");
        }
        else {
          console.log("El vuelo número " + vuelosMaxPrice[i].id + " procedente de " + vuelosMaxPrice[i].from + " con destinación a " + vuelosMaxPrice[i].to + " tiene un coste de " + vuelosMaxPrice[i].cost + " y tiene escala.");
        }
      }
      userActions();
      break;

    //FILTRAR POR PRECIO MENOR
    case "N":

      //Llamada a la función que filtra por precio menor
      filterByMin();
      console.log("****************************************************************************");

      //condicionante que muestra si el vuelo tiene escala o no
      for (i = 0; i < vuelosMinPrice.length; i++) {
        if (vuelosMinPrice[i].scale == false) {
          console.log("El vuelo número " + vuelosMinPrice[i].id + " procedente de " + vuelosMinPrice[i].from + " con destinación a " + vuelosMinPrice[i].to + " tiene un coste de " + vuelosMinPrice[i].cost + " y no tiene ninguna escala.");
        }
        else {
          console.log("El vuelo número " + vuelosMinPrice[i].id + " procedente de " + vuelosMinPrice[i].from + " con destinación a " + vuelosMinPrice[i].to + " tiene un coste de " + vuelosMinPrice[i].cost + " y tiene escala.");
        }
      }
      userActions();
      break;
      
    //FILTRAR POR PRECIO IGUAL  
    case "I":

      //Llamada a la función que filtra por precio igual
      filterBySamePrice();
      console.log("****************************************************************************");

      //condicionante que muestra si el vuelo tiene escala o no
      for (i = 0; i < vuelosSamePrice.length; i++) {
        if (vuelosSamePrice[i].scale == false) {
          console.log("El vuelo número " + vuelosSamePrice[i].id + " procedente de " + vuelosSamePrice[i].from + " con destinación a " + vuelosSamePrice[i].to + " tiene un coste de " + vuelosSamePrice[i].cost + " y no tiene ninguna escala.");
        }
        else {
          console.log("El vuelo número " + vuelosSamePrice[i].id + " procedente de " + vuelosSamePrice[i].from + " con destinación a " + vuelosSamePrice[i].to + " tiene un coste de " + vuelosSamePrice[i].cost + " y tiene escala.");
        }
      }
      userActions();
      break;

    //COMPRAR  
    case "O":
      console.log("****************************************************************************");
      let compra = prompt("Introduzca el identificador del vuelo que desea comprar:");

      if(compra === null || compra ===""){
        console.log("Hasta la próxima!");
        break;
      }
      else{

      console.log("Gracias por su compra!");
      
      //llamada a la función de acciones de usuario
      userActions();
      break;
      }
    
    //CONSULTAR  
    case "C":
      console.log("****************************************************************************");
      
      //Llamamos a la función que muestra los vuelos de nuevo para ver los resultados
      showFlights();
      //llamada a la función de acciones de usuario
      userActions();
      break;
    
    //SALIR
    case "S":
      console.log("****************************************************************************");
      console.log("Hasta la próxima!");
      break;
    
    //Opción por defecto
    default:
      console.log("Opción incorrecta vuelva a intentarlo." + userActinons(user));
      break;
    }
  }
}