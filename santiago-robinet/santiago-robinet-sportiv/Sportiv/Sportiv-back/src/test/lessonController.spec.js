const sinon = require("sinon");
const { expect } = require("chai");
const lessonController = require("../controllers/lessonController");

describe("LESSON ROUTER CONTROLLER", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("should respond status 200", () => {
    const req = {
      lesson: { title: "Rolling" },
    };
    const res = {
      status: () => {},
      json: () => {},
    };

    const statusSpy = sinon.spy(res, "status");
    lessonController.get(req, res);
    expect(statusSpy.calledWith(200)).to.be.true;
  });

  it("should respond status 200", () => {
    const req = {
      lesson: { title: "Rolling" },
    };
    const res = {
      status: () => {},
      json: () => {},
    };

    const jsonSpy = sinon.spy(res, "json");
    const { lesson } = req;
    lessonController.get(req, res);
    expect(jsonSpy.calledWith(lesson)).to.be.true;
  });

  it("should respond status 404", () => {
    const req = {};
    const res = {
      status: () => {},
      json: () => {},
    };

    const statusSpy = sinon.spy(res, "status");
    lessonController.get(req, res);
    expect(statusSpy.calledWith(404)).to.be.true;
  });
});
