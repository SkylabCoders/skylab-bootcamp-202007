import renderer from "react-test-renderer";
import Landing from "./Landing";
import React from "react";

describe("Landing snapshot", () => {
  const tree = renderer.create(<Landing />);
  it("should match", () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
