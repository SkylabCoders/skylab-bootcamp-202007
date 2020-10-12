import React, { useEffect, useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import MapView from "react-native-maps";
import { Picker } from "@react-native-community/picker";
import stylesCreateSpot from "../styles/createSpot-style";
import { createSpot } from "../actions/spotActions";

// eslint-disable-next-line consistent-return
async function getUser() {
  // eslint-disable-next-line no-useless-catch
  try {
    let user = await AsyncStorage.getItem("user");
    user = JSON.parse(user);
    if (user !== null) {
      return user.usernameSpot;
    }
  } catch (error) {
    throw error;
  }
}

// eslint-disable-next-line react/prop-types
export default function CreateSpot({ navigation }) {
  const [spotStyle, setSpotStyle] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [locationInfo, setLocationInfo] = useState("");
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState({
    latitude: undefined,
    longitude: undefined,
  });

  const spotAlreadyExist = () => {
    Alert.alert("There is already an spot in your location", ":(", [
      {
        text: "Confirm",
        style: "confirm",
      },
    ]);
  };
  const missingInput = () => {
    Alert.alert("Please fill all the required fields", "", [
      {
        text: "Confirm",
        style: "confirm",
      },
    ]);
  };

  useEffect(() => {
    getUser().then((author) => setUsername(author));
    setLocationInfo("No location info provided");
    navigator.geolocation.getCurrentPosition(function (pos) {
      setLocation({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
    });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView style={stylesCreateSpot.container}>
        <View style={stylesCreateSpot.headerContainer}>
          <Picker
            selectedValue={spotStyle}
            style={stylesCreateSpot.stylePicker}
            onValueChange={(itemValue) => setSpotStyle(itemValue)}
          >
            <Picker.Item label="Other" value="Other" />
            <Picker.Item label="Urban" value="Urban" />
            <Picker.Item label="Nature" value="Nature" />
            <Picker.Item label="Arquitecture" value="Arquitecture" />
          </Picker>
          <TextInput
            editable
            style={stylesCreateSpot.titleInput}
            placeholder="Title"
            onChangeText={(value) => {
              setTitle(value.toUpperCase());
            }}
          />
        </View>
        {location.latitude ? (
          <MapView
            showsUserLocation
            followsUserLocation
            scrollEnabled={false}
            style={stylesCreateSpot.mapContainer}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
          />
        ) : (
          <ActivityIndicator />
        )}

        <TextInput
          editable
          style={stylesCreateSpot.descriptionInput}
          placeholder="Description"
          onChangeText={(value) => {
            setDescription(value);
          }}
        />
        <TouchableOpacity
          style={stylesCreateSpot.submitButtonContainer}
          onPress={async () => {
            await navigator.geolocation.getCurrentPosition(async function (
              pos
            ) {
              setLocation({
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude,
              });
              const checkProximity = await createSpot(
                username,
                title,
                spotStyle,
                location.latitude,
                location.longitude,
                description,
                locationInfo
              );
              if (checkProximity === true) {
                spotAlreadyExist();
              } else if (
                title === "" ||
                description === "" ||
                spotStyle === ""
              ) {
                missingInput();
              } else {
                navigation.navigate("Profile");
              }
            });
          }}
        >
          <Text style={stylesCreateSpot.submitButton}>Create Spot</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
