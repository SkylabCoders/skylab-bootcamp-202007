const { expect } = require('chai');
const sinon = require('sinon');

const removeFollow = require('./removeFollow');

describe('Remove follow test', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should call findByIdAndUpdate', () => {
    const User = { findByIdAndUpdate: () => {} };
    const req = { params: { id: 13 }, body: { band: 'band' } };

    const findByIdAndUpdateStub = sinon.stub(User, 'findByIdAndUpdate');

    removeFollow(User)(req);

    expect(findByIdAndUpdateStub.called).to.be.true;
  });
});
