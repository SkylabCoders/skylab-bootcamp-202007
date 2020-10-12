const secretServices = require("../_helpers/secretServices");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = require("../auth/secret.json");
const should = require("should");
const { expect, assert } = require("chai");
const sinon = require("sinon");
const { restore } = require("sinon");

describe("Secret Services Test", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("should compare password and hash and return an answer", () => {
    const password = "mypassword";

    const hash = "myhash";

    const answer = secretServices.hashValidator(password, hash);
    expect(answer).to.exist;
  });

  it("should return amn error if a token is not provided", () => {
    const req = {
      headers: {
        authorization: null,
      },
    };
    const res = {
      send: () => {},
    };

    const sendSpy = sinon.spy(res, "send");
    secretServices.tokenValidator(req, res);

    expect(sendSpy.called).to.be.true;
  });

  it("should store a token from authorization header and go on", () => {
    const req = {
      headers: {
        authorization: "Bearer 1234",
      },
    };
    const res = {
      send: () => {},
    };
    const next = () => {};

    const sendSpy = sinon.spy(res, "send");
    secretServices.tokenValidator(req, res);
  });
});
