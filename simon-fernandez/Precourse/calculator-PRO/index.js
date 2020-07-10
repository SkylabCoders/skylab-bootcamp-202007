/*
Calculator! ➗➕
Haz una calculadora.Un único programa al que le pasarás dos parámetros y el usuario podrá visualizar por consola la suma, resta, multiplicación y división entre ambos números.El resultado debería ser mostrado con 3 decimales como mucho(En caso de que hubieran).El programa debe contemplar e informar al usuario en el caso de que este introduzca cualquier cosa que no sean números.
Si el usuario introduce un solo número, deberá mostrar SOLO su raíz cuadrada, si vuelve a introducir los dos, volverá a mostrar las 4 operaciones de siempre.
Los resultados deberían almacenarse dentro de una array y mostrarlos de una forma amigable al usuario.
  // Output
  results = [num1 + num2 = resultSum, num1 - num2 = resultRest, ...]
PRO
Podrías hacer que la calculadora realizara operaciones sea cual sea el número de argumentos pasados a la función ?


  function sum() {
    var acc = 0;

    for (num in arguments) {
      console.log(num);

      acc += arguments[num];
    }

    return acc;
  }

sum(2, 3, 4); // acc = 9
Después de hacer todas las operaciones, el programa deberá preguntar al usuario si desea volver a realizar otra operación, volviendo a almacenar más resultados y mostrándolos.
  calculator(n1, n2);

//Output => sum, subs, mult, div...
prompt("New numbers? y/n")
    Case "y" => calculator(n1,n2)
                //Output => sum1, subs1, mult1, div1, sum2, subs2, mult2, div2...
    Case "n" => "Bye!"
^
*/


function calculatorPro(){
  var save = [] ;
  var buffer = [];
  var num, ask;
  var i = 0;
  var j = 0;
  args();
     
  quest();
  //Insert the numbers
  function args(){
      num=prompt("Insert the number");
      buffer[i]=num;
      i++;
      var again = prompt("more numbers? y/n");
      switch (again){
          case "y":
              args();
            break;
          case "n":
              if (buffer.length==1) {
                save.push(parseFloat(Math.sqrt(buffer[i-1])),0);
              }
              else{
              save.push(sum(buffer, 0));
              save.push(sub(buffer, 0));
              save.push(mult(buffer, 0));
              save.push(div(buffer, 0));
              }
            break;
      }
  }
  // add the values
  function sum(arr, j){
      if (j === arr.length){
        return 0;
      }

      return +arr[j] + +sum(arr, ++j);
  }
  //substract the values
  function sub(arr, j){
      if (j === arr.length){
        return 0;
      }

      return +arr[j] - +sub(arr, ++j);
  }
  //multiply the values
  function mult(arr, j){
      if (j === arr.length){
        return 1;
      }

      return +arr[j] * +mult(arr, ++j);
  }
  //divide the values
  function div(arr, j){
      if (j === arr.length){
        return 1;
      }


      return +arr[j] / +div(arr, j+1);
  }
  //Control the decimals on the given value
function decimals(controlDecimals) {
controlDecimals = controlDecimals.toFixed(3);
while (controlDecimals[controlDecimals.length - 1] === "0" || controlDecimals[controlDecimals.length - 1] === ".") {
    controlDecimals = controlDecimals.substring(0, controlDecimals.length - 1);
}
return controlDecimals;
}
  // rerun the calculatorPro() function or shows the array save
  function quest(){
      ask=prompt("Do you want to do more operations? y/n"); 
      switch(ask){
          case "y":
              calculatorPro();
          case "n":
              for(var i = 0; i < save.length; i++) {
                  console.log(decimals(save[i]));
              }
              return false;
          default:
              quest();
      } 
  }
}
calculatorPro()