import renderer from "react-test-renderer";
import Header from "./Header";
import React from "react";

describe("HeaderNavbar snapshot", () => {
  const tree = renderer.create(<Header />);
  it("should match", () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
