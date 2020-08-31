const should = require('should');
const sinon = require('sinon');
const heroesController = require('../../controllers/heroesRoutesController');

describe('Hero Controller', () => {
	let Hero = null;
	let req = null;
	let res = null;
    let controller = null;

	describe('POST', () => {

		beforeEach(() => {
			Hero = function heroConstructor() {
				this.save = () => {};
			};
			req = {
                body: {}
			};
			res = {
				status: sinon.spy(),
				send: sinon.spy(),
				json: sinon.spy()
			};

			controller = heroesController(Hero);
			controller.post(req, res);
		});

		it('should throw 400 when name is missing ', () => {
			// assert post is undefined
			res.status
				.calledWith(400)
				.should.equal(true, 'Bad status, name is required');

			res.send
				.calledWith('Name is require')
				.should.equal(true, 'Message is not correct');
		});

		it('should throw status 201 when name is passed', () => {
            req.body.name = 'Esther';
            controller.post(req, res);
            res.status.calledWith(201).should.equal(true, 'Message is correct')
            // res.json.to.have.been.called().should.equal(true)
        });
	});

	describe('GET', () => {

        beforeEach(() => {
			Hero = function heroConstructor() {
				this.find = () => {};
			};
			req = {
                body: {}
			};
			res = {
				status: sinon.spy(),
				send: sinon.spy(),
				json: sinon.spy()
			};

			controller = heroesController(Hero);
			controller.get(req, res);
		});

		it('should respond 400 when query is missing', () => {
            res.status.calledWith(400).should.equal(true, 'ALgo');
        });
	});
});
