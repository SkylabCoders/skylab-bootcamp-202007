const sinon = require("sinon");
const { expect } = require("chai");
const groupsController = require("../controllers/groupsListRoutesController");

describe("GROUPS ROUTER CONTROLLER", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("should return status 400", () => {
    const Group = {
      find: (query, callback) => {
        callback(error, false);
      },
    };

    const error = true;
    const req = {};
    const res = {
      status: () => {},
    };

    const statusSpy = sinon.spy(res, "status");
    groupsController(Group).get(req, res);
    expect(statusSpy.calledWith(400)).to.be.true;
  });

  it("should return status 200", () => {
    const groups = true;
    const Group = {
      find: (query, callback) => {
        callback(false, groups);
      },
    };

    const req = {};
    const res = {
      status: () => {},
      json: () => {},
    };

    const statusSpy = sinon.spy(res, "status");
    groupsController(Group).get(req, res);
    expect(statusSpy.calledWith(200)).to.be.true;
  });

  it("should return a list of groups", () => {
    const groups = true;
    const Group = {
      find: (query, callback) => {
        callback(false, groups);
      },
    };

    const req = {};
    const res = {
      status: () => {},
      json: () => {},
    };

    const jsonSpy = sinon.spy(res, "json");
    groupsController(Group).get(req, res);
    expect(jsonSpy.calledWith(groups)).to.be.true;
  });
});
