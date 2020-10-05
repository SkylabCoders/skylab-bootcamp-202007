const { expect } = require('chai');
const sinon = require('sinon');

const updateUser = require('./updateUser');

describe('Update user test', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should called findByIdAndUpdate', () => {
    const User = {
      findByIdAndUpdate: () => {
        return {
          populate: () => {
            return {
              populate: () => {
                return {
                  exec: () => {}
                };
              }
            };
          }
        };
      }
    };
    const req = { params: { id: 1 }, body: { name: 'name' } };
    const res = {};

    const findByIdAndUpdateStub = sinon.spy(User, 'findByIdAndUpdate');

    updateUser(User)(req, res);

    expect(findByIdAndUpdateStub.called).to.be.true;
  });
});
