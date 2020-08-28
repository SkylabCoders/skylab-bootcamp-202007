// Para usar un expect necesitamos importarlo de chai
const { expect } = require('chai');

// Lo requerimos para poder usar spies, stubs, mocks and fakes.
const sinon = require('sinon');

const controller = require('../controllers/heroesRouteController');

//Para saber que pasa con los efectos secundarios de los test tenemos que tener sinon y expect, provamos la unidad, que el resultado de 2+2 es 4. No como lo consigues. Lo que pase fuera de allí no me importa
// Primero a validar es que el test funcione, tenemos que provar un expect, de true to be true.
describe('Heroes Controller(with SPY)', () => {
	afterEach(() => {
		sinon.restore();
	});

	it('should respond with status 201', () => {
		// Como llegamos al post? Para llegar necesitamos un Hero, un req i una res
		// Hero es una fn constructora que recibe un body, ln 3 heroesRouteController
		const Hero = function () {
			// Hero además tiene una dn save, ln 8
			this.save = () => {};
		};
		const req = {
			body: {
				name: 'Bombasto'
			}
		};
		const res = {
			// res es un obj que tiene status que es una fn que no me interesa lo que hace, ln 10
			status: () => {},
			json: () => {}
		};

		// Más adelante nos damos cuenta que res status necesita un inicializador, y tenemos que crear un statusSpy
		// Tenemos que decir en que obj esta el espia, y que queremos espiar
		// El orgen importa, 1r argumento nos inica sonde esta el espia, 2o el nombre del método
		const statusSpy = sinon.spy(res, 'status');

		// Ejecutamos a controller con Hero en post con req, res
		controller(Hero).post(req, res);

		// Comprobamos que el espia de json ha sido llamado con 201, crearemos una cosa llamada statusSpy
		// assertion es que el status ha sido llamado con 201
		expect(statusSpy.calledWith(201)).to.be.true;
	});
	it('should respond with status 400', () => {
		// Como llegamos al post? Para llegar necesitamos un Hero, un req i una res
		// Hero es una fn constructora que recibe un body, ln 3 heroesRouteController
		const Hero = function () {
			// Hero además tiene una dn save, ln 8
			this.save = () => {};
		};
		const req = {
			body: {}
		};
		const res = {
			// res es un obj que tiene status que es una fn que no me interesa lo que hace, ln 10
			status: () => {},
			json: () => {},
			send: () => {}
		};

		// Más adelante nos damos cuenta que res status necesita un inicializador, y tenemos que crear un statusSpy
		// Tenemos que decir en que obj esta el espia, y que queremos espiar
		// El orgen importa, 1r argumento nos inica sonde esta el espia, 2o el nombre del método
		const statusSpy = sinon.spy(res, 'status');

		// Ejecutamos a controller con Hero en post con req, res
		controller(Hero).post(req, res);

		// Comprobamos que el espia de json ha sido llamado con 400, crearemos una cosa llamada statusSpy
		// assertion es que el status ha sido llamado con 400
		expect(statusSpy.calledWith(400)).to.be.true;
	});
	it('should call find without query', () => {
		const Hero = {
			// Aqui ya no necesitamos al héroe con la fn save, sino con find, ln 19
			find: () => {}
		};
		const req = {};

		const res = {};

		// Creamos un espia del find, dentro del objecto Heroes queremos espiar a find
		const findSpy = sinon.spy(Hero, 'find');

		controller(Hero).get(req, res);

		expect(findSpy.called).to.be.true;
		expect(findSpy.calledWith()).to.be.true;
	});
	it('should call find with an id', () => {
		const Hero = {
			// Aqui ya no necesitamos al héroe con la fn save, sino con find, ln 19
			find: () => {}
		};
		const req = {
			query: {
				id: 'myId'
			}
		};

		const res = {};

		// Creamos un espia del find, dentro del objecto Heroes queremos espiar a find
		const findSpy = sinon.spy(Hero, 'find');

		controller(Hero).get(req, res);

		expect(findSpy.calledWith({ id: 'myId' })).to.be.true;
	});
	it('should call find with a query', () => {
		const Hero = {
			// Aqui ya no necesitamos al héroe con la fn save, sino con find, ln 19
			find: () => {}
		};
		const req = {
			query: {
				id: 'myId'
			}
		};

		const res = {};

		// Creamos un espia del find, dentro del objecto Heroes queremos espiar a find
		const findSpy = sinon.spy(Hero, 'find');

		controller(Hero).get(req, res);

		expect(findSpy.called).to.be.true;
	});
});
