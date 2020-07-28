//Función para sumar todos los valores de "arr"
function sum(arr) {
	var sum = 0;
	for (let i in arr) {
		sum += arr[i];
	}
	return sum;
}

//Función para restar todos los valores de "arr"
function res(arr) {
	var res = arr[0];
	for (let i = 1; i < arr.length; i++) {
		res -= arr[i];
	}
	return res;
}

//Función para multiplicar todos los valores de "arr"
function mul(arr) {
	var mul = 1;
	for (let i in arr) {
		mul *= arr[i];
	}
	return mul;
}

//Función para dividir todos los valores de "arr"
function div(arr) {
	var div = 1;
	for (let i in arr) {
		div /= arr[i];
	}
	return div;
}

//Función general de la calculadora
function calc() {
	var num = [],
		result = [],
		i = 0;

	//Mientras el usuario quiera seguir añadiendo números el bucle se va a repetir
	do {
		//Pido la información de entrada y la guardo como "int" en la array "num"
		num = prompt('Quins numeros vols calcular?', '5,2,4')
			.split(',')
			.map(Number);
		console.log(num);
		if (num.length == 1) {
			//Si solo se pasa un numero se imprimer la raiz quadrada
			console.log('Resultado ' + Math.sqrt(num[0]));
		} else {
			result.push([0, 0, 0, 0]);
			//Utilizo las 4 funciones para calcular los 4 resultados y guardarlos en "result"
			result[i][0] = sum(num);
			result[i][1] = res(num);
			result[i][2] = mul(num);
			result[i][3] = parseFloat(div(num).toFixed(3));

			//Imprimimos los resultados de forma entendible
			for (let a in result) {
				console.log('Resultado ' + a + ': ' + result[a]);
			}
			i++;
		}
	} while (confirm('¿Quieres añadir mas numeros?'));
	console.log('Adio mu buenas');
}
