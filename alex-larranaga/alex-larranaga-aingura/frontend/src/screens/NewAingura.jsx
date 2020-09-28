import React, { useState, useEffect } from "react";

import {
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableNativeFeedback,
  StyleSheet,
  Image,
  Button,
  ActivityIndicator,
  Dimensions,
  Alert,
  ImageBackground,
} from "react-native";

import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

import { createAingura } from "../actions/feedActions";
import { validateGeoLocation } from "../actions/feedActions";
import {
  takePicture,
  getImageFromDevice,
  uploadImageAndGetPublicationURI,
} from "../_helpers/utils";
import authStore from "../stores/authStore";

import feedStore from "../stores/feedStore";

const AINGURA_CREATED = "Aingura succesfully registered";

export default function NewAingura(props) {
  const [ainguraName, setAinguraName] = useState("");
  const [ainguraDesc, setAinguraDesc] = useState("");
  const [ainguraApproxLocation, setApproxLocation] = useState("");
  const [images, setImages] = useState(null);
  const [uploadImage, setUploadImage] = useState(uploadImage);
  const [geoLocation, setGeoLocation] = useState(
    feedStore.getUserGeoLocation()
  );

  const [message, setMessage] = useState("");
  const [userInfo, setUserInfo] = useState(authStore.getUser());

  useEffect(() => {
    /* getDevicesGeoLocation(Location, setMessage).then((geolocation) => {
      setGeoLocation(geolocation);
    }); */
  }, []);

  async function startPostingProcess(e) {
    let uri = null;
    e.preventDefault();
    console.log(geoLocation);
    const validation = await validateGeoLocation(geoLocation);
    console.log(validation);
    if (validation.data.message) {
      console.log("NO SE VALIDA");
      setMessage(validation.data.message);
    } else {
      const imageToUpload = getImageFromDevice(images);
      await uploadImageAndGetPublicationURI(imageToUpload)
        .then((res) => {
          setUploadImage(res.data.data.link);
          uri = res.data.data.link;
        })
        .catch((err) => console.log(err));
      const newAingura = {
        ainguraName,
        ainguraDesc,
        ainguraApproxLocation,
        geoLocation,
        uploadImage: uri,
        author: userInfo.username,
      };
      await createAingura(newAingura);
      setMessage(AINGURA_CREATED);
    }
  }

  return geoLocation.latitude === undefined &&
    geoLocation.longidute === undefined ? (
    <View style={styles.feedLoader}>
      <ActivityIndicator size="large" />
      <Text>Obtaining Geolocalization..</Text>
    </View>
  ) : (
    <View
      style={{
        alignItems: "center",
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <ImageBackground
        source={require("../../assets/aingura-back.jpg")}
        style={{ ...StyleSheet.absoluteFillObject }}
      />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          margin: 100,
        }}
      >
        <Text>
          {message
            ? Alert.alert(message, "", [{ text: "Ok", style: "default" }])
            : null}
        </Text>
        <TextInput
          style={{
            backgroundColor: "#e0e0e0",
            width: 300,
            height: 50,
            borderRadius: 20,
            paddingLeft: Dimensions.get("window").width * 0.05,
            fontSize: Dimensions.get("window").width * 0.03,
            borderWidth: 2,
            borderColor: "008ECC",
          }}
          onChangeText={(ainguraName) => setAinguraName(ainguraName)}
        ></TextInput>
        <Text style={{ color: "#293133", borderColor: "black" }}>
          Aingura Name
        </Text>
        <TextInput
          style={{
            backgroundColor: "#e0e0e0",
            width: 300,
            height: 50,
            borderRadius: 20,
            paddingLeft: Dimensions.get("window").width * 0.05,
            fontSize: Dimensions.get("window").width * 0.03,
            borderWidth: 2,
            borderColor: "008ECC",
          }}
          onChangeText={(ainguraApproxLocation) =>
            setApproxLocation(ainguraApproxLocation)
          }
        ></TextInput>
        <Text style={{ color: "#293133", borderColor: "black" }}>
          Aproximate Location
        </Text>
        <TextInput
          style={{
            backgroundColor: "#e0e0e0",
            width: 300,
            height: 50,
            borderRadius: 20,
            paddingLeft: Dimensions.get("window").width * 0.05,
            fontSize: Dimensions.get("window").width * 0.03,
            borderWidth: 2,
            borderColor: "008ECC",
          }}
          onChangeText={(ainguraDesc) => setAinguraDesc(ainguraDesc)}
        ></TextInput>
        <Text style={{ color: "#293133", borderColor: "black" }}>
          Aingura description
        </Text>

        <View style={styles.container}></View>
        {images ? (
          <Image style={styles.image} source={{ uri: images.image }} />
        ) : null}
        <View style={styles.row}>
          <Button
            onPress={async () =>
              await takePicture(Permissions, setImages, ImagePicker)
            }
            title="ADD A PICTURE"
          ></Button>
        </View>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple("#EEE")}
          onPress={(e) => startPostingProcess(e)}
        >
          <Image
            style={styles.ainguraCounterStyles}
            source={require("../../assets/icon.png")}
          />
        </TouchableNativeFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 21,
  },
  feedLoader: {
    marginTop: 400,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  row: { flexDirection: "row" },
  image: {
    width: Dimensions.get("window").width * 0.9,
    height: 300,
    borderWidth: 2,
    borderColor: "blue",
  },
  button: {
    padding: 13,
    margin: 15,
    marginTop: 5,
    backgroundColor: "#e0e0e0",
  },
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width * 0.9,
  },
  //AHORA FUNCIONA
  mapContainer: {
    flex: 1,
    height: 200,
    width: 200,
  },
  ainguraCounterStyles: {
    justifyContent: "center",
    width: 60,
    height: 60,
    margin: 20,
    marginLeft: 20,
    resizeMode: "contain",
  },
});
