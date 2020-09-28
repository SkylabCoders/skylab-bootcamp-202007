// eslint-disable-next-line no-unused-vars
const {
	expect
} = require('chai');
const should = require('should');
const sinon = require('sinon');
const {
	get
} = require('./poemsRouteController');
const poemsController = require('./poemsRouteController')

describe('Poems Controller', () => {
	afterEach(() => {
		sinon.restore();
	});
	describe('GET, find, with error true', () => {
		it('we test the callback inside of find', () => {
			const Poem = {
				author: 'Karmelo Iribarren',
				find: () => {}
			};

			const req = {
				query: {
					id: '2',
					author: 'Karmelo Iribarren'
				}
			};
			const res = {
				json: sinon.spy(),
				send: sinon.spy()
			};

			const findFake = sinon.fake.yields(true, {
				author: 'Karmelo Iribarren'
			});
			sinon.replace(Poem, 'find', findFake);

			const controller = poemsController(Poem);
			controller.get(req, res);

			res.send.called.should.equal(true);
		});
	});
	describe('GET, find, with error false', () => {
		it('we test the callback inside of find', () => {
			const Poem = {
				author: 'Karmelo Iribarren',
				find: () => {}
			};

			const req = {
				query: {
					author: 'Karmelo Iribarren'
				}
			};
			const res = {
				json: sinon.spy(),
				send: sinon.spy()
			};

			const findFake = sinon.fake.yields(false, {
				author: 'Karmelo Iribarren'
			});
			sinon.replace(Poem, 'find', findFake);

			const controller = poemsController(Poem);
			controller.get(req, res);

			res.json.called.should.equal(true);
		});
	});
	describe('POST', () => {
		it('should respond status 201 when poem is created ok', () => {
			const Poem = function poemConstructor() {
				this.save = () => {};
			};

			const req = {
				body: {
					title: 'Poema 20'
				}
			};

			const res = {
				status: sinon.spy(),
				json: sinon.spy()
			};

			const controller = poemsController(Poem);
			controller.post(req, res);

			res.status.calledWith(201).should.equal(true);
		});
	});
});