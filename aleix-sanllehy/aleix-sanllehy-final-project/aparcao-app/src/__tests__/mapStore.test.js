import mapStore from "../stores/mapStore";
import actionTypes from "../actions/actionTypes";
import dispatcher from "../../dispatcher";

describe("Map store test", () => {
  let action;
  let mockCallbackFunction;

  beforeEach(() => {
    mockCallbackFunction = jest.fn();
    mapStore.addChangeListener(mockCallbackFunction);
  });

  afterEach(() => {
    mapStore.removeChangeListener(mockCallbackFunction);
  });

  it("should exist", () => {
    expect(mapStore).toBeDefined();
  });

  it("should load all spots", () => {
    action = {
      type: actionTypes.LOAD_SPOTS,
      data: { spotLatitude: 1, spotLongitude: 1, carLength: 5000 },
    };
    dispatcher.dispatch(action);
    expect(mapStore.getSpots()).toEqual(action.data);
  });

  it("should use default case", () => {
    action = {
      type: actionTypes.USE_DEFAULT,
      data: { default: "default" },
    };
    dispatcher.dispatch(action);
    expect(mapStore).toBeTruthy();
  });
});
