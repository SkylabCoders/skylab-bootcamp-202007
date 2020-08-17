var bingoCard = [];
var bingoCardWIN = ['X,X,X,X,X'];

//Función para crear targeta de bingo
function bingo() {
	const name = prompt('Introduzca su nombre porfavor');
	console.log(`Bienvenido/a ${name}`);

	//Define cantidad de numeros aleatorios que no se repitan
	var cantNum = 5;
	while (bingoCard.length < cantNum) {
		var randNum = Math.floor(Math.random() * 10);
		var existe = false;
		for (var i = 0; i < bingoCard.length; i++) {
			if (bingoCard[i] == randNum || randNum === 0) {
				existe = true;
				break;
			}
		}
		if (!existe) {
			bingoCard[bingoCard.length] = randNum;
		}
	}
	console.log(bingoCard);

	//Empezar juego
	newTurn();
}

//Función para empiezar el juego
function newTurn() {
	if (bingoCard.join() == bingoCardWIN.join()) {
		console.log('BINGOOOO!');
	} else {
		var again = confirm('Quieres pasar al siguiente turno?');
		if (again == true) {
			var randNum = Math.floor(Math.random() * 10);
			while (randNum === 0) {
				randNum = Math.floor(Math.random() * 10);
			}
			console.log(`El número aleatorio que ha salido es: ${randNum}`);
			for (var j = 0; bingoCard.length > j; j++) {
				if (bingoCard[j] === randNum) {
					bingoCard[j] = 'X';
					console.log(
						`Que bien! Ha coincidido un número, tu targeta se ha actualizado: ${bingoCard}`
					);
				} else {
					continue;
				}
			}
			newTurn();
		} else {
			console.log('Ciao!');
		}
	}
}
