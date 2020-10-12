import * as ImagePicker from "expo-image-picker";

async function selectImage() {
  let picker = null;
  let permisos = null;
  permisos = await ImagePicker.requestCameraRollPermissionsAsync();

  if (permisos.granted !== false) {
    picker = await ImagePicker.launchImageLibraryAsync();

    if (picker.cancelled !== true) {
      return { localUri: picker.uri };
    }
  } else {
    console.log("permissions not granted");
  }
}
module.exports = selectImage;
