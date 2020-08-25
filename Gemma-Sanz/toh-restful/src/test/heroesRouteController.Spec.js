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
				}
			};
			const res = {
				// Si hacemos un return de res.json, sólo nos interesa json y también el status porque forma parte de la respuesta
				json: sinon.spy(),
				status: sinon.spy(),
				send: sinon.spy()
			};
			// Tenemos que ver de dónde viene el méodo, dónde lo invocan, aqu es a heroRouter
			const controller = heroesController(Hero);
			controller.post(req, res);
			// Cuando res.status ha sido invocado con 201 tiene que ser true
			res.status
				.calledWith(400)
				.should.equal(
					true,
					`Bad status, name is not required in this scenario.`
				);
			res.send
				.calledWith(`Name is required!`)
				.should.equal(true, `Message is not correct`);
			// 2o argumento del marched le transmite al desarrollador un mensaje cuando falla el test

			// para comprovar que el test falla podemos quitar el código de dentro del body:{}, t calledWith(400) en lugar de 201
			// Hay un error de programación, y es que si el calledWith(201) se deja así pero quitamos el body y lo dejamos:{} pasaria igual, canviamos el código, lo adaptamos con un if(!req.body.name)
			// En el unitario espiamos los argumentos, que haya sido llamado con este argumento
		});
		it('should respond status 201');
	});
});
