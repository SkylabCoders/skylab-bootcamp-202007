import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { uploadSpotPhoto } from "../actions/spotActions";
import stylesCreateSpot from "../styles/createSpot-style";

export default function AddPhoto({ route, navigation }) {
  const { spotId } = route.params;
  let picker = null;

  let permisos = null;
  const [selectedImage, setSelectedImage] = useState(null);

  const uploadImage = () => {
    if (selectedImage) {
      uploadSpotPhoto(spotId, selectedImage);
      navigation.goBack();
    } else {
      Alert.alert("No image selected", "", [
        {
          text: "Accept",
          style: "default",
        },
      ]);
    }
  };
  const runCamera = async () => {
    permisos = await ImagePicker.requestCameraPermissionsAsync();

    if (permisos.granted !== false) {
      picker = await ImagePicker.launchCameraAsync();

      if (picker.cancelled !== true) {
        setSelectedImage({ localUri: picker.uri });
      }
    } else {
      console.log("permissions not granted");
    }
  };
  const selectFile = async () => {
    permisos = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permisos.granted !== false) {
      picker = await ImagePicker.launchImageLibraryAsync({
        allowsMultipleSelection: false,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });

      if (picker.cancelled !== true) {
        setSelectedImage({ localUri: picker.uri });
      }
    } else {
      console.log("permissions not granted");
    }
  };
  return (
    <>
      <Image
        style={stylesCreateSpot.selectedPhoto}
        source={
          selectedImage
            ? { uri: selectedImage.localUri }
            : // eslint-disable-next-line global-require
              require("../Images/SpotShotlogo2.png")
        }
      />
      <View style={stylesCreateSpot.headerContainer}>
        <TouchableOpacity
          style={stylesCreateSpot.cameraButtonContainer}
          onPress={() => runCamera()}
        >
          <Text style={stylesCreateSpot.submitButton}>Use the camera</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={stylesCreateSpot.cameraButtonContainer}
          onPress={() => selectFile()}
        >
          <Text style={stylesCreateSpot.submitButton}>Import from gallery</Text>
        </TouchableOpacity>
      </View>
      <View style={stylesCreateSpot.uploadImageContainer}>
        <TouchableOpacity
          style={stylesCreateSpot.uploadImageButtonContainer}
          onPress={() => uploadImage()}
        >
          <Text style={stylesCreateSpot.submitButton}>UploadImage</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
