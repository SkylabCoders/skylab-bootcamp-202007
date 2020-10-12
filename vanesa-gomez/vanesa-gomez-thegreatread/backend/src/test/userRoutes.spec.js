const sinon = require('sinon');
const { expect } = require('chai');
const routes = require('../routes/userRoutes');

describe('USER ROUTES', () => {
    afterEach(() => {
        sinon.restore();
    });

    it('should return routes', () => {
        expect(routes()).to.exist;
    });
});
