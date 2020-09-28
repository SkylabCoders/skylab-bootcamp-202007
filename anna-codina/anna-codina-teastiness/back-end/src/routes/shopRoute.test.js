const { expect } = require('chai');
const sinon = require('sinon');
const route = require('./shopRouter');

describe('itemRoute', () => {
  it('should shopRouter be definded', () => {
    expect(route()).to.exist;
  });
});
