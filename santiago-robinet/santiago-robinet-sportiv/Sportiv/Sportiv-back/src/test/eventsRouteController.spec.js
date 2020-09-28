const sinon = require("sinon");
const { expect } = require("chai");
const eventsController = require("../controllers/eventsRoutesController");
const Event = require("../../models/eventModel");
const User = require("../../models/userModel");

describe("Events Routes", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("GET MEHOTD - should call find", () => {
    const Event = {
      find: (query, callback) => {
        callback();
      },
    };

    const req = {};

    const res = {
      status: () => {},
      json: () => {},
    };

    const statusSpy = sinon.spy(res, "status");
    eventsController(Event).get(req, res);

    expect(statusSpy.calledWith(200)).to.be.true;
  });

  it("GET MEHOTD - should respond status 400", () => {
    const Event = {
      find: (query, callback) => {
        const error = "error";
        callback(error);
      },
    };

    const req = {};

    const res = {
      status: () => {},
      json: () => {},
    };

    const statusSpy = sinon.spy(res, "status");
    eventsController(Event).get(req, res);

    expect(statusSpy.calledWith(400)).to.be.true;
  });

  xit("POST MEHOTD - should respond status user json", () => {
    const req = {
      body: {},
    };

    const res = {
      status: () => {},
      json: () => {},
    };

    const user = {
      createdEvents: [],
    };

    const jsonSpy = sinon.spy(res, "json");
    const fakeFindById = sinon.fake.yields(false, user);
    sinon.replace(User, "findById", fakeFindById);

    eventsController(User).post(req, res);
    expect(jsonSpy.calledWith(user)).to.be.true;
  });
});
