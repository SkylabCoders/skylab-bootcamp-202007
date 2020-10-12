const { expect } = require('chai');
const sinon = require('sinon');

const removePhoto = require('./removePhoto');

describe('Remove photo test', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should call findByIdAndUpdate', () => {
    const Band = { findByIdAndUpdate: () => {} };
    const req = { params: { id: 13 }, body: { band: 'band' } };

    const findByIdAndUpdateStub = sinon.stub(Band, 'findByIdAndUpdate');

    removePhoto(Band)(req);

    expect(findByIdAndUpdateStub.called).to.be.true;
  });
});
