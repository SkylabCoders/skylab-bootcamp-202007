const sinon = require("sinon");
const { expect } = require("chai");
const { describe, it } = require("mocha");
const authController = require("../controllers/authController");
const User = require("../models/users.model");
const secureServices = require("../../_helpers/secureServices");

describe("Auth controller testing", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("Login - should find a user if it exists", (done) => {
    sinon.stub(User, "findOne").returns({ value: true, toJSON: () => {} });
    sinon.stub(secureServices, "hashValidator").returns(true);
    const user = { id: 1 };
    const req = { body: { name: "a", password: "a" } };
    const res = { send: () => {}, json: () => {} };
    const sendSpy = sinon.spy(res, "send");
    authController.loginController(req, res);
    done();
    expect(sendSpy.called).to.be.true;
  });

  it("Login - should get an error if password cannot validate to hash", (done) => {
    sinon.stub(User, "findOne").returns({ value: true });
    sinon.stub(secureServices, "hashValidator").returns(false);
    const user = { id: 1 };
    const req = { body: { name: "a", password: "a" } };
    const res = { send: () => {}, json: () => {} };
    const jsonSpy = sinon.spy(res, "json");
    authController.loginController(req, res);
    done();
    expect(jsonSpy.called).to.be.true;
  });

  it("Login - should return an error message if user and password don't match or user does not exist", (done) => {
    const req = { body: { name: "a", password: "" } };
    const res = { send: () => {}, json: () => {} };
    const response = {
      message: "User and password do not match",
      status: 404,
    };
    const jsonSpy = sinon.spy(res, "json");
    authController.loginController(req, res);
    done();
    expect(jsonSpy.calledWith(response)).to.be.true;
  });

  it("Sign up - should get a message when the user already exists", (done) => {
    sinon.stub(User, "findOne").returns(true);
    const req = { body: { name: "a", email: "a", password: "a" } };
    const res = { json: () => {}, send: () => {} };
    const response = {
      message: `User ${req.body.name} already exists`,
      status: 409,
    };
    const jsonSpy = sinon.spy(res, "json");
    authController.signUpController(req, res);
    done();
    expect(jsonSpy.calledWith(response)).to.be.true;
  });

  it("Sign up - should save a user if a password is provided", async () => {
    sinon.stub(User, "findOne").returns(false);
    let user = new User();
    sinon.stub(User.prototype, "save").returns(true);
    const req = { body: { name: "v", email: "v", password: "v" } };
    const res = { json: () => {} };
    const jsonSpy = sinon.spy(res, "json");
    await authController.signUpController(req, res);
    expect(jsonSpy.called).to.be.true;
  });

  it("Sign up - sould send an error message if password is not provided", (done) => {
    sinon.stub(User, "findOne").returns();
    const req = { body: { name: "a", email: "a" } };
    const res = { json: () => {}, send: () => {}, status: () => {} };
    const response = { message: "Password required.", status: 409 };
    const jsonSpy = sinon.spy(res, "json");
    authController.signUpController(req, res);
    done();
    expect(jsonSpy.calledWith(response)).to.be.true;
  });

  it("Load user - should load the user if it exists", (done) => {
    sinon.stub(User, "findOne").returns({ value: true });
    const user = { id: 1 };
    const req = { body: { name: "a", password: "a" } };
    const res = { json: () => {} };
    const jsonSpy = sinon.spy(res, "json");
    authController.loadUserController(req, res);
    done();
    expect(jsonSpy.called).to.be.true;
  });

  it("Load user - should return an error message if user and password don't match or user does not exist", (done) => {
    sinon.stub(User, "findOne").returns(false);
    const req = { body: { name: "a", password: "" } };
    const res = { json: () => {} };
    const response = {
      message: "Invalid user",
      status: 404,
    };
    const jsonSpy = sinon.spy(res, "json");
    authController.loadUserController(req, res);
    done();
    expect(jsonSpy.calledWith(response)).to.be.true;
  });

  it("Change password - should change the password if the user exists", async () => {
    sinon.stub(User, "findOne").returns(new User());
    sinon.stub(secureServices, "hashValidator").returns(true);
    sinon.stub(User.prototype, "save");
    const req = { body: { name: "a", password: "a", newPassword: "b" } };
    const res = { json: () => {} };
    const jsonSpy = sinon.spy(res, "json");
    await authController.changePasswordController(req, res);
    expect(jsonSpy.called).to.be.true;
  });

  it("Change password - should send a message if user does not exist or can't validate hash", async () => {
    sinon.stub(User, "findOne").returns({ value: true });
    sinon.stub(secureServices, "hashValidator").returns(false);
    const req = { body: { name: "a", password: "", newPassword: "" } };
    const res = { json: () => {} };
    const jsonSpy = sinon.spy(res, "json");
    await authController.changePasswordController(req, res);
    expect(jsonSpy.called).to.be.true;
  });
});
