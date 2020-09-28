import { imgurConf } from "../enviromentConf";
import axios from "axios";
//import { ToastAndroid } from "react-native";

export function validatePasswordAtRegister(password, confirmPassword) {
  if (password === confirmPassword) {
    return true;
  }
  return false;
}

export async function takePicture(Permissions, imageStateSetter, picker) {
  await Permissions.askAsync(Permissions.CAMERA);
  const { cancelled, uri } = await picker.launchCameraAsync({
    allowsEditing: false,
  });
  imageStateSetter({ image: uri });
}

export function getImageFromDevice(images) {
  let localUri = images.image;
  let filename = localUri.split("/").pop();
  let match = /\.(\w+)$/.exec(filename);
  let type = match ? `image/${match[1]}` : `image`;

  let formData = new FormData();
  formData.append("image", { uri: localUri, name: filename, type });

  return formData;
}

export async function uploadImageAndGetPublicationURI(imageData) {
  console.log("CALL TO IMGUR API");
  return await axios.post(
    imgurConf.IMGUR_URL,
    imageData,
    imgurConf.IMGUR_HEADER
  );
}

export async function getDevicesGeoLocation(
  locator,
  messageSetter,
  geoLocationSetter
) {
  let { status } = await locator.requestPermissionsAsync();
  if (status !== "granted") {
    messageSetter("No acces to geolocation data");
  }

  let location = await locator.getCurrentPositionAsync({});
  const { coords } = location;
  const { latitude, longitude } = coords;
  return { latitude, longitude };
}

export function userAlreadyBeenInAingura(visitedArray, username) {
  return visitedArray.some((user) => user === username);
}

export function showToast(messageToShow) {
  return ToastAndroid.show(messageToShow, ToastAndroid.SHORT);
}

//export function constructObjectToBackend(ainguraName, ainguraDesc, ainguraApproxLocation, geolocation, userInfo, )
