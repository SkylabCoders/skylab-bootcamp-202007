

const { expect } = require('chai');
const sinon = require('sinon');
const controller = require('../controllers/heroesRouteController');
const heroesController = require('../controllers/heroesRouteController');

describe('Heroes Controller', () => {
	it('should respond with status 201', () => {});

	it('should respond with status 400', () => {});

	it('get, should call find without query', () => {});

	it('get, should call find with a query', () => {});

	// it('get, should call find with a query', () => {
	// 	const Hero = {
	// 		find: (query, callback) => {}
	// 	};

	// 	const req = {
	// 		query: {
	// 			id: 'myId'
	// 		}
	// 	};
	// 	const res = {};

	// 	const findFake = sinon.fake();

	// 	const controller = heroesController(Hero);
	// 	controller.get(req, res);

	// 	expect(findFake.called).to.be.true;
	// });
});
