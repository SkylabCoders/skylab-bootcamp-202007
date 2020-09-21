import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import User from "./User";

describe("User component test", () => {

  let container = null;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  })

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove()
    container = null;
  })

  it("Should render user data", async () =>{
    // Arrange
    const fakeUser = {
      name: "Bombasto",
      age: "31",
      address: "Roc Boronat 35"
    }

    jest.spyOn(global, "fetch").mockImplementation(() => 
      Promise.resolve({
        json: () => Promise.resolve(fakeUser)
      })
    );

    // Act
    await act(async () => {
      render(<User id={'123'} />, container)
    }); 

    // Assert
    expect(container.querySelector("summary").textContent).toBe(fakeUser.name);
    expect(container.querySelector("strong").textContent).toBe(fakeUser.age);
    expect(container.textContent).toContain(fakeUser.address);

    global.fetch.mockRestore();
  })

})