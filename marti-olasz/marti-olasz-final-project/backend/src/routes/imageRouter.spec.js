const { expect } = require('chai');
const sinon = require('sinon');

const imageRoutes = require('./imageRouter');

describe('image router test', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should imagerouter be defined', () => {
    const route = imageRoutes();

    expect(route).to.not.be.undefined;
  });
});
