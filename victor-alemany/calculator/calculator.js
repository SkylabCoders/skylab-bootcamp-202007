//definimos función calculadora
let calculadora = function(primerNum, segundoNum){
    let suma = 0;
    let resta = 0;
    let multiplicacion = 0;
    let division = 0;
    let resultados = [];
    let primerNum;
    let segundoNum;
    
    //validamos si los parámetros son numéricos
    if (isNaN(primerNum) && isNaN(segundoNum)){
      console.log("No es válido!");
    }
    
    //realizamos cálculos en función de los parámetros
    else{
      if (primerNum === isNaN && segundoNum === isNaN){
  
        if (segundoNum == undefined) {
           primerNum = Math.sqrt(primerNum);
          if(primerNum%1 === 0)
            console.log(primerNum);
          else{
            primerNum = primerNum.toFixed(3);
            console.log(primerNum);
          }
        }
  
        else{
          suma = primerNum + segundoNum;
          resta = primerNum - segundoNum;
          multiplicacion = primerNum * segundoNum;
          division = primerNum / segundoNum;

          if(suma%1 == 0 && resta%1 == 0 && multiplicacion%1 == 0 && division%1 === 0){
            resultados.push([primerNum+" + "+segundoNum+" = "+suma], [primerNum+" - "+segundoNum+" = "+ resta],[primerNum+" * "+segundoNum+" = "+multiplicacion],[primerNum+" / "+segundoNum+" = "+division]);
          }
          else{
            resultados.push([primerNum+" + "+segundoNum+" = "+suma.toFixed(3)], [primerNum+" - "+segundoNum+" = "+ resta.toFixed(3)],[primerNum+" * "+segundoNum+" = "+multiplicacion.toFixed(3)],[primerNum+" / "+segundoNum+" = "+division.toFixed(3)]);
          }

          console.log(resultados);
        }
      }
    }
  }
  
  calculadora(2,2);