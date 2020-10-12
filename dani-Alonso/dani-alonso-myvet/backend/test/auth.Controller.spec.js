const should = require("should");
const { expect } = require("chai");
const sinon = require("sinon");
const authController = require("../controllers/authController");
const { hashValidator, hashGenerator } = require("../src/_helpers/secret");
const User = require("../src/models/usersModel");

describe("auth controller testing ", () => {
  afterEach(() => {
    sinon.restore();
  });
  it("should find user if exist", (done) => {
    const user = { id: 1 };
    const req = {
      body: { username: "U", password: "u" },
    };
    const res = {
      json: (value) => {
        console.log(value, "ggkgkkgkgkg");
        return value;
      },
    };
    const myStub = sinon.stub(User, "findOne");
    myStub.returns(true);
    const myHash = sinon.fake.returns({
      hash: "$2a$10$kfwSBlUE4Ey8NPeafKMDIOiNiAH1zgnMZ1gjwEWIK3b.vX55wsVzW",
    });

    const jsonSpy = sinon.spy(res, "json");
    authController.loginUser(req, res);
    done();
    expect(jsonSpy.called).to.be.true;
  });

  it("should return 404 error if there is no user", (done) => {
    const user = { id: 1 };
    const req = {
      body: {},
    };
    const res = {
      json: (value) => {
        return value;
      },
    };
    const myStub = sinon.stub(User, "findOne");
    myStub.returns(false);
    const myHash = sinon.fake.returns(true);

    const jsonSpy = sinon.spy(res, "json");
    authController.loginUser(req, res);
    done();
    expect(jsonSpy.called).to.be.true;
  });

  it("should create user", (done) => {
    const req = {
      body: { username: "U", password: "u" },
    };
    const res = {
      json: (value) => {
        return value;
      },
    };
    const myStub = sinon.stub(User, "findOne");
    myStub.returns(true);
    sinon.fake.returns({
      hash: "$2a$10$kfwSBlUE4Ey8NPeafKMDIOiNiAH1zgnMZ1gjwEWIK3b.vX55wsVzW",
    });
    const jsonSpy = sinon.spy(res, "json");
    authController.registerUser(req, res);
    done();
    expect(jsonSpy.called).to.be.true;
  });

  it("should return error", (done) => {
    const req = {
      body: { username: "g", password: "g" },
    };
    const res = {
      json: (value) => {
        return value;
      },
    };
    const myStub = sinon.stub(User, "findOne");
    myStub.returns(false);
    sinon.fake.returns({
      hash: "$2a$10$kfwSBlUE4Ey8NPeafKMDIOiNiAH1zgnMZ1gjwEWIK3b.vX55wsVzW",
    });
    const jsonSpy = sinon.spy(res, "json");
    authController.registerUser(req, res);
    done();
    expect(jsonSpy.called).to.be.true;
  });
});
