// eslint-disable-next-line no-unused-vars
const should = require('should');
const sinon = require('sinon');
const heroesController = require('../controllers/heroesRouteController');

describe('Heroes Controller', () => {
	describe('POST', () => {
        beforeEach(() => {
            const Hero = function heroConstructor() {
                this.save = () => {}; /* mocqueo save pq me da igual lo que lleve */

			};

			this.req = {
				body: {}
			};
			this.res = {
				status: sinon.spy(),
				json: sinon.spy(),
				send: sinon.spy()
			};

			const controller = heroesController(Hero); /* esta es la segunda parte */
			controller.post(this.req, this.res);
        })

        it('should respond status 400 when name is missing', () => {
			/* ahora vienen las assertions */
			/* this.res.status.calledWith(400).should.equal(true) - haría esto primero para q fallen los tests */
			this.res.status
				.calledWith(400)
				.should.equal(true, 'message is the one i put here');
			this.res.send
				.calledWith('name is required')
				.should.equal(false, 'another message to distinguish where is failing');
        });
        
        it('should respond status 201 when hero is created ok', () => {
            this.req = {
                body: {
                    name: "Messi"
                }
            }
            
            this.res.status.calledWith(201).should.equal(true)
		});
        
    });
    describe('GET', () => {
        beforeEach(() => {
            const Hero = {id:14, find: () => {}}
			

			this.req = {
				query: {
                    id: '14'
                }
			};
			this.res = {
				json: sinon.spy(),
				send: sinon.spy()
			};

			const controller = heroesController(Hero);
			controller.get(this.req, this.res);
        })
    
        
        it('shoud return a hero', () => {
            this.res.should.have.property('json')
        })

    })
});
