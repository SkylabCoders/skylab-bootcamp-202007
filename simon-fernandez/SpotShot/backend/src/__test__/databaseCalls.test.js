const { expect } = require("chai");
const sinon = require("sinon");
const { MongoClient } = require("mongodb");
const databaseCalls = require("../database-utils/databaseCalls");
const { remove } = require("../models/spotModel");
// const DBCONF = require("../database-utils/databaseConfig");

describe("Database Calls Test", () => {
  afterEach(() => {
    sinon.restore();
  });
  it("should get all products", async () => {
    expect(await databaseCalls.getAllProducts()).to.exist;
  });
  it("should receive an error when all prpducts does not receive a proper dbconf", () => {
    sinon.stub(MongoClient, "connect").throws();
    expect(databaseCalls.getAllProducts()).to.exist;
  });
  it("should get a spot by id", () => {
    const mySpotId = 1;
    sinon.stub(MongoClient, "connect").returns({
      db: () => {
        return {
          collection: () => {
            return { findOne: () => {} };
          },
        };
      },
    });

    expect(databaseCalls.getProductById(mySpotId)).to.exist;
  });

  it("should remove an spot", () => {
    const mySpotId = 1;
    sinon.stub(MongoClient, "connect").returns({
      db: () => {
        return {
          collection: () => {
            return { remove: () => {} };
          },
        };
      },
    });

    expect(databaseCalls.removeSpotById(mySpotId)).to.exist;
  });
});
