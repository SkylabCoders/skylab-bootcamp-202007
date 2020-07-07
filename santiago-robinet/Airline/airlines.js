//Se crea una variable global en forma de array que almacena todos los viajes disponibles.
var vuelos = [

    {id: 00 , desde:'Barcelona', hacia:'Madrid', coste:600, escala:true},
    {id: 01 , desde:'Barcelona', hacia:'Buenos Aires', coste:1200, escala:false},
    {id: 02 , desde:'Madrid', hacia:'Bilbao', coste:400, escala:false},
    {id: 03 , desde:'Madrid', hacia:'Tenerife', coste:750, escala:true},
    {id: 04 , desde:'Tenerife', hacia:'Las Palmas de Gran Canaria', coste:250, escala:false},
    {id: 05 , desde:'Sevilla', hacia:'Barcelona', coste:500, escala:false},
    {id: 06 , desde:'Bilbao', hacia:'Barcelona', coste:470, escala:false},
    {id: 07 , desde:'Zaragosa', hacia:'Granada', coste:520, escala:true},
    {id: 08 , desde:'Fuerteventura', hacia:'Granada', coste:725, escala:true},
    {id: 09 , desde:'Fuerteventura', hacia:'Tenerife', coste:350, escala:false}

 ];

//Funcion general de la aerolinea, que tomara un arr como parametro.
function airline(arr){

//Solicitamos el nombre mediante prompt y lo guardamos en la variable ¨nombre¨, y luego lo logueamos en el saludo.
var nombre = prompt('Hola, como te llamas?', 'Inserte su nombre');
console.log(`Bienvenido ${nombre}. Tenemos disponibles los siguientes vuelos para ti :`);

//estas dos variables se utilizan dentro del if que se encuentra dentro del loop for siguiente para discriminar los vuelos que tienen
// o los que no tienen escala

var escalaSi = 'Este vuelo SI tiene escala.';
var escalaNo = 'Este vuelo NO posee escala.';

//itera sobre el array global ´vuelos´ logueando en consola la informacion de los diferentes vuelos.
    for (let i = 0; i < vuelos.length; i++){
 
       let info = `El vuelo tiene origen ${vuelos[i].desde} hacia ${vuelos[i].hacia} con un valor de ${vuelos[i].coste} Euros.`;
       
       //con este if mostramos por cada vuelo si tiene o no escala.
       if(vuelos[i].escala === false){
            info = info.concat(' ', escalaNo)
        } else { info = info.concat(' ', escalaSi)};

    console.log(info);

    };

//con este loop calculamos el precio medio de los vuelos.
    var suma = 0;
    
    for (let i = 0; i < arr.length; i++){
            suma += vuelos[i].coste
        }

    const media = suma / vuelos.length;
    
    console.log(`El costo promedio es: ${media}`);
    

};
