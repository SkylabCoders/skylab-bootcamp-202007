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
    for (var i = 0; i < vuelos.length; i++){
 
       let info = `El vuelo tiene origen ${vuelos[i].desde} hacia ${vuelos[i].hacia} con un valor de ${vuelos[i].coste} Euros.`;
       
       //con este if mostramos por cada vuelo si tiene o no escala.
       if(vuelos[i].escala === false){
            info = info.concat(' ', escalaNo)
        } else { info = info.concat(' ', escalaSi)};

    console.log(info);

    }

//con este loop calculamos y mostramos el precio medio de los vuelos.
    var suma = 0;
    
    for (var i = 0; i < arr.length; i++){
            suma += vuelos[i].coste
        }

    const media = suma / vuelos.length;
    
    console.log(`El costo promedio es: ${media}`);
    

}

//Con este prompt se "loguea" como usuario o admin. Cada uno ejecutara su funcion correspondiente.
var logueo = prompt('Eres ADMIN o USUARIO').toUpperCase();

switch (logueo){
    case 'ADMIN':
        admin();
        break;
    
    case 'USUARIO':
        usuario();
        break;

    default:
        alert('Los datos ingresados son incorrectos');
        break;

}
//Funcion general de ADMIN, donde se inicia con un saludo y seguido se pregunta si quiere crear un nuevo vuelo.
function admin(){
    alert('Bienvenido admin!');

//En el caso que presione OK, se pasa a pedir cada dato necesario para armar un viaje por medio de diferentes prompt.
//En el caso que presione CANCEL, se va a preguntar si quiere eliminar algun viaje.
do{
    var newFlight = confirm('Desea crear un nuevo vuelo?');

    if(newFlight === true){
    
        var nuevoOrigen = prompt('Cual es el origen del nuevo vuelo? Ej. Barcelona');

        var nuevoDestino = prompt('Cual es su destino? Ej. Madrid');

        var nuevoCoste = Number(prompt('Indique el coste del vuelo : Ej. 600'));

        var nuevaEscala = prompt('El vuelo posee escala : Y / N').toUpperCase();
        
        //Este switch configura la escala de vuelo como un booleano dependiendo de la respuesta del admin.
        switch(nuevaEscala){
            case 'Y':
                nuevaEscala = true;
                break;
            
            case 'N':
                nuevaEscala = false;
                break;
            
            default:
                alert('Valor Incorrecto. Debe ser Y o N.');
                break;

        }
    
        vuelos.push({id: vuelos.length, desde: nuevoOrigen, hacia: nuevoDestino, coste: nuevoCoste, escala: nuevaEscala})
        
        //Mediante este if asignamos como maximo 15 vuelos para la variable "vuelos". 
            if(vuelos.length > 14){
                vuelos.splice(15);
                alert('El numero maximo de vuelos es: 15. No se puede agregar mas vuelos por el momento.');
                let pregunta = confirm('Desea eliminar algun viaje?');
                    if(pregunta === true){
                        newFlight = false;
                    } else { newFlight = true };
            };
    } else { 
        var eliminar = prompt('Desea eliminar algun vuelo de la lista?','Y / N').toUpperCase();

        switch(eliminar){
            case 'Y':
               var vueloAEliminar = Number(prompt('Ingrese el numero ID del vuelo que desea eliminar:', 'Ej. 01'));
               vuelos.splice(vuelos[vueloAEliminar], 1);
               break;


            case 'N':
                alert('Hasta luego Sr. ADMIN!');
                break;


            default:
                alert('Valor ingresado incorrecto. Debe ingresar Y o N.')
                break;

        }
    };

} while (confirm('Desea crear o eliminar otro vuelo??'));

console.log('La sesion ADMIN ha sido cerrada');
    
};

//Funcion general del usuario. Se incia con una bienvenida y luego se pregunta mediante confirm si desea filtrar por precio.
function usuario(){
    alert('Bienvenido User.')
    var buscador = confirm('Desea filtrar vuelos segun precio?');
    var vuelosFiltrados = [];
    

    switch(buscador){
        case true:
           var filtro = prompt('Utilize MAYOR (mayor a :) , MENOR (menor a: ) o IGUAL (igual a: )').toUpperCase();

           var precio = Number(prompt('Indique el precio :', 'ej. 500'));
            
            //Mediante este switch se realiza el filtro segun la informacion ofrecida por el usuario. 
            switch(filtro){
                    case 'MAYOR':

                            for(let i =0; i < vuelos.length; i++){
                                if(vuelos[i].coste > precio){
                                    vuelosFiltrados.push(vuelos[i]);
                                };
                            
                            };
                    
                    break;


                    case 'MENOR':

                        for(let i =0; i < vuelos.length; i++){
                            if(vuelos[i].coste < precio){
                                vuelosFiltrados.push(vuelos[i]);
                            };
                      
                        };
                    
                    break;


                    case 'IGUAL':

                        for(let i =0; i < vuelos.length; i++){
                            if(vuelos[i].coste = precio){
                                vuelosFiltrados.push(vuelos[i]);
                            };
                          
                        };
                        
                    break;


                    default:
                        alert('Valor incorrecto.');
                    break;

                };

        console.log(vuelosFiltrados);
        break;

        
        case false:
            console.log(vuelos);
            break;


    var numeroVuelo = prompt('Inserte ID del vuelo que desea comprar','ej. 04')
    alert('Usted ha comprado el vuelo : ' + vuelos.id(numeroVuelo))
    };
}