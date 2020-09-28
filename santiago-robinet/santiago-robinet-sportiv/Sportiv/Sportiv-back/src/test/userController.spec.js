const sinon = require("sinon");
const { expect } = require("chai");
const userController = require("../controllers/userRouterController");

describe("USER ROUTER CONTROLLER", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("should respond status 200", () => {
    const req = {
      user: { userName: "pepe" },
    };

    const res = {
      status: () => {},
      json: () => {},
    };

    const statusSpy = sinon.spy(res, "status");
    userController.get(req, res);
    expect(statusSpy.calledWith(200)).to.be.true;
  });

  it("should respond user", () => {
    const req = {
      user: { userName: "pepe" },
    };

    const res = {
      status: () => {},
      json: () => {},
    };

    const jsonSpy = sinon.spy(res, "json");
    const { user } = req;
    userController.get(req, res);
    expect(jsonSpy.calledWith(user)).to.be.true;
  });

  it("should respond 404", () => {
    const req = {};

    const res = {
      status: () => {},
      json: () => {},
    };

    const statusSpy = sinon.spy(res, "status");
    userController.get(req, res);
    expect(statusSpy.calledWith(404)).to.be.true;
  });
});
