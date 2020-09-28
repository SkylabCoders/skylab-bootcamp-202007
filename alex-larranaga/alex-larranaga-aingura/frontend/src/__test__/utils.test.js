import {
  validatePasswordAtRegister,
  takePicture,
  getImageFromDevice,
  uploadImageAndGetPublicationURI,
  getDevicesGeoLocation,
  userAlreadyBeenInAingura,
} from "../_helpers/utils";
import axios from "axios";

jest.mock("axios");

describe("Front logic utils Test", () => {
  afterEach(() => {});

  it("should return true if both passwords are correct", () => {
    const pass1 = "1234";
    const pass2 = "1234";
    const answer = validatePasswordAtRegister(pass1, pass2);
    expect(answer).toBeTruthy;
  });

  it("should return false if passwords are not equal", () => {
    const pass1 = "12344";
    const pass2 = "1234";
    const answer = validatePasswordAtRegister(pass1, pass2);
    expect(answer).toBe(false);
  });

  it("should take a picture", async () => {
    const imageSetter = jest.fn();
    const Permissions = {
      askAsync: jest.fn(),
    };
    const picker = {
      launchCameraAsync: jest.fn(),
    };

    picker.launchCameraAsync.mockReturnValue({
      cancelled: false,
      uri: "someroute",
    });

    takePicture(Permissions, imageSetter, picker);
    expect(imageSetter.mock.calls[0]).toBeTruthy;
  });

  it("should get image, transform and return it", () => {
    let images = {
      image: "dummy data",
    };
    const formData = getImageFromDevice(images);
    expect(formData).toBeTruthy;
  });

  it("should upload taken picture to IMGUR", async () => {
    axios.post.mockReturnValue(new Promise((resolve) => resolve(95)));

    const imageData = "someDummyData";
    uploadImageAndGetPublicationURI(imageData);
    const call = axios.post.mock.calls[0];
    expect(call).toBeTruthy;
  });
  it("shoul return devices geoLocation", () => {
    const messageSetter = jest.fn();

    const locator = {
      requestPermissionsAsync: jest.fn(),
      getCurrentPositionAsync: jest.fn(),
    };

    locator.requestPermissionsAsync.mockReturnValue({ status: "todoGuay" });
    locator.getCurrentPositionAsync.mockReturnValue({
      coords: { latitude: 1, longitude: 2 },
    });

    const location = getDevicesGeoLocation(locator, messageSetter);

    expect(location).toBeTruthy;
  });

  it("shoul return devices geoLocation", () => {
    const messageSetter = jest.fn();

    const locator = {
      requestPermissionsAsync: jest.fn(),
      getCurrentPositionAsync: jest.fn(),
    };

    locator.requestPermissionsAsync.mockReturnValue({ status: "granted" });
    locator.getCurrentPositionAsync.mockReturnValue({
      coords: { latitude: 1, longitude: 2 },
    });

    const location = getDevicesGeoLocation(locator, messageSetter);

    expect(location).toBeTruthy;
  });

  it("it should return true if user has already been in a aingura", () => {
    const visitedArray = ["gerard"];
    const username = "gerard";

    const answer = userAlreadyBeenInAingura(visitedArray, username);

    expect(answer).toBe(true);
  });
});
