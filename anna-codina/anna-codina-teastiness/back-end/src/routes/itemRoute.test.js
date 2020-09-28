const { expect } = require('chai');
const sinon = require('sinon');
const route = require('./itemRouter');

describe('itemRoute', () => {
  it('should itemRoute be definded', () => {
    expect(route()).to.exist;
  });
});
