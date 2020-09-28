const { expect } = require("chai");
const apiController = require("../controllers/apiControllers");
const dbCalls = require("../db_utils/dbCalls");
const sinon = require("sinon");
const { mutateDataForDb } = require("../_helpers/ainguraHelpers");
const ainguraControllers = require("../controllers/ainguraControllers");
const Aingura = require("../models/Aingura");
const { ainguraByIdController } = require("../controllers/apiControllers");
const apiControllers = require("../controllers/apiControllers");

describe("Api Router Controller Test", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("should retrive a list of ainguras from DB", (done) => {
    const response = [
      { id: 1, data: 2 },
      { id: 3, data: 4 },
      { id: 5, data: 6 },
    ];

    sinon.stub(dbCalls, "getAllAinguras").returns(
      new Promise((resolve) => {
        resolve(response);
      })
    );

    const res = {
      json: () => {},
    };

    const req = {};

    const jsonSpy = sinon.spy(res, "json");
    apiController.feedController(req, res);
    done();
    expect(jsonSpy.called).to.be.true;
  });

  it("should throw an error if data couldnt been retrieved from DB", (done) => {
    sinon
      .stub(dbCalls, "getAllAinguras")
      .returns(Promise.reject(new Error("fail")));

    const res = {
      json: () => {},
    };

    const req = {};

    const jsonSpy = sinon.spy(res, "json");
    apiController.feedController(req, res);
    done();
    expect(jsonSpy.called).to.be.true;
  });

  it("Should return a Aingura if a ID is provided", (done) => {
    const req = {
      params: {
        ainguraId: 1,
      },
    };
    const response = [
      { id: 1, data: 2 },
      { id: 3, data: 4 },
      { id: 5, data: 6 },
    ];
    sinon.stub(dbCalls, "getAinguraById").returns(
      new Promise((resolve) => {
        resolve(response);
      })
    );

    const res = {
      json: () => {},
    };

    const jsonSpy = sinon.spy(res, "json");

    apiController.ainguraByIdController(req, res);
    done();
    expect(jsonSpy.called).to.be.true;
  });

  it("should return a error if Aingura couldnt been retrieved by a ID", (done) => {
    const req = {
      params: {
        ainguraId: 1,
      },
    };
    sinon
      .stub(dbCalls, "getAinguraById")
      .returns(Promise.reject(new Error("fail")));

    const res = {
      json: () => {},
    };

    const jsonSpy = sinon.spy(res, "json");
    apiController.ainguraByIdController(req, res);
    done();
    expect(jsonSpy.called).to.be.true;
  });

  it("should return an error if a aingura is already registered in that radius", (done) => {
    const req = {
      body: {
        ainguraName: "name",
        ainguraDesc: "dummy desc",
        ainguraApproxLocation: "some loc",
        geoLocation: {
          latitude: 1234,
          longitude: 1234,
        },
        uploadImage: null,
        author: "dummyUser",
      },
    };

    const res = {
      json: () => {},
    };
    sinon
      .stub(ainguraControllers, "validateGeoLocation")
      .returns({ id: 1, value: 2 });

    const jsonSpy = sinon.spy(res, "json");

    apiController.createNewAinguraController(req, res);
    done();
    expect(jsonSpy.called).to.be.true;
  });

  it("should save a new aingura if the spot is available", (done) => {
    const aingura = {
      save: () => {},
    };

    sinon.stub(aingura, "save").returns({ id: 1, value: 2 });
    const req = {
      body: {
        ainguraName: "name",
        ainguraDesc: "dummy desc",
        ainguraApproxLocation: "some loc",
        geoLocation: {
          latitude: 1234,
          longitude: 1234,
        },
        uploadImage: null,
        author: "dummyUser",
      },
    };

    const res = {
      json: () => {},
    };
    sinon.stub(ainguraControllers, "validateGeoLocation").returns(null);

    const jsonSpy = sinon.spy(res, "json");

    apiController.createNewAinguraController(req, res);
    done();
    expect(jsonSpy.called).to.be.true;
  });

  it("should return a Allowed message if that spot is not present in BD", (done) => {
    const req = {
      body: {
        latitude: 1234,
        longitude: 1234,
      },
    };

    const res = {
      json: () => {},
      send: () => {},
    };

    sinon.stub(ainguraControllers, "validateGeoLocation").returns(null);
    const jsonSpy = sinon.spy(res, "send");
    apiControllers.geoValidationController(req, res);
    done();
    expect(jsonSpy.called).to.be.true;
  });

  it("should return a Deny message if provided spot is already present", (done) => {
    const req = {
      body: {
        latitude: 1234,
        longitude: 1234,
      },
    };

    const res = {
      json: () => {},
      send: () => {},
    };

    sinon
      .stub(ainguraControllers, "validateGeoLocation")
      .returns({ id: 1, value: 2 });
    const jsonSpy = sinon.spy(res, "json");
    apiControllers.geoValidationController(req, res);
    done();
    expect(jsonSpy.called).to.be.true;
  });

  it("should record a visit if user is in the current aingura radius", (done) => {
    const req = {
      body: {
        latitude: 1234,
        longitude: 1234,
        lat: 1234,
        lng: 1234,
      },
    };

    const res = {
      send: () => {},
    };
    sinon
      .stub(ainguraControllers, "validateDistance")
      .returns({ id: 1, value: 2 });

    const sendSpy = sinon.spy(res, "send");

    apiController.reachAinguraController(req, res);
    done();
    expect(sendSpy.called).to.be.true;
  });

  it("should return a message if user is not within current aingura radius", (done) => {
    const req = {
      body: {
        latitude: 1234,
        longitude: 1234,
        lat: 1234,
        lng: 1234,
      },
    };

    const res = {
      send: () => {},
    };
    sinon.stub(ainguraControllers, "validateDistance").returns(null);

    const sendSpy = sinon.spy(res, "send");

    apiController.reachAinguraController(req, res);
    done();
    expect(sendSpy.called).to.be.true;
  });
});
