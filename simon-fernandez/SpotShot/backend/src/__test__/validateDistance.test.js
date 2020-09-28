const { expect } = require("chai");
const sinon = require("sinon");
const Spot = require("../models/spotModel");
const saveImageLocationIntoSpotLogic = require("../logic/saveImageLocationIntoSpot");
const validateDistanceService = require("../logic/validateDistance");

describe("Validate distance test", () => {
  it("should retrun a validation", () => {
    const pointMock = 1;
    const interestMock = 1;
    const distanceMock = 0.1;

    expect(
      validateDistanceService.validateDistance(
        pointMock,
        interestMock,
        distanceMock
      )
    ).to.exist;
  });
});
