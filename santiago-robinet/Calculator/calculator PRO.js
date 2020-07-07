//Funcion que suma los argumentos pasados, acumulando el valor que se va generando por el for loop.
function sum(arr){
    var sac = 0;
        for (var i = 0 ; i < arr.length; i++){
            sac += arr[i];
    }   
    return sac.toFixed(3);
}
//Funcion que resta consecutivamente los argumentos pasados, ver modificacion para que el primer argumento no sea negativo.
function rest(arr){
    var rac = 0;
        for (var i = 0 ; i < arr.length ; i++ ){
            rac -= arr[i];

        }
    return rac.toFixed(3);
}

/*Funcion que divide los argumentos acumulados en el for loop.
Se inicia con el primer argumento ya que si se le asigna un valor influye directamente en el resultado.
Prestar atencion a que el loop comienza con i = 1 porque el argumento 0 es el valor inicial de la var dac!
*/
function divi(arr){
    var dac = arr[0];
        for (var i = 1 ; i< arr.length; i++){
            dac /= arr[i];

    }
    return dac.toFixed(3);
}

//Funcion que multiplica los valores acumulados en el for loop. El valor inicial es 1 porque si es 0, siempre sera 0 el resultado. 
function multi(arr){
    var mac = 1;
        for (var i = 0; i < arr.length; i++){
            mac *= arr[i]
        }
    return mac.toFixed(3);
}
//Funcion general de la calculadora. 
function calcu(){
    var numeros = [];
    
    var resultados = [];

    var again = 'y';
//Con esta funcion controlamos de que se ingresen solo numeros, en el caso de ingrsar letras se avisara por consola 
// y volvera a ejecutarrse calcu()

    function check(Array){
        var control = true;
        for(i=0; i<Array.length; i++){
            if(isNaN(Array[i])){
                control = false;
            };
        };
        if(control == false){
            console.log('Solo esta permitido ingresar numeros.');
            calcu();
        };
    };

/*Se comenzara con el prompt para insertar los numeros, los cuales se guardaran separados por comas y de tipo numero en la variable numeros.
Luego se usa el .push para isertar los resultados de las funciones, dentro de la variable resultados.
*/
    do{
        numeros = prompt("Insertar numeros : (por ej. 9,2,3) ").split(',').map(Number);
        
        check(numeros);
        //Mediante este condicional establecemos que si se regitra un solo numero se hace la raiz cuadrada,y si es mas de 1 numero se realizan todas las operaciones.
        if(numeros.length === 1){
            resultados.push(Math.sqrt(numeros[0]));
        } else {
            resultados.push([parseFloat(sum(numeros)),parseFloat(rest(numeros)),parseFloat(divi(numeros)),parseFloat(multi(numeros))]);
        };

        //Este loop muestra en consola los resultados de cada vez que se usa la calculadora.
        for(var a = 0; a < resultados.length; a++){
            console.log("Resultado " + ": " + resultados[a]);
        };
    //Aqui se pregunta si se quiere volver a utilizar la funcion. Y mientras while sea true va a volver a utilizarse el codigo, en caso contrario
    //una alerta de despedida saldra en la pantalla.
        again = prompt('Deseas volver a realizar operaciones? ( y / n )').toLowerCase();

        resultados = [];
    
    } while (again == 'y');

    alert('Hasta la proxima :D');

}
    calcu();