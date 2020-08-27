const should = require('should');
const sinon = require('sinon');
const heroesController = require('../controllers/heroesRouteController');
const { expect } = require('chai');

// Es una suite de test, sirve para agrupar test. No es necesario siempre, se puede obviar a veces
// describe()
// podemos modificar el archivo que estamos testeando para poder realizarlo mejor SIN afecta el resultado final
describe('Heroes Controller (first done)', () => {
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
		it('should respond status 201', () => {
			const Hero = function heroConstructor() {
				this.save = () => {};
			};
			const req = {
				body: {
					name: 'Bombasto'
				}
			};
			const hero = req.body;
			const res = {
				json: function newHero(hero) {
					return hero;
				},
				status: sinon.spy(),
				send: sinon.spy()
			};
			const controller = heroesController(Hero);
			controller.post(req, res);

			res.status.calledWith(201).should.equal(true, `Good status`);
			res
				.json(hero)
				.should.equal(hero, `new hero is not the same hero created`);
		});
	});
	describe('GET', () => {
		it('should respond status 201 with a hero id', () => {
			const req = {
				query: {
					id: 1
				}
			};
			/* 			const newQuery = {
				id: function find(idWanted) {
					return req.query.id;
				}
			}; */
			/* 			const Hero = [
				{
					id: 1,
					name: 'Bombasto'
				},
				{
					id: 2,
					name: 'Celeritas'
				}
			]; */

			const res = {
				/* Hero.find(newQuery, (hero) => {
					return hero;
				}), */

				json: {},
				status: sinon.spy()
			};
			const Hero = {
				find: (newQuery) => {
					newQuery = 1;
				}
			};
			//			if (req.query.id === res.json.hero.id) return res.json.hero;
			const controller = heroesController(Hero);
			controller.get(req, res);

			/*res.status.calledWith(200).should.equal(true, `Good status`);
			 			res.newQuery.id(2).should.equal.json(hero);
			 */
		});
		it('should respond status 404 with a non existant id', () => {
			const req = {
				query: {
					id: 1
				}
			};
			const Hero = [
				{
					id: 1,
					name: 'Bombasto'
				},
				{
					id: 2,
					name: 'Celeritas'
				}
			];
			const findId = 14;
		});
		it("should call status 400 if there's an error in Hero.find PETAAAAAAAAA", () => {
			const Hero = {
				find: () => {}
			};
			const heroes = [];

			const query = {};

			const res = {
				status: () => {},
				send: () => {},
				json: () => {}
			};
			const req = {
				query: {
					id: {}
				}
			};

			const heroFindFake = sinon.fake.yields(null, (true, heroes));

			sinon.replace(Hero, 'find', heroFindFake);

			const sendSpy = sinon.spy(res, 'send');

			const controller = heroesController(Hero);
			controller.get(res, req);

			expect(sendSpy.called.to.be.true);
		});
	});
});
