const sinon = require("sinon");
const { expect } = require("chai");
const usersRoutesController = require("../controllers/usersRoutesController");
const User = require("../../models/userModel");

describe("USERS ROUTER CONTROLLER", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("should respond 400 when ocurr an error", () => {
    const res = {
      status: () => {},
      send: () => {},
    };

    const req = {};

    const error = true;

    const User = function constructor() {
      this.findOne = (query, callback) => {
        callback(error, false);
      };
    };

    const statusSpy = sinon.spy(res, "status");
    usersRoutesController(User).post(req, res);
    expect(statusSpy.calledWith(400)).to.be.true;
  });

  it("should respond 'user is required' when an error occurs", () => {
    const res = {
      status: () => {},
      send: () => {},
    };

    const req = {};

    const error = true;

    const User = function constructor() {
      this.findOne = (query, callback) => {
        callback(error, false);
      };
    };

    const sendSpy = sinon.spy(res, "send");
    usersRoutesController(User).post(req, res);
    expect(sendSpy.calledWith("user is required!")).to.be.true;
  });

  it("should respond status 404 when an error occurs", () => {
    const req = {
      body: {
        authid: { sub: "13513" },
      },
    };

    const res = {
      status: () => {},
      send: () => {},
      json: () => {},
    };

    const findOneFake = sinon.fake.yields(true, "some");
    sinon.replace(User, "findOne", findOneFake);
    const statusSpy = sinon.spy(res, "status");
    usersRoutesController(User).post(req, res);
    expect(statusSpy.calledWith(404)).to.be.true;
  });

  it("should respond 'User was already created' when found user", () => {
    const req = {
      body: {
        authid: { sub: "13513" },
      },
    };

    const res = {
      status: () => {},
      send: () => {},
      json: () => {},
    };

    const findOneFake = sinon.fake.yields(false, "foundUser");
    sinon.replace(User, "findOne", findOneFake);
    const sendSpy = sinon.spy(res, "send");
    usersRoutesController(User).post(req, res);
    expect(sendSpy.calledWith("User was already created")).to.be.true;
  });

  it("should respond 'User was already created' when found user", () => {
    const req = {
      body: {
        authid: { sub: "13513" },
      },
    };

    const res = {
      status: () => {},
      send: () => {},
      json: () => {},
    };

    const findOneFake = sinon.fake.yields(false, null);
    sinon.replace(User, "findOne", findOneFake);
    const statusSpy = sinon.spy(res, "status");
    usersRoutesController(User).post(req, res);
    expect(statusSpy.calledWith(201)).to.be.true;
  });
});
