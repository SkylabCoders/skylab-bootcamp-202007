const { expect } = require('chai');
const sinon = require('sinon');
const controler = require('../controler/heroesRouteControler');

describe('Heroes controler', () => {
	afterEach(() => {
		sinon.restore();
	});
	it('Spy POST should respond with status 201', () => {
		// creamos un STAT del comportamiento que nos interesa.

		const Hero = function hero() {
			this.save = () => {};
		};

		const req = {
			body: {
				name: 'bombasto'
			}
		};
		const res = {
			status: () => {},
			json: () => {}
		};
		// Creamos los spy y les indicamos donde estan los espias y el mtodo que que queremos espiar
		const statusSpy = sinon.spy(res, 'status');

		controler(Hero).post(req, res);

		expect(statusSpy.calledWith(201)).to.be.true;
	});
	it('Spy POST should respond with status 400', () => {
		const Hero = function hero() {
			this.save = () => {};
		};

		const req = {
			body: {}
		};
		const res = {
			status: () => {},
			send: () => {}
		};
		const statusSpy = sinon.spy(res, 'status');

		controler(Hero).post(req, res);

		expect(statusSpy.calledWith(400)).to.be.true;
	});
	it('Spy POST should call find without query', () => {
		const Hero = {
			find: () => {}
		};

		const req = {};
		const res = {};
		const findSpy = sinon.spy(Hero, 'find');

		controler(Hero).get(req, res);
	});
	it('Spy GET should call find a query', () => {
		const Hero = {
			find: () => {}
		};

		const req = {
			query: {
				id: '13'
			}
		};
		const res = {};
		const findSpy = sinon.spy(Hero, 'find');

		controler(Hero).get(req, res);

		expect(findSpy.called).to.be.true;
	});
});
