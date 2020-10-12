const { expect } = require('chai');
const sinon = require('sinon');

const bandRoutes = require('./bandRoutes');

describe('Band router test', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should bandrouter be defined', () => {
    const Band = {};
    const route = bandRoutes(Band);

    expect(route).to.not.be.undefined;
  });
});
