const { expect } = require("chai");
const sinon = require("sinon");
const Spot = require("../models/spotModel");
const saveImageLocationIntoSpotLogic = require("../logic/saveImageLocationIntoSpot");

describe("Save image location into spot test", () => {
  it("should save a image", () => {
    sinon.stub(Spot, "findByIdAndUpdate");
    expect(saveImageLocationIntoSpotLogic.saveImageLocationIntoSpot()).to.exist;
  });
});
