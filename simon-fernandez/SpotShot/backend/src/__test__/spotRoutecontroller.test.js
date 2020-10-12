const { expect } = require("chai");
const Busboy = require("busboy");
const Spots = require("../models/spotModel");
const databaseCalls = require("../database-utils/databaseCalls");
const sinon = require("sinon");
const spotRouteController = require("../controller/spotRouteController");
const validateDistanceLogic = require("../logic/validateDistance");
const { get } = require("mongoose");

describe("Spot Route Controller Test", () => {
  let req;
  let res;
  let response;
  afterEach(() => {
    sinon.restore();
  });
  it("should get an spot by id when spotId exist", (done) => {
    response = "myResponse";
    req = {
      params: {
        spotId: "mySpotId",
      },
    };
    res = {
      json: () => {},
    };
    sinon.stub(databaseCalls, "getProductById").returns(
      new Promise((resolve) => {
        resolve(response);
      })
    );
    const jsonSpy = sinon.spy(res, "json");
    spotRouteController.get(req, res);
    done();
    expect(jsonSpy.called).to.be.true;
  });
  it("should get all spots when spotId does not exist", (done) => {
    response = "myResponse";
    req = {
      params: {},
    };
    res = {
      json: () => {},
    };
    sinon.stub(databaseCalls, "getAllProducts").returns(
      new Promise((resolve) => {
        resolve(response);
      })
    );
    const jsonSpy = sinon.spy(res, "json");
    spotRouteController.get(req, res);
    done();
    expect(jsonSpy.called).to.be.true;
  });
  it("should not post a spot when distanceCheck returns true", async () => {
    res = {
      status: () => {},
      send: () => {},
    };
    req = {
      username: "myUsername",
      lat: 1,
      lgn: 1,
    };
    sinon
      .stub(databaseCalls, "getAllProducts")
      .returns([{ myUsername: "compareUser", lat: 1, lgn: 2 }]);

    sinon.stub(validateDistanceLogic, "validateDistance").returns(true);
    const statusSpy = sinon.spy(res, "status");
    const sendSpy = sinon.spy(res, "send");

    await spotRouteController.post(req, res);
    expect(statusSpy.called).to.be.true;
    expect(sendSpy.called).to.be.true;
  });
  it("should post a spot when distanceCheck returns false", async () => {
    res = {
      status: () => {},
      send: () => {},
      json: () => {},
    };
    req = {
      username: "myUsername",
      lat: 1,
      lgn: 1,
    };
    sinon
      .stub(databaseCalls, "getAllProducts")
      .returns([{ myUsername: "compareUser", lat: 1, lgn: 2 }]);

    sinon.stub(validateDistanceLogic, "validateDistance").returns(false);

    const statusSpy = sinon.spy(res, "status");

    await spotRouteController.post(req, res);
    expect(statusSpy.called).to.be.true;
  });
  it("should save if does not show an error", async () => {
    res = {
      status: () => {},
      send: () => {},
      json: () => {},
    };
    req = {
      username: "myUsername",
      lat: 1,
      lgn: 1,
    };
    sinon
      .stub(databaseCalls, "getAllProducts")
      .returns([{ myUsername: "compareUser", lat: 1, lgn: 2 }]);

    sinon.stub(validateDistanceLogic, "validateDistance").returns(false);
    // sinon.stub(Spots.prototype, "save");
    const saveFake = sinon.fake.yields(null, "mySpotId");
    sinon.replace(Spots.prototype, "save", saveFake);
    const statusSpy = sinon.spy(res, "status");

    await spotRouteController.post(req, res);
    expect(statusSpy.called).to.be.true;
  });
  it("should not save if does show an error", async () => {
    res = {
      status: () => {},
      send: () => {},
      json: () => {},
    };
    req = {
      username: "myUsername",
      lat: 1,
      lgn: 1,
    };
    sinon
      .stub(databaseCalls, "getAllProducts")
      .returns([{ myUsername: "compareUser", lat: 1, lgn: 2 }]);

    sinon.stub(validateDistanceLogic, "validateDistance").returns(false);
    // sinon.stub(Spots.prototype, "save");
    const saveFake = sinon.fake.yields("", "mySpotId");
    sinon.replace(Spots.prototype, "save", saveFake);
    const statusSpy = sinon.spy(res, "status");

    await spotRouteController.post(req, res);
    expect(statusSpy.called).to.be.true;
  });

  it("should delete an spot giving an id", (done) => {
    response = "myResponse";
    req = {
      params: {},
      body: {
        spotId: "mySpotId",
      },
    };
    res = {
      json: () => {},
      send: () => {},
    };
    sinon.stub(databaseCalls, "removeSpotById").returns(
      new Promise((resolve) => {
        resolve(response);
      })
    );
    const sendSpy = sinon.spy(res, "send");
    spotRouteController.deleter(req, res);
    done();
    expect(sendSpy.called).to.be.true;
  });
  it("should upload an Image", (done) => {
    response = "myResponse";
    req = {
      params: {},
      body: {
        spotId: "mySpotId",
      },
      headers: {},
      pipe: () => {},
    };
    res = {
      json: () => {},
      send: () => {},
      status: () => {},
    };
    sinon.stub(databaseCalls, "removeSpotById").returns(
      new Promise((resolve) => {
        resolve(response);
      })
    );
    const pipeSpy = sinon.spy(req, "pipe");
    spotRouteController.uploadImage(req, res);
    done();
    expect(pipeSpy.called).to.be.true;
  });
});
