const sinon = require("sinon");
const { expect } = require("chai");
const { describe, it } = require("mocha");
const spotsController = require("../controllers/spotsController");
const Spot = require("../models/spots.model");
const User = require("../models/users.model");

describe("Spots controller testing", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("Spots - should get an error message if anything goes wrong", (done) => {
    const spots = {
      find: (callback, spots) => {
        callback(error);
      },
    };
    const req = { body: { carLength: 4000 } };
    const res = { send: () => {}, status: () => {}, json: () => {} };
    const error = new Error();
    const findFake = sinon.fake.yields(true);
    sinon.replace(Spot, "find", findFake);
    const sendSpy = sinon.spy(res, "send");
    spotsController.getSpotsController(req, res);
    done();
    expect(sendSpy.called).to.be.true;
  });

  it("Spots - should get all spots", (done) => {
    const spots = {
      find: (callback, spots) => {
        callback(error);
      },
    };
    const req = { body: { carLength: 4000 } };
    const res = { send: () => {}, status: () => {}, json: () => {} };
    const error = new Error();
    const findFake = sinon.fake.yields(false);
    sinon.replace(Spot, "find", findFake);
    const sendSpy = sinon.spy(res, "send");
    spotsController.getSpotsController(req, res);
    done();
    expect(sendSpy.called).to.be.true;
  });

  it("Aparcao - should get the user a new coordinates", (done) => {
    sinon.stub(User, "findOneAndUpdate").returns({ value: true });
    sinon.stub(User, "findOne").returns({ value: true });
    const req = {
      body: { name: "a", userLatitude: "1", userLongitude: "1" },
    };
    const res = { send: () => {}, json: () => {}, status: () => {} };
    const jsonSpy = sinon.spy(res, "json");
    spotsController.aparcaoController(req, res);
    done();
    expect(jsonSpy.called).to.be.true;
  });

  it("Aparcao - should get the user a new coordinates", (done) => {
    sinon.stub(User, "findOneAndUpdate").returns({ value: true });
    sinon.stub(User, "findOne").returns({ value: true });
    const req = {
      body: { name: "a", userLatitude: null, userLongitude: null },
    };
    const res = { send: () => {}, json: () => {}, status: () => {} };
    const jsonSpy = sinon.spy(res, "json");
    spotsController.desaparcaoController(req, res);
    done();
    expect(jsonSpy.called).to.be.true;
  });

  it("Create spot - should find a spot if it exists", (done) => {
    sinon.stub(Spot, "findOne").returns(true);
    const req = {
      body: { spotLatitude: 1, spotLongitude: 1, carLength: 4000 },
    };
    const res = { send: () => {}, status: () => {} };
    const sendSpy = sinon.spy(res, "send");
    spotsController.createSpotController(req, res);
    done();
    expect(sendSpy.called).to.be.true;
  });

  it("Create spot - should create a new spot if it does not exist", (done) => {
    sinon.stub(Spot, "findOne").returns(false);
    let spot = new Spot();
    sinon.stub(Spot.prototype, "save").returns(true);
    const req = {
      body: { spotLatitude: 1, spotLongitude: 1, carLength: 4000 },
    };
    const res = { send: () => {}, status: () => {} };
    const sendSpy = sinon.spy(res, "send");
    spotsController.createSpotController(req, res);
    done();
    expect(sendSpy.called).to.be.true;
  });

  it("Destroy spot - should find a spot if it exists", (done) => {
    sinon.stub(Spot, "findOne").returns(true);
    let spot = new Spot();
    sinon.stub(Spot.prototype, "delete").returns(true);
    const req = { body: { spotLatitude: 1, spotLongitude: 1 } };
    const res = { send: () => {}, status: () => {} };
    const sendSpy = sinon.spy(res, "send");
    spotsController.destroySpotController(req, res);
    done();
    expect(sendSpy.called).to.be.true;
  });

  it("Destroy spot - should send a message if no spot found", (done) => {
    sinon.stub(Spot, "findOne").returns(false);
    const req = { body: { spotLatitude: 1, spotLongitude: 1 } };
    const res = { send: () => {}, status: () => {} };
    const sendSpy = sinon.spy(res, "send");
    spotsController.destroySpotController(req, res);
    done();
    expect(sendSpy.called).to.be.true;
  });
});
