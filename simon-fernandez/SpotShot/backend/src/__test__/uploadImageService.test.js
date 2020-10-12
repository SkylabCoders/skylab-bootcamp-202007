const { expect } = require("chai");
const sinon = require("sinon");
const path = require("path");
const fs = require("fs");
const uploadImageServiceLogic = require("../logic/uploadImageService");

describe("Save image location into spot test", () => {
  afterEach(() => {
    sinon.restore();
  });
  it("should save a image when the folder exist", () => {
    const fileMock = {
      pipe: () => {},
    };
    const filenameMock = "mySpotId|myImageName";
    sinon.stub(path, "join").returns("myRoute");
    sinon.stub(fs, "existsSync").returns(true);
    sinon.stub(fs, "mkdirSync");

    expect(uploadImageServiceLogic.uploadImageService(fileMock, filenameMock))
      .to.exist;
  });
  it("should save a image when the folder does not exist", () => {
    const fileMock = {
      pipe: () => {},
    };
    const filenameMock = "mySpotId|myImageName";
    sinon.stub(path, "join").returns("myRoute");
    sinon.stub(fs, "existsSync").returns(false);
    sinon.stub(fs, "mkdirSync");

    expect(uploadImageServiceLogic.uploadImageService(fileMock, filenameMock))
      .to.exist;
  });
});
