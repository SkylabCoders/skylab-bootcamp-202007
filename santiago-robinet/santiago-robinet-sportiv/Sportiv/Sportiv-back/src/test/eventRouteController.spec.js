const sinon = require("sinon");
const { expect } = require("chai");
const eventController = require("../controllers/eventRouteController");
const Event = require("../../models/eventModel");

describe("Event Route", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("GET METHOD - should respond req item", () => {
    const req = {
      item: {},
    };
    const res = {
      json: () => {},
    };

    const jsonSpy = sinon.spy(res, "json");
    eventController.get(req, res);
    expect(jsonSpy.calledWith(req.item)).to.be.true;
  });

  it("PATCH METHOD - should call save and send error", () => {
    const error = true;
    const req = {
      body: {
        something: 1,
      },
      item: {
        save: (callback) => {
          callback(error);
        },
      },
    };

    const res = {
      send: () => {},
      json: () => {},
      status: () => {},
    };

    const sendSpy = sinon.spy(res, "send");
    eventController.patch(req, res);
    expect(sendSpy.calledWith(error)).to.be.true;
  });

  it("PATCH METHOD - should call save and send error", () => {
    const error = false;
    const req = {
      body: {
        something: 1,
      },
      item: {
        save: (callback) => {
          callback(error);
        },
      },
    };

    const { item } = req;

    const res = {
      send: () => {},
      json: () => {},
      status: () => {},
    };

    const jsonSpy = sinon.spy(res, "json");
    eventController.patch(req, res);
    expect(jsonSpy.calledWith(item)).to.be.true;
  });

  it("PATCH METHOD - should respond status 404 when item is not defined", () => {
    const req = {
      body: {
        something: 1,
      },
    };

    const res = {
      send: () => {},
      json: () => {},
      status: () => {},
    };

    const statusSpy = sinon.spy(res, "status");
    eventController.patch(req, res);
    expect(statusSpy.calledWith(404)).to.be.true;
  });

  it("DELETER METHOD - should respond status 400 when find error is true", () => {
    const req = {
      item: {
        remove: (callback) => {
          callback();
        },
      },
    };

    const res = {
      status: () => {},
      json: () => {},
    };

    const error = true;

    const statusSpy = sinon.spy(res, "status");
    const findFake = sinon.fake.yields(error, false);
    sinon.replace(Event, "find", findFake);
    eventController.deleter(req, res);
    expect(statusSpy.calledWith(400)).to.be.true;
  });

  it("DELETER METHOD - should respond status 200 find an event", () => {
    const req = {
      item: {
        remove: (callback) => {
          callback();
        },
      },
    };

    const res = {
      status: () => {},
      json: () => {},
    };

    const eventFounded = true;

    const statusSpy = sinon.spy(res, "status");
    const findFake = sinon.fake.yields(false, eventFounded);
    sinon.replace(Event, "find", findFake);
    eventController.deleter(req, res);
    expect(statusSpy.calledWith(200)).to.be.true;
  });

  it("PUT METHOD - (User Model) should respond status 400 when findOne has an error", async () => {
    const req = {
      body: { user: { sub: 123 } },
      item: { _id: 1 },
    };

    const userUnicId = null;
    const res = {
      status: () => {},
      send: () => {},
    };

    const User = {
      findOne: () => {},
    };
    const error = true;

    const statusSpy = sinon.spy(res, "status");
    const findOneFake = sinon.fake.yields(error, false);
    sinon.replace(User, "findOne", findOneFake);
    await eventController.put(req, res);
    expect(statusSpy.calledWith(404)).to.be.true;
  });

  xit("PUT METHOD - (User Model) should save user when user is founded ", (done) => {
    const req = {
      body: {
        user: "Pepe",
      },
    };

    const res = {
      status: () => {},
    };

    const user = {
      save: () => {},
      events: [],
    };
    const _id = 2;

    const saveSpy = sinon.spy(user, "save");
    const findOneFake = sinon.fake.yields(false, user);
    sinon.replace(User, "findOne", findOneFake);
    done();
    eventController.put(req, res);
    expect(saveSpy.called()).to.be.true;
  });

  xit("PUT METHOD - (Event Model) should respond status 400 when findById has an error", (done) => {
    const req = {
      body: {
        user: "Pepe",
      },
    };

    const res = {
      status: () => {},
    };

    const error = true;

    const statusSpy = sinon.spy(res, "status");
    const findByIdFake = sinon.fake.yields(error, false);
    sinon.replace(Event, "findById", findByIdFake);
    done();
    eventController.put(req, res);
    expect(statusSpy.calledWith(404)).to.be.true;
  });

  xit("PUT METHOD - (Event Model) should save event when event is founded ", (done) => {
    const req = {
      body: {},
    };

    const res = {
      status: () => {},
    };

    const event = {
      save: () => {},
      events: [],
    };
    const _id = 2;

    const saveSpy = sinon.spy(event, "save");
    const findByIdFake = sinon.fake.yields(false, event);
    sinon.replace(Event, "findById", findByIdFake);
    done();
    eventController.put(req, res);
    expect(saveSpy.called()).to.be.true;
  });
});
