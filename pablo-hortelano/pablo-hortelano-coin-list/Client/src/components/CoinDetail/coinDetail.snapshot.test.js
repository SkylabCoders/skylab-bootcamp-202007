import renderer from "react-test-renderer";
import coinDetail from "./CoinDetail";
import React from "react";

describe("coinDetail snapshot", () => {
  const tree = renderer.create(<coinDetail />);
  it("should match", () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
