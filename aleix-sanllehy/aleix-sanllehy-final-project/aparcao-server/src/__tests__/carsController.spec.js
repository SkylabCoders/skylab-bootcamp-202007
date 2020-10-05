const sinon = require("sinon");
const { expect } = require("chai");
const { describe, it } = require("mocha");
const carsController = require("../controllers/carsController");
const Makes = require("../models/makes.model");
const Models = require("../models/models.model");
const User = require("../models/users.model");

describe("Makes controller testing", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("Makes - should get an error message if anything goes wrong", (done) => {
    const makes = {
      find: (callback, makes) => {
        callback(error);
      },
    };
    const req = {};
    const res = { send: () => {}, status: () => {}, json: () => {} };
    const error = new Error();
    const findFake = sinon.fake.yields(true);
    sinon.replace(Makes, "find", findFake);
    const sendSpy = sinon.spy(res, "send");
    carsController.getMakesController(req, res);
    done();
    expect(sendSpy.called).to.be.true;
  });

  it("Makes - should get all makes", (done) => {
    const makes = {
      find: (callback, makes) => {
        callback(error);
      },
    };
    const req = {};
    const res = { send: () => {}, status: () => {}, json: () => {} };
    const error = new Error();
    const findFake = sinon.fake.yields(false);
    sinon.replace(Makes, "find", findFake);
    const sendSpy = sinon.spy(res, "send");
    carsController.getMakesController(req, res);
    done();
    expect(sendSpy.called).to.be.true;
  });

  it("Models - should get an error message if anything goes wrong", (done) => {
    const models = {
      find: (callback, models) => {
        callback(error);
      },
    };
    const req = { body: { make: "Honda" } };
    const res = { send: () => {}, status: () => {}, json: () => {} };
    const error = new Error();
    const findFake = sinon.fake.yields(true);
    sinon.replace(Models, "find", findFake);
    const sendSpy = sinon.spy(res, "send");
    carsController.getModelsByMakeController(req, res);
    done();
    expect(sendSpy.called).to.be.true;
  });

  it("Models - should get an error message if anything goes wrong", (done) => {
    const models = {
      find: (callback, models) => {
        callback(error);
      },
    };
    const req = { body: { make: "Honda" } };
    const res = { send: () => {}, status: () => {}, json: () => {} };
    const error = new Error();
    const findFake = sinon.fake.yields(false);
    sinon.replace(Models, "find", findFake);
    const sendSpy = sinon.spy(res, "send");
    carsController.getModelsByMakeController(req, res);
    done();
    expect(sendSpy.called).to.be.true;
  });

  it("Select car - should get a user with a new make and model", (done) => {
    sinon.stub(User, "findOneAndUpdate").returns({ value: true });
    sinon.stub(User, "findOne").returns({ value: true });
    const req = {
      body: { name: "a", make: "Volkswagen", model: "Golf", carLength: "4284" },
    };
    const res = { send: () => {}, json: () => {} };
    const jsonSpy = sinon.spy(res, "json");
    carsController.selectCarController(req, res);
    done();
    expect(jsonSpy.called).to.be.true;
  });
});
