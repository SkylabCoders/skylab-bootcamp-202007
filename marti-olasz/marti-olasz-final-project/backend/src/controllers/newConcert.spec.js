const { expect } = require('chai');
const sinon = require('sinon');

const newConcert = require('./newConcert');

describe('New concert test', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should findByIdAndUpdate is called', () => {
    const req = {
      params: { id: 1 },
      body: {}
    };
    const res = {};
    const Band = {
      findByIdAndUpdate: () => {}
    };

    const findByIdAndUpdateStub = sinon.stub(Band, 'findByIdAndUpdate');

    newConcert(Band)(req, res);

    expect(findByIdAndUpdateStub.called).to.be.true;
  });
});
