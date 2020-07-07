//declaración e instancia de variables globales
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
  ],
  
    sinEscala = 0,
    conEscala = 0,
    ultimosDestinos = [],
    mediaCoste = 0;
  
  //llamada a la función que captura el nombre del usuario
  bienvenida(); 

  
  

function bienvenida() {
    var name = prompt("Por favor, introduce tu nombre de usuario a continuación:");
    
    if(name === null){
      console.log("Adiós!");
    }
    
    else if(name === null || name ===""){
      alert("El nombre introducido no es válido, por favor, vuelve a intentarlo.");
      bienvenida();
    }
    else{
      console.log("Bienvenido " + name + " a continuación te mostramos la información de los vuelos:");
      //llamada a la función que muestra los vuelos y sus características
      showFlights();
    }
  
}

 //función que devuelve los vuelos y sus detalles
function showFlights(){

    //iteración sobre la cantidad de vuelos
    for(let i = 0; i < flights.length;i++){ 
      
      //condición que muestra los destinos de los últimos 5 vuelos
      if(i >= flights.length-5){
        ultimosDestinos.push(flights[i].to);
      }
   
      //condicionante que muestra si el vuelo tiene escala o no
      if (flights[i].scale == false){
        console.log("El vuelo número " + flights[i].id +" procedente de "+flights[i].from +" con destinación a "+flights[i].to + " tiene un coste de " + flights[i].cost+" y no tiene ninguna escala.");
        sinEscala++; 
      }
      else{
        console.log("El vuelo número "+ flights[i].id + " procedente de " + flights[i].from + " con destinación a " + flights[i].to + " tiene un coste de " + flights[i].cost + " y tiene escala.");
        conEscala++;
      }
    //media de coste de todos los vuelos
    mediaCoste = mediaCoste + flights[i].cost / flights.length;     
    }
    //mostramos los datos calculados en la lógica anterior
    console.log("El coste medio de los vuelos es: " + mediaCoste.toFixed(2) + ", hay " + sinEscala + " vuelos sin escala y " + conEscala + " vuelos con escala. Los destinos de los últimos 5 vuelos son: " + ultimosDestinos);

}