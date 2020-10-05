const { expect } = require('chai');
const sinon = require('sinon');

const updateBand = require('./updateBand');

describe('Update band test', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should find is called', () => {
    const body = { name: 'name' };
    const Band = {
      findByIdAndUpdate: () => {}
    };
    const req = { params: { id: 0 }, body };
    const res = {};

    const findStub = sinon.spy(Band, 'findByIdAndUpdate');

    updateBand(Band)(req, res);

    expect(findStub.called).to.be.true;
  });
});
