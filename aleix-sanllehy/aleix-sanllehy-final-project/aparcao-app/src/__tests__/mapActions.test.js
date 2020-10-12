import dispatcher from "../../dispatcher";
import axios from "axios";
import {
  loadSpots,
  aparcao,
  desaparcao,
  createSpot,
  destroySpot,
} from "../actions/mapActions";
import actionTypes from "../actions/actionTypes";
jest.dontMock("../actions/mapActions.js");
jest.mock("axios");
jest.mock("../../dispatcher.js");

describe("Map actions test", () => {
  afterEach(() => {
    dispatcher.dispatch.mockClear();
  });

  it("Get spots - Should get all free spots", async () => {
    axios.post.mockReturnValue(
      new Promise((resolve, reject) => resolve({ data: {} }))
    );
    await loadSpots();
    expect(axios.post.mock.calls[0][0]).toEqual(
      "http://192.168.0.34:3000/spots"
    );
  });

  it("Get spots - should dispatch the action", async () => {
    const spots = [{ spot: { latitude: 1, longitude: 1 } }];
    axios.post.mockReturnValue(
      new Promise((resolve, reject) => resolve({ data: {} }))
    );
    await loadSpots(spots);
    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.LOAD_SPOTS,
      data: {},
    });
  });

  it("Get spots - should throw an error", async () => {
    axios.get.mockReturnValue(
      new Promise((resolve, reject) => resolve(throwError("error")))
    );
    await loadSpots();
    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.LOAD_SPOTS,
      data: {},
    });
  });

  it("Aparcao - should update the user location", async () => {
    axios.post.mockReturnValue(
      new Promise((resolve, reject) => resolve({ data: {} }))
    );
    await aparcao();
    expect(axios.post.mock.calls[0][0]).toEqual(
      "http://192.168.0.34:3000/spots"
    );
  });

  it("Aparcao - should dispatch the action", async () => {
    const userLocation = [{ latitude: 1, longitude: 1 }];
    axios.post.mockReturnValue(
      new Promise((resolve, reject) => resolve({ data: {} }))
    );
    await aparcao(userLocation);
    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.LOAD_USER,
      data: {},
    });
  });

  it("Aparcao - should throw an error", async () => {
    axios.get.mockReturnValue(
      new Promise((resolve, reject) => resolve(throwError("error")))
    );
    await aparcao();
    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.LOAD_USER,
      data: {},
    });
  });

  it("Desaparcao - should update the user location", async () => {
    axios.post.mockReturnValue(
      new Promise((resolve, reject) => resolve({ data: {} }))
    );
    await desaparcao();
    expect(axios.post.mock.calls[0][0]).toEqual(
      "http://192.168.0.34:3000/spots"
    );
  });

  it("Desaparcao - should dispatch the action", async () => {
    const userLocation = [{ latitude: null, longitude: null }];
    axios.post.mockReturnValue(
      new Promise((resolve, reject) => resolve({ data: {} }))
    );
    await desaparcao(userLocation);
    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.LOAD_USER,
      data: {},
    });
  });

  it("Desaparcao - should throw an error", async () => {
    axios.get.mockReturnValue(
      new Promise((resolve, reject) => resolve(throwError("error")))
    );
    await desaparcao();
    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.LOAD_USER,
      data: {},
    });
  });

  it("Create a spot - should create a spot", async () => {
    axios.post.mockReturnValue(
      new Promise((resolve, reject) => resolve({ data: {} }))
    );
    await createSpot();
    expect(axios.post.mock.calls[0][0]).toEqual(
      "http://192.168.0.34:3000/spots"
    );
  });

  it("Create a spot - should dispatch the action", async () => {
    const spot = [{ latitude: 1, longitude: 1, carLenght: 4500 }];
    axios.post.mockReturnValue(
      new Promise((resolve, reject) => resolve({ data: {} }))
    );
    await createSpot(spot);
    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.CREATE_SPOT,
      data: {},
    });
  });

  it("Create a spot - should throw an error", async () => {
    axios.get.mockReturnValue(
      new Promise((resolve, reject) => resolve(throwError("error")))
    );
    await createSpot();
    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.CREATE_SPOT,
      data: {},
    });
  });

  it("Destroy spot - should destroy a spot", async () => {
    axios.post.mockReturnValue(
      new Promise((resolve, reject) => resolve({ data: {} }))
    );
    await destroySpot();
    expect(axios.post.mock.calls[0][0]).toEqual(
      "http://192.168.0.34:3000/spots"
    );
  });

  it("Destroy spot - should dispatch the action", async () => {
    const spot = [{ latitude: 1, longitude: 1, carLenght: 4500 }];
    axios.post.mockReturnValue(
      new Promise((resolve, reject) => resolve({ data: {} }))
    );
    await destroySpot(spot);
    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.DESTROY_SPOT,
      data: {},
    });
  });

  it("Destroy a spot - should throw an error", async () => {
    axios.get.mockReturnValue(
      new Promise((resolve, reject) => resolve(throwError("error")))
    );
    await destroySpot();
    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.DESTROY_SPOT,
      data: {},
    });
  });
});
