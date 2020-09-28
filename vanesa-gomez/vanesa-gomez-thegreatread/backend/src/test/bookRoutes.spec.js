const sinon = require('sinon');
const { expect } = require('chai');
const routes = require('../routes/bookRoutes');

describe('BOOK ROUTES', () => {
    afterEach(() => {
        sinon.restore();
    });

    it('should return routes', () => {
        expect(routes()).to.exist;
    });
});
