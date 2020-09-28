import mapStore from "../stores/mapStore";
import actionTypes from "../actions/actionTypes";
import dispatcher from "../../dispatcher";

describe("maptore", () => {
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

  it("should load vets", () => {
    action = {
      type: actionTypes.LOAD_VETS,
      data: {
        vetname: "ACE",
      },
    };
    dispatcher.dispatch(action);
    expect(mapStore.getSpots()).toEqual(action.data);
  });
  it("should use default", () => {
    action = {
      type: actionTypes.USE_DEFAULT,
      data: {
        default: "default",
      },
    };
    dispatcher.dispatch(action);
    expect(mapStore).toBeTruthy();
  });
});
