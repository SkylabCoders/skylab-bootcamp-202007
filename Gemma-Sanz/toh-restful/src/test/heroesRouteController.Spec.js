const should = require('should');
const sinon = require('sinon');
const heroesController = require('../controllers/heroesRouteController');

// Es una suite de test, sirve para agrupar test. No es necesario siempre, se puede obviar a veces
// describe()
// podemos modificar el archivo que estamos testeando para poder realizarlo mejor SIN afecta el resultado final
describe('Hero Controller', () => {
	// dentro del describe podemos poner el describe o el it, eso va a gusto del desarrollador, no importa si usamos + o menos descripción mientras sea directa va a funcionar igual
	describe('POST', () => {
		it('should respond status 400 when name is missing', () => {
			// si la función que testeas no debuelve nada. porque no tiene un return sólo podemos decir que: assert post is undefined
			// un test unitario SÓLO COMPRUEBA el RESULTADO, en el QUE sale de la fn!!
			const Hero = function heroConstructor() {
				// No nos importa esta FN!!! Nos importa el resultado que pueda dar!!! Estamos ahciendo test UNITARIO!
				this.save = () => {};
			};
			const req = {
				body: {
					// Aquí sólo nos importa que req.body nos traiga el body, es lo único required!! Lo podemos comprovar en el postman
					name: 'Bombasto'
				}
			};
			const res = {
				// Si hacemos un return de res.json, sólo nos interesa json y también el status porque forma parte de la respuesta
				json: sinon.spy(),
				status: sinon.spy()
			};
		});
	});
});
