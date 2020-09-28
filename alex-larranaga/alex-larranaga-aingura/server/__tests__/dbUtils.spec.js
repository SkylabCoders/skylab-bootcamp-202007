const { expect } = require("chai");
const sinon = require("sinon");
const { MongoClient, ObjectID } = require("mongodb");
const dbCalls = require("../db_utils/dbCalls");

describe("DB Utils test", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("should return a list of ainguras", async () => {
    expect(await dbCalls.getAllAinguras()).to.exist;
  });
});
