const { expect } = require('chai');
const sinon = require('sinon');

const authRoutes = require('./authRoutes');

describe('Auth router test', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should authrouter be defined', () => {
    const User = {};
    const route = authRoutes(User);

    expect(route).to.not.be.undefined;
  });
});
