const { expect } = require('chai');
const sinon = require('sinon');

const newPhoto = require('./newPhoto');

describe('New photo test', () => {
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

    const findByIdAndUpdateSpy = sinon.spy(Band, 'findByIdAndUpdate');

    newPhoto(Band)(req, res);

    expect(findByIdAndUpdateSpy.called).to.be.true;
  });
});
