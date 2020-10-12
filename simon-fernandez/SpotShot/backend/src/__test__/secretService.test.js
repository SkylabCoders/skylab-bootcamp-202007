const { expect } = require("chai");
const sinon = require("sinon");
const bcrypt = require("bcrypt");
const secretServiceLogic = require("../helper/secretService");

describe("Secret service test", () => {
  it("should validate the hash", () => {
    const password = 1;
    const hash = 1;
    sinon.stub(bcrypt, "compareSync").returns(true);

    expect(secretServiceLogic.hashValidator(password, hash)).to.exist;
  });
});
