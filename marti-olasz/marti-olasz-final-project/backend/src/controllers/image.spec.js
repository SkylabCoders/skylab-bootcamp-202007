const { expect } = require('chai');
const sinon = require('sinon');

const image = require('./image');

describe('Remove follow test', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should call res.json with path', () => {
    const req = {
      file: {
        path: { replace: () => {} }
      }
    };
    const res = { json: () => {} };

    const jsonSpy = sinon.spy(res, 'json');

    image.create(req, res);

    expect(jsonSpy.called).to.be.true;
  });
});
