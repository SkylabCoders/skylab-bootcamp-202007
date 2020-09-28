const { expect } = require('chai');
const sinon = require('sinon');
const helper = require('./helpers');

describe('helpers', () => {
  let oldArray;
  const bestHero = { _id: 'bombasto' };
  const worstHero = { _id: 'celeritas' };
  beforeEach(() => {
    oldArray = [bestHero];
    oldArray = helper.arrayUpload(worstHero, oldArray);
  });
  it('should add an item in the array', () => {
    expect(oldArray.length === 2).to.be.true;
  });
  it('should add an item in the array', () => {
    oldArray = helper.arrayUpload(worstHero._id, oldArray);
    expect(oldArray.length === 1).to.be.true;
  });
});
