function verificarVacio (num1,num2) {
	
	if(parseInt(num1) ||  parseInt(num2) ){
		console.log(Math.sqrt(parseInt(num1) ? num1 : num2).toFixed(3))
	}
	console.log("No es un número!!")
		
	
}

function calcular(num1,num2,tipo){

var total=0;
	switch(tipo){
		
		case "suma":
				total = parseInt(num1)+parseInt(num2);
				return total %1 == 0 ? total : total.toFixed(3);
			break;
			
		case "resta":
				total = num1-num2;
				return total %1 == 0 ? total : total.toFixed(3);
			break;
		case "multip":
			total = num1*num2;
				return total %1 == 0 ? total : total.toFixed(3);
			break;
		case "div":
			total = num1/num2;
				return total %1 == 0 ? total : total.toFixed(3);
			break;
	
	}
	
}

function calculadora (num1, num2) {
  
  let resultado=[];
  
	if(!parseInt(num1) ||  !parseInt(num2)) {
		verificarVacio(num1,num2)
  }else{
  
		resultado.push("'"+num1+"+"+num2+"'= "+  calcular(num1,num2,"suma")+"'");
		resultado.push("'"+num1+"-"+num2+"'= "+  calcular(num1,num2,"resta")+"'");
		resultado.push("'"+num1+"*"+num2+"'= "+  calcular(num1,num2,"multip")+"'");
		resultado.push("'"+num1+"/"+num2+"'= "+  calcular(num1,num2,"div")+"'");
		resultado.forEach(element => console.log(element));
		alert(resultado.toString());
  }
}
var first_number = prompt("Enter the first number: ");
var second_number = prompt("Enter the second number :");

calculadora(first_number,second_number);