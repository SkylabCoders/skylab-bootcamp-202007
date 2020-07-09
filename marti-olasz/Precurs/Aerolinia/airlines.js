function airlines(){
    //Declarem totes les variables que utilitzarem durant el programa
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
        { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false } ],
    acc = 0,
    escales = 0,

    //Preguntem el nom a l'usuari i li donem la benvinguda
    name = prompt("Com et dius?");
    console.log("Welcome to Skylab airlines " + name);

   //Recorrem flights i imprimim de manera comode tota l'informació, sumem tots els costos a acc i contem els vols amb escala a escales
   for(i in flights){
       console.log("El vol amb origen: " + flights[i]["from"] + " i desti a: " +  flights[i]["to"] + " te un cost de " + flights[i]["cost"] + "€ i" + ((flights[i]["scale"] == false) ? " no": "") + " fa escales");
       acc += flights[i]["cost"];
       if (flights[i]["scale"] == true) {
           escales += 1;
       }
   }

   //Imprimim la mitja de preus, els vols amb escales i el destí dels 5 úñtims vols
   console.log("La mitja de preus de tots els vols és: " + (acc/flights.length).toFixed(2) + "€");
   console.log("En total " + escales + " vols fan escala");

   console.log("Els últims 5 vols avui tenen destí a:");
   for(i = 6;i < flights.length;i++){
       console.log("    " + flights[i]["to"]);
   }
}