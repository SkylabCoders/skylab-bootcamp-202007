const sinon = require("sinon");
const { expect } = require("chai");
const lessonsListController = require("../controllers/lessonsListRoutesController");

describe("LESSONS ROUTER CONTROLLER", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("should respond status 400", () => {
    const req = {};

    const res = {
      status: () => {},
      json: () => {},
    };
    const error = true;

    const Lesson = {
      find: (query, callback) => {
        callback(error, false);
      },
    };

    const statusSpy = sinon.spy(res, "status");
    lessonsListController(Lesson).get(req, res);
    expect(statusSpy.calledWith(400)).to.be.true;
  });

  it("should respond status 200", () => {
    const req = {};

    const res = {
      status: () => {},
      json: () => {},
    };
    const lesson = true;

    const Lesson = {
      find: (query, callback) => {
        callback(false, lesson);
      },
    };

    const statusSpy = sinon.spy(res, "status");
    lessonsListController(Lesson).get(req, res);
    expect(statusSpy.calledWith(200)).to.be.true;
  });

  it("should respond status 200", () => {
    const req = {};

    const res = {
      status: () => {},
      json: () => {},
    };
    const lessons = true;

    const Lesson = {
      find: (query, callback) => {
        callback(false, lessons);
      },
    };

    const jsonSpy = sinon.spy(res, "json");
    lessonsListController(Lesson).get(req, res);
    expect(jsonSpy.calledWith(lessons)).to.be.true;
  });
});
