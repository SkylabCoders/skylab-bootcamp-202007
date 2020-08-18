//ASYNC AWAIT
const https = require('https');
function fetch(url) {
	return new Promise((resolve, reject) => {
		https.get(url, (response) => {
			let data = '';
			//chunk es un pedazo de data
			//mientras esté conectado a este url, este get, estas conectado a data, y cuando acabe la variable, end resolvera con esta data
			//con el response.on('data') los datos llegan a pedazos, esto es util en casos que el documento pesa mucho(p.e. si tienes una tuberia estercha que quieres enviar una roca gigante, el data rompe a pedazos la roca para que pueda ir pasando por la tuberia, lo envia a trozos) y al final quanco ya se ha enviado todo lo arma con el end
			response.on('data', (chunk) => (data = data + chunk));
			response.on('end', () => resolve(data));
			response.on('error', (error) => reject(error));
		});
	});
}

//Aquí hacemos console.log del script de www.jasvascript.com
fetch('https://www.javascript.com').then((data) => {
	console.log(data.length);
});

//IIF (Imidiately I.... Function)(función ejecución immediata), declaramos una fn que se va a llamar immediatamente, es asincrona, la sintaxis es (nombre_fn(){})

(async function read() {
	//data va a ser igual al resultado de fetch cuando se resuelva
	const data = await fetch('https://www.javascript.com');
	console.log(data.length);
})();

//tanto con el async await y con el .then podemos hacer cosas parecidas
