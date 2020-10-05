const { expect } = require('chai');
const sinon = require('sinon');

const newDisc = require('./newDisc');

describe('New disc test', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should findByIdAndUpdate is called', () => {
    const req = {
      params: { id: 1 },
      body: {
        title: 'title',
        date: 'date',
        songs: []
      }
    };
    const res = {};
    const Band = {
      findByIdAndUpdate: () => {}
    };

    const findByIdAndUpdateStub = sinon.stub(Band, 'findByIdAndUpdate');

    newDisc(Band)(req, res);

    expect(findByIdAndUpdateStub.called).to.be.true;
  });
});
