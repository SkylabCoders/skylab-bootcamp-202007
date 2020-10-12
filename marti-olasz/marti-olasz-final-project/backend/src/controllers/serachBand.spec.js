const { expect } = require('chai');
const sinon = require('sinon');

const searchBand = require('./searchBand');

describe('Search Band test', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should find is called', () => {
    const Band = {
      find: () => {}
    };
    const req = {
      params: { text: 'klk' }
    };
    const res = {
      status: () => {}
    };

    const findStub = sinon.stub(Band, 'find');

    searchBand(Band)(req, res);

    expect(findStub.called).to.be.true;
  });
});
