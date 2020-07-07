//declaración variables globales
var numeros       = "",
    arrayString   = "",
    arrayNumeros  = [],
    resultados    = [],
    continuar     = "";

//Solicitamos valores y los dividimos en un array numérico

//ejecutamos controlador de flujo mientras se cumpla la condición
do {
  numeros = prompt("Introduce los números que quieres calcular separados por coma:");

  if(numeros === null){
    console.log("Adios!");
  }
  else{

  arrayString = numeros.split(",");
  arrayNumeros = arrayString.map(Number);

  //Validamos si los valores introducidos son números y llamamos a las funciones de cálculo
    if (arrayNumeros.length <= 1){

      var calculoRaiz = Math.sqrt(arrayNumeros);

      if(calculoRaiz%1 === 0)

        console.log(calculoRaiz);

      else{
        calculoRaiz = calculoRaiz.toFixed(3);

        console.log("La raíz cuadrada de "+arrayNumeros+ " es: "+ calculoRaiz);

      }
    }
    else{
      if (inputValidator(arrayNumeros) === true){    
        suma(arrayNumeros);
        resta(arrayNumeros);
        multiplicacion(arrayNumeros);
        division(arrayNumeros);
  
        for(var i = 0; i < resultados.length; i++){

          console.log(resultados[i]);

        }
        resultados = [];
      }
      else{
        console.log("Los números introducidos no son válidos!");
      }
    }

      continuar = prompt("Quieres continuar introduciendo números?(Y/N)");

      if(continuar === null || continuar.toUpperCase() === "N"){
        console.log("Adios!");
      }
  }
}
while (continuar.toUpperCase() == "Y");

//función que valida los números introducidos
function inputValidator() {
  let validador = undefined;
  
  for (let i = 0; i < arrayNumeros.length; i++) {
    if (isNaN(arrayNumeros[i])) {
      return false;
    }
  }
  return true;
}

//declaración de funciones de cálculo
function suma() {
  let resultadoSum = arrayNumeros[0];
  
  for (let i = 1; i < arrayNumeros.length; i++) {
    resultadoSum += arrayNumeros[i];
  }

  //condicional para calcular si muestra decimales o no
  if(resultadoSum%1 === 0){
    resultados.push(["Resultado de la suma: " + resultadoSum]);
  }
    
  else{
    resultados.push(["Resultado de la suma: " + resultadoSum.toFixed(3)]);
  }
}

function resta() {
  let resultadoRest = arrayNumeros[0];
  
  for (let i = 1; i < arrayNumeros.length; i++) {
    resultadoRest -= arrayNumeros[i];
  }
  //condicional para calcular si muestra decimales o no
  if(resultadoRest%1 === 0){
    resultados.push(["Resultado de la resta: " + resultadoRest]);
  }
  else{
    resultados.push(["Resultado de la resta: " + resultadoRest.toFixed(3)]);
  }
}

function multiplicacion() {
  let resultadoMult = arrayNumeros[0];
  
  for (let i = 1; i < arrayNumeros.length; i++) {
    resultadoMult *= arrayNumeros[i];
  }
  //condicional para calcular si muestra decimales o no
  if(resultadoMult%1 === 0){
    resultados.push(["Resultado de la multiplicación: " + resultadoMult]);
  }
  else{
  resultados.push(["Resultado de la multiplicación: " + resultadoMult.toFixed(3)]);
  }
}

function division() {
  let resultadoDiv = arrayNumeros[0];
  
  for (let i = 1; i < arrayNumeros.length; i++) {
   resultadoDiv /= arrayNumeros[i];
  }
  //condicional para calcular si muestra decimales o no
  if(resultadoDiv%1 === 0){
    resultados.push(["Resultado de la división: " + resultadoDiv]);
  }  
  else{
  resultados.push(["Resultado de la división: " + resultadoDiv.toFixed(3)]);
  }
}