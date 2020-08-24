import renderer from "react-test-renderer";
import React from "react";
import Slider from "../Slider";
import { BrowserRouter as Router } from "react-router-dom";

describe("Slider snapshot", () => {
  const tree = renderer.create(
    <Router>
      <Slider />
    </Router>
  );

  it("should match", () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
