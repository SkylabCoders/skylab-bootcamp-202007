const should = require("should");
const { expect, assert } = require("chai");
const Userr = require("../models/User");
const secretServices = require("../_helpers/secretServices");

const sinon = require("sinon");

const authControllers = require("../controllers/authControllers");
const authRouter = require("../auth/authRouter");

describe("Authorization Controllers Test", () => {
  beforeEach(() => {});
  afterEach(() => {
    sinon.restore();
  });

  it("should return a message if user already exist in DB", (done) => {
    sinon.stub(Userr, "findOne").returns(true);
    const req = {
      body: {
        username: "alex",
        password: "larrañaga",
        firstName: "alex",
        lastName: "larrañaga",
      },
    };
    const res = {
      send: () => {},
      json: () => {},
      sendStatus: () => {},
    };
    const response = {
      status: 451,
      message: "User: " + req.body.user + " already exist",
    };
    const user = {
      hash: "1121",
    };

    const jsonSpy = sinon.spy(res, "json");
    authControllers.registrationController(req, res);
    done();
    expect(jsonSpy.calledWith(response)).to.be.true;
  });
  it("it should save a user if a password is provided", (done) => {
    sinon.stub(Userr, "findOne").returns({});
    const res = {
      send: () => {},
      json: () => {},
      sendStatus: () => {},
    };
    const req = {
      body: {
        username: "alex",
        password: "larrañaga",
        firstName: "alex",
        lastName: "larrañaga",
      },
    };
    const response = {
      status: 401,
      message: "Password is required",
    };

    const findSPy = sinon.spy(res, "json");
    done();
    authControllers.registrationController(req, res);
    expect(findSPy.callledWith(response)).to.be.true;
  });

  it("should call Model finder to search database", (done) => {
    const req = {
      body: {
        username: "alex",
        password: "larrañaga",
        firstName: "alex",
        lastName: "larrañaga",
      },
    };
    const res = {
      send: () => {},
      json: () => {},
      sendStatus: () => {},
    };
    const data = {
      username: "some valuie",
    };
    const findOneSpy = sinon.spy(Userr, "findOne");

    authControllers.registrationController(req, res);
    done();
    expect(findOneSpy.called).to.be.true;
  });

  it("Should return a message if password is not provided", (done) => {
    sinon.stub(Userr, "findOne").returns({});
    const res = {
      send: () => {},
      json: () => {},
      sendStatus: () => {},
    };
    const req = {
      body: {
        username: "alex",
        firstName: "alex",
        lastName: "larrañaga",
      },
    };
    const findSPy = sinon.spy(res, "json");
    authControllers.registrationController(req, res);
    done();
    expect(findSPy.callled).to.be.true;
  });

  it("NEED TO GO THORUG USER.SAVE", (done) => {
    sinon.stub(Userr.prototype, "save");
    const res = {
      send: () => {},
      json: () => {},
      sendStatus: () => {},
    };
    const req = {
      body: {
        username: "alex",
        firstName: "alex",
        lastName: "larrañaga",
        password: "bullshit",
      },
    };
    const findSPy = sinon.spy(res, "json");
    authControllers.registrationController(req, res);

    expect(true).to.be.false;
  });

  it("should find a user if alreadu exist", (done) => {
    sinon.stub(Userr, "findOne").returns({ value: true });
    sinon.stub(secretServices, "hashValidator").returns(true);

    const res = {
      send: () => {},
    };
    const req = {
      body: {
        username: "alex",
        firstName: "alex",
        lastName: "larrañaga",
        password: "bullshit",
      },
    };
    // const user = { id: 1, toJSON: () => {} };
    const token = "mytoken";

    const jsonSpy = sinon.spy(res, "send");

    authControllers.loginController(req, res);
    done();
    expect(jsonSpy.called).to.be.true;
  });

  it("should return an error if password is not correct", (done) => {
    sinon.stub(Userr, "findOne").returns({ value: true });
    sinon.stub(secretServices, "hashValidator").returns(false);
    let user = { id: 1, hash: "hash" };

    const res = {
      json: () => {},
    };
    const req = {
      body: {
        username: "alex",
        firstName: "alex",
        lastName: "larrañaga",
        password: "bullshit",
      },
    };

    const jsonSpy = sinon.spy(res, "json");

    authControllers.loginController(req, res);
    expect(jsonSpy.called).to.be.true;
    done();
  });

  it("should continue if User is not find & password is not provided", (done) => {
    sinon.stub(Userr, "findOne").returns(false);
    const req = {
      body: {
        username: "alex",
        firstName: "alex",
        lastName: "larrañaga",
      },
    };
    const res = {
      json: () => {},
    };

    const jsonSpy = sinon.spy(res, "json");
    authControllers.registrationController(req, res);
    done();
    expect(jsonSpy.called).to.be.true;
  });
});
