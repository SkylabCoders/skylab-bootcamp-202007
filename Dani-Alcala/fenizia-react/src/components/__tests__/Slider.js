import React from "react";
import renderer from "react-test-renderer";
import Slider from "../Slider.jsx";
import { BrowserRouter } from "react-router-dom";

function renderSlider(arg) {
  const defaultProps = {
    match: {
      params: {},
    },
  };

  const props = { ...defaultProps, ...arg };
  return renderer.create(
    <BrowserRouter>
      <Slider {...props} />
    </BrowserRouter>
  );
}

describe("Slider", () => {
  let SliderTree;
  let instance;
  let component;
  let text;

  beforeEach(async () => {
    SliderTree = renderSlider();

    instance = SliderTree.root;
    component = instance.findByType("p");
    text = component.children[0];
    SliderTree.update();
  });

  xit("should match", async () => {
    expect(SliderTree).toMatchSnapshot();
  });

  it("should display a <p> VER TODO", async () => {
    SliderTree = renderSlider();
    instance = SliderTree.root;
    component = instance.findByType("p");
    text = component.children[0];

    expect(text).toEqual("VER TODO");
  });
  
});
