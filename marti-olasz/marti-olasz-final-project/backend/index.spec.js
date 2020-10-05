const { expect } = require('chai');
const sinon = require('sinon');

const app = require('./index');

describe('Index test', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should app is defined', () => {
    expect(app).to.not.be.undefined;
  });
});
