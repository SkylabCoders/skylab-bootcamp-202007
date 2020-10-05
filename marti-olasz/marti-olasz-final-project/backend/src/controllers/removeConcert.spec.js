const { expect } = require('chai');
const sinon = require('sinon');

const removeConcert = require('./removeConcert');

describe('Remove concert test', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should findByIdAndUpdate is called', () => {
    const req = {
      params: { id: 1 },
      body: { deleteId: 1 }
    };
    const res = {};
    const Band = {
      findByIdAndUpdate: () => {}
    };

    const findByIdAndUpdateStub = sinon.stub(Band, 'findByIdAndUpdate');

    removeConcert(Band)(req, res);

    expect(findByIdAndUpdateStub.called).to.be.true;
  });
});
