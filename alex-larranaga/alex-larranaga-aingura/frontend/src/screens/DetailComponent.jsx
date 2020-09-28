import React, { useState, useCallback } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  Dimensions,
  Alert,
} from "react-native";
import { loadAinguraById } from "../actions/feedActions";
import { Image } from "react-native-elements";
import * as Location from "expo-location";
import feedStore from "../stores/feedStore";
import { validateReachAingura } from "../actions/feedActions";
import { userAlreadyBeenInAingura } from "../_helpers/utils";
import { useFocusEffect } from "@react-navigation/native";
import SpotCarousel from "./SpotCarousel";
import MapComponent from "./MapComponent";
import AinguraRating from "../screens/AinguraRating";
import { getDevicesGeoLocation } from "../_helpers/utils";
import authStore from "../stores/authStore";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function DetailComponent(props) {
  const ainguraId = props.route.params._id;
  const [aingura, setAingura] = useState([]);
  const [geoLocation, setGeoLocation] = useState(null);
  const [message, setMessage] = useState(null);
  const [errorLocation, setErroLocation] = useState(null);
  const [userInfo, setUserInfo] = useState(authStore.getUser());

  const { navigation, route } = props;
  const {
    name,
    author,
    lat,
    lng,
    rating,
    images,
    description,
    visited,
  } = aingura;

  console.log(userInfo);
  console.log(geoLocation);

  function reachValidation(e) {
    const validationData = {
      ...geoLocation,
      username: userInfo.username,
      lat,
      lng,
      ainguraId,
    };
    if (userAlreadyBeenInAingura(visited, userInfo.username)) {
      setMessage("You cannot reach this place more than once, moron");
    } else {
      validateReachAingura(validationData);
      loadAinguraById(ainguraId);
    }
  }

  navigation.setOptions({ title: name });

  function onChange() {
    setAingura(feedStore.getAingura());
    setMessage(feedStore.getValidationMessage());
  }
  useFocusEffect(
    useCallback(() => {
      feedStore.addChangeListener(onChange);
      getDevicesGeoLocation(Location, setErroLocation).then((geolocation) =>
        setGeoLocation(geolocation)
      );
      loadAinguraById(ainguraId);
      return () => feedStore.removeChangeListener(onChange);
    }, [ainguraId]),
    []
  );

  return (
    <ScrollView vertical style={styles.viewBody}>
      <SpotCarousel images={images} height={340} width={450} />
      <View style={styles.textContainer}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View
            style={{ flexDirection: "column", justifyContent: "space-around" }}
          >
            <Text style={styles.titleStyles}>{name}</Text>
            <Text style={styles.authorStyles}>{author}</Text>
          </View>
          <View style={{ justifyContent: "center" }}>
            <Text style={{ textAlign: "center" }}>Claim your Aingura!</Text>
            <TouchableOpacity onPress={(e) => reachValidation(e)}>
              <Image
                style={styles.ainguraCounterStyles}
                source={require("../../assets/icon.png")}
              />
            </TouchableOpacity>
            <Text style={{ textAlign: "center" }}>
              Visited by: {visited ? visited.length : 0}
            </Text>
            <Text>
              {message
                ? Alert.alert(message, "", [{ text: "Ok", style: "default" }])
                : null}
            </Text>
          </View>
        </View>

        <AinguraRating rating={rating}></AinguraRating>
        <Text style={styles.descriptionStyles}>{description}</Text>
      </View>
      <SafeAreaView style={styles.mapContainer}>
        <MapComponent lat={lat} lng={lng} name={name}></MapComponent>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    backgroundColor: "white",
  },
  textContainer: {
    marginTop: 50,
    justifyContent: "center",
  },
  titleStyles: {
    fontSize: Dimensions.get("window").width * 0.09,
    fontWeight: "bold",

    width: Dimensions.get("window").width * 0.4,
  },
  ratingStyles: {
    flexDirection: "row-reverse",
  },
  ainguraCounterStyles: {
    width: 60,
    height: 60,
    margin: 20,
    marginLeft: 35,
    resizeMode: "contain",
  },
  descriptionStyles: {
    margin: Dimensions.get("window").width * 0.04,
    textAlign: "justify",
  },
  //AHORA FUNCIONA
  mapContainer: {
    flex: 1,
    height: 200,
    width: 400,
    marginTop: 20,
    marginLeft: 10,
    borderRadius: 30,
  },
  mapStyles: {
    flex: 1,
  },
});
