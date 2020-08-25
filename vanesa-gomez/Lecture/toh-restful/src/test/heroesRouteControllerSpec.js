/* eslint-disable no-undef */
// Unit Testing : analizamos lo que devuelve la función. se centra en los valores que rtorna una función, si nos ponemos a probar lo que se guarda en la Base de dato es teest de integración.

// eslint-disable-next-line no-unused-vars
const should = require('should');
const sinon = require('sinon');
const heroesController = require('../controllers/heroesRouteController'); // archivo que vamos a testear

describe('Heroes Controller', () => {
	describe('POST', () => {
		let res = null;
		let req = null;
		let Hero = null;
		let controller = null;
		beforeEach(() => {
			// Preparar el escenario, haciendo mocks
			Hero = function heroConstructor() {
				this.save = () => {};
			};

			req = {
				body: {}
			};
			res = {
				status: sinon.spy(),
				json: sinon.spy(),
				send: sinon.spy() // funcion q me permitira conocer mejor a la función
			};
			controller = heroesController(Hero);
		});
		it('should respond status 400 when name is missing', () => {
			controller.post(req, res);
			res.status
				.calledWith(400) // que ha sido llamada, cuantas veces ha sido llamada?
				.should.equal(
					true,
					'Bad status, name is not required in this scenario.'
				);
			res.send
				.calledWith('Name is required!')
				.should.equal(true, 'Message is not correct.');
		});
		it('should respond 201 when req.body has a name', () => {
			req.body.name = 'SantiSherardEsther';
			controller.post(req, res);
			res.status.calledWith(201).should.equal(true, 'Message is correct');
		});
	});
	describe('GET', () => {
		let res = null;
		let req = null;
		let Hero = null;
		let controller = null;
		let query = null;
		beforeEach(() => {
			// Preparar el escenario, haciendo mocks
			Hero = function heroConstructor() {
				this.find = () => {};
			};

			req = {
				body: {},
				query: {
					id: null
				}
			};
			res = {
				status: sinon.spy(),
				json: sinon.spy(),
				send: sinon.spy() // funcion q me permitira conocer mejor a la función
			};
			controller = heroesController(Hero);
		});
		it('Should respond 200 when query is missing', () => {
			query = {};
			controller.get(req, res);
		});
	});
});
