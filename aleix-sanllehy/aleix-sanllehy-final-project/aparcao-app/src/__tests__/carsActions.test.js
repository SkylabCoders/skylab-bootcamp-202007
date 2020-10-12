import dispatcher from "../../dispatcher";
import axios from "axios";
import { loadMakes, loadModels, selectCar } from "../actions/carsActions";
import actionTypes from "../actions/actionTypes";
jest.dontMock("../actions/carsActions.js");
jest.mock("axios");
jest.mock("../../dispatcher.js");

describe("Casr actions test", () => {
  afterEach(() => {
    dispatcher.dispatch.mockClear();
  });

  it("Load makes - Should load all car makes", async () => {
    axios.post.mockReturnValue(
      new Promise((resolve, reject) => resolve({ data: {} }))
    );
    await loadMakes();
    expect(axios.post.mock.calls[0][0]).toEqual(
      "http://192.168.0.34:3000/cars"
    );
  });

  it("Load makes - should dispatch the action", async () => {
    const makes = [{ make: "Volkswagen" }];
    axios.post.mockReturnValue(
      new Promise((resolve, reject) => resolve({ data: {} }))
    );
    await loadMakes(makes);
    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.LOAD_MAKES,
      data: {},
    });
  });

  it("Load makes - should throw an error", async () => {
    axios.get.mockReturnValue(
      new Promise((resolve, reject) => resolve(throwError("error")))
    );
    await loadMakes();
    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.LOAD_MAKES,
      data: {},
    });
  });

  it("Load models - Should load the models given a car make", async () => {
    axios.post.mockReturnValue(
      new Promise((resolve, reject) => resolve({ data: {} }))
    );
    await loadModels();
    expect(axios.post.mock.calls[0][0]).toEqual(
      "http://192.168.0.34:3000/cars"
    );
  });

  it("Load models - should dispatch the action", async () => {
    const models = [
      { make: "Volkswagen", model: "Golf" },
      { make: "Volkswagen", model: "Polo" },
    ];
    axios.post.mockReturnValue(
      new Promise((resolve, reject) => resolve({ data: {} }))
    );
    await loadModels(models);
    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.LOAD_MODELS,
      data: {},
    });
  });

  it("Load models - should throw an error", async () => {
    axios.get.mockReturnValue(
      new Promise((resolve, reject) => resolve(throwError("error")))
    );
    await loadModels();
    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.LOAD_MODELS,
      data: {},
    });
  });

  it("Select a car - Should load all car makes", async () => {
    axios.post.mockReturnValue(
      new Promise((resolve, reject) => resolve({ data: {} }))
    );
    await selectCar();
    expect(axios.post.mock.calls[0][0]).toEqual(
      "http://192.168.0.34:3000/cars"
    );
  });

  it("Select a car - should dispatch the action", async () => {
    const car = { make: "Volkswagen", model: "Golf" };
    axios.post.mockReturnValue(
      new Promise((resolve, reject) => resolve({ data: {} }))
    );
    await selectCar(car);
    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.SELECT_CAR,
      data: {},
    });
  });

  it("LSelect a car - should throw an error", async () => {
    axios.get.mockReturnValue(
      new Promise((resolve, reject) => resolve(throwError("error")))
    );
    await selectCar();
    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.SELECT_CAR,
      data: {},
    });
  });
});
