const should = require("should");
const { expect } = require("chai");
const sinon = require("sinon");
const axios = require("axios");
const vetsRouter = require("../src/routes/vetsRouter");

const User = require("../src/models/usersModel");

describe("vetsrouter testing", () => {
  afterEach(() => {
    sinon.restore();
  });

  it(" should ", () => {
    axios.get("http://192.168.8.100:4200/api/vet").then((response) => {});
  });
});
