const { mutateDataForDb } = require("../_helpers/ainguraHelpers");
const sinon = require("sinon");
const { expect } = require("chai");
const ainguraHelpers = require("../_helpers/ainguraHelpers");

describe("Aingura Helpers", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("it should mutate received object and make it able to store in DB", () => {
    const req = {
      body: {
        ainguraName: "name",
        ainguraDesc: "dummy desc",
        ainguraApproxLocation: "some loc",
        geoLocation: {
          latitude: 1234,
          longitude: 1234,
        },
        uploadImage: "someUrl",
        author: "dummyUser",
      },
    };
    let objectSpy = sinon.spy();
    objectSpy = mutateDataForDb(req);

    expect(objectSpy, sinon.match.has("images"));
  });

  it("should insert a default image url if a image is not provide by user", () => {
    const req = {
      body: {
        ainguraName: "name",
        ainguraDesc: "dummy desc",
        ainguraApproxLocation: "some loc",
        geoLocation: {
          latitude: 1234,
          longitude: 1234,
        },
        uploadImage: null,
        author: "dummyUser",
      },
    };

    const compare = {
      name: "name",
      description: "dummy desc",
      location: "some loc",
      lat: 1234,
      lng: 1234,
      images: [
        {
          uri:
            "https://www.creativefabrica.com/wp-content/uploads/2018/11/Anchor-logo-by-Acongraphic-2.jpg",
        },
      ],
      author: "dummyUser",
    };

    const result = mutateDataForDb(req);

    expect(JSON.stringify(compare) === JSON.stringify(result)).to.be.true;
  });
});
