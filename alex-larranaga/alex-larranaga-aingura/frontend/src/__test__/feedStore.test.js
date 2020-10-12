import feedStore from "../stores/feedStore";
import dispatcher from "../../Dispatcher";
import actionTypes from "../actions/actionTypes";
import { result } from "lodash";

function reduceAction(action, state) {
  return {
    type: action,
    data: state,
  };
}

describe("Feed Store test", () => {
  let feedStoreCallback;
  let action;

  beforeEach(() => {
    feedStoreCallback = jest.fn();
    feedStore.addChangeListener(feedStoreCallback);
  });
  afterEach(() => {
    feedStore.removeAllListeners(feedStoreCallback);
  });

  it("Store should exist", () => {
    expect(feedStore).toBeTruthy();
  });

  it("Should return an empty array if no API has been called", () => {
    const emptyArray = [];

    expect(feedStore.getFeed()).toEqual(emptyArray);
  });
  it("Should return stored data", () => {
    const action = { data: { id: 1, name: "feed" } };

    const actionCreator = reduceAction(actionTypes.LOAD_FEED, action);
    dispatcher.dispatch(actionCreator);

    expect(feedStore.getFeed()).toEqual(action);
  });

  it("should return just one Aingura", () => {
    const action = { data: { id: 1, name: "feed" } };

    const actionCreator = reduceAction(actionTypes.LOAD_AINGURA, action);
    dispatcher.dispatch(actionCreator);

    expect(feedStore.getFeed()).toEqual(action);
  });
  it("should return a empty array if no Aingura is reqested by its ID", () => {
    const action = [];
    expect(feedStore.getAingura()).toEqual(action);
  });
  it("should return a Aingura according to action type", () => {
    const action = { data: { id: 1, name: "feed" } };

    const actionCreator = reduceAction(actionTypes.LOAD_ONE_AINGURA, action);
    dispatcher.dispatch(actionCreator);

    expect(feedStore.getAingura()).toEqual(action);
  });

  it("should return a validation message retrieved from the server", () => {
    const action = { data: { id: 1, name: "feed" } };

    const actionCreator = reduceAction(actionTypes.REACH_AINGURA, action);
    dispatcher.dispatch(actionCreator);

    expect(feedStore.getFeed()).toEqual(action);
  });

  it("should retrieve Map Component required data", () => {
    const fakeArray = [
      {
        _id: 1,
        lat: 1,
        lng: 1,
        name: "name",
        images: [{ uri: "imageurl" }],
        rating: 5,
      },
    ];

    const resultArray = [
      {
        _id: 1,
        lat: 1,
        lng: 1,
        name: "name",
        image: [{ uri: "imageurl" }],
        rating: 5,
      },
    ];

    const actionCreator = reduceAction(actionTypes.LOAD_FEED, fakeArray);
    dispatcher.dispatch(actionCreator);

    expect(feedStore.getGeoLocation()).toEqual(resultArray);
  });
});
