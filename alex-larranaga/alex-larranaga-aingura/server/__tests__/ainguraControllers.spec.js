const ainguraControllers = require("../controllers/ainguraControllers");
const { expect } = require("chai");
const sinon = require("sinon");
const Aingura = require("../models/Aingura");
const { fake } = require("sinon");
const { validateDistance } = require("../controllers/ainguraControllers");

describe("Aingura Controllers Test", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("Should return true if given location is within provided location according to given radius", () => {
    const given = {
      lat: 11.18998,
      lng: 119.541253,
    };

    const provided = {
      lat: 11.18997,
      lng: 119.541253,
    };
    const kmNumber = 6;

    const answer = ainguraControllers.validateDistance(
      given,
      provided,
      kmNumber
    );
    expect(answer).to.be.true;
  });

  it("should return true if geolocation is validated", (done) => {
    const fakeArray = [
      { lat: 1, lng: 1 },
      { lat: 1, lng: 1 },
      { lat: 1, lng: 1 },
    ];
    const given = {
      lat: 11.18998,
      lng: 119.541253,
    };

    sinon.stub(Aingura, "find").returns(fakeArray);

    const answer = ainguraControllers.validateGeoLocation(given, Aingura);
    done();

    expect(answer).to.be.true;
  });
  it("should return false if geolocation is not validated", (done) => {
    const fakeArray = [{ lat: 40.71427, lng: -74.00597 }];
    const given = {
      lat: 11.18998,
      lng: 119.541253,
    };

    sinon.stub(Aingura, "find").returns(fakeArray);

    const answer = ainguraControllers.validateGeoLocation(given, Aingura);
    done();

    expect(answer).to.be.false;
  });
});
