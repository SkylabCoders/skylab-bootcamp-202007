const sinon = require("sinon");
const { expect } = require("chai");
const userController = require("../controllers/groupController");
const User = require("../../models/userModel");
const Group = require("../../models/groupModel");

describe("GROUP CONTROLLER", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("GET METHOD - it should return res 200", () => {
    const req = {
      group: { groupName: "Lobos" },
    };

    const res = {
      json: () => {},
      status: () => {},
    };

    const statusSpy = sinon.spy(res, "status");
    userController.get(req, res);
    expect(statusSpy.calledWith(200)).to.be.true;
  });

  it("GET METHOD - it should return res json", () => {
    afterEach(() => {
      sinon.restore();
    });

    const req = {
      group: { groupName: "Lobos" },
    };

    const res = {
      json: () => {},
      status: () => {},
    };

    const jsonSpy = sinon.spy(res, "json");
    const { group } = req;
    userController.get(req, res);
    expect(jsonSpy.calledWith(group)).to.be.true;
  });

  it("GET METHOD - it should return res 404", () => {
    afterEach(() => {
      sinon.restore();
    });

    const req = {};

    const res = {
      json: () => {},
      status: () => {},
    };

    const statusSpy = sinon.spy(res, "status");
    userController.get(req, res);
    expect(statusSpy.calledWith(404)).to.be.true;
  });

  it("PUT METHOD - (User findOne) should res error when user is false", () => {
    const req = {
      body: {
        user: { sub: 1 },
      },
      group: [{ _id: 5 }],
    };

    const res = {
      status: () => {},
      send: () => {},
    };

    const statusSpy = sinon.spy(res, "status");
    const findOneFake = sinon.fake.yields(true, false);
    sinon.replace(User, "findOne", findOneFake);
    userController.put(req, res);
    expect(statusSpy.calledWith(404)).to.be.true;
  });

  xit("PUT METHOD - should save user", () => {
    const req = {
      body: {
        user: { sub: 1 },
      },
      group: [{ _id: 5 }],
    };

    const res = {
      status: () => {},
      send: () => {},
    };

    const statusSpy = sinon.spy(res, "status");
    const findOneFake = sinon.fake.yields(true, false);
    sinon.replace(User, "findOne", findOneFake);
    userController.put(req, res);
    expect(statusSpy.calledWith(404)).to.be.true;
  });

  it("PUT METHOD -(Group findOne) should res error when user is false", () => {
    const req = {
      body: {
        user: { sub: 1 },
      },
      group: [{ _id: 5 }],
    };

    const res = {
      status: () => {},
      send: () => {},
    };

    const statusSpy = sinon.spy(res, "status");
    const findOneFake = sinon.fake.yields(true, false);
    sinon.replace(Group, "findOne", findOneFake);
    userController.put(req, res);
    expect(statusSpy.calledWith(404)).to.be.true;
  });

  xit("PUT METHOD -(Group findOne) should res the founded group", () => {
    const req = {
      body: {
        user: { sub: 1 },
      },
      group: {
        membersId: 2,
      },
    };

    const res = {
      status: () => {},
      send: () => {},
    };

    const userUnicId = 2;

    const sendSpy = sinon.spy(res, "send");
    const findOneFake = sinon.fake.yields(false, group);
    sinon.replace(Group, "findOne", findOneFake);
    userController.put(req, res);
    expect(sendSpy.calledWith(group)).to.be.true;
  });
});
