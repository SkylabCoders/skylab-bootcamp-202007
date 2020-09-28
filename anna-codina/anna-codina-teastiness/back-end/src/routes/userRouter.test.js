const { expect } = require('chai');
const sinon = require('sinon');
const route = require('./userRouter');

describe('itemRoute', () => {
  it('should userRouter be definded', () => {
    expect(route()).to.exist;
  });
});
