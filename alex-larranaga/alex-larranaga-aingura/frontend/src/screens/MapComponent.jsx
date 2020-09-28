import React, { useState } from "react";
import { Dimensions } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import MapView, { Callout, Marker } from "react-native-maps";
import feedStore from "../stores/feedStore";
import { useNavigation } from "@react-navigation/native";

import { Text, StyleSheet, View, StatusBar, Image } from "react-native";

import { loadFeed } from "../actions/feedActions";

export default function MapComponent(props) {
  if (props.lat) {
    const { lat, lng, name } = props;

    return (
      <MapView
        style={style.map}
        initialRegion={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: lat,
          longitudeDelta: lng,
        }}
      >
        <Marker
          coordinate={{
            latitude: lat,
            longitude: lng,
          }}
          title={name}
        ></Marker>
      </MapView>
    );
  } else {
    const [geoLocaton, setGeoLocation] = useState(feedStore.getGeoLocation());
    const [userLocation, setUserLocation] = useState(
      feedStore.getUserGeoLocation()
    );
    const navigation = useNavigation();
    const [message, setMessage] = useState(null);

    console.log(userLocation);

    function onChange() {
      setGeoLocation(feedStore.getGeoLocation());
    }
    useFocusEffect(() => {
      feedStore.addChangeListener(onChange);
      /*   getDevicesGeoLocation(Location, setMessage).then((currentLocation) => {
        setUserLocation(currentLocation); */
      /*   }); */
      let timer = setInterval(loadFeed, 2000);
      feedStore.getGeoLocation();
      return () => {
        feedStore.removeChangeListener(onChange);
        clearInterval(timer);
      };
    }, [geoLocaton]);

    return (
      <MapView
        style={style.map}
        initialRegion={{
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.2,
        }}
      >
        {geoLocaton.map((eachMarker) => (
          <Marker
            key={eachMarker._id}
            coordinate={{
              latitude: eachMarker.lat,
              longitude: eachMarker.lng,
            }}
          >
            <Callout
              tooltip
              onPress={() =>
                navigation.navigate("detail", { _id: eachMarker._id })
              }
            >
              <View style={style.bubble}>
                <Text
                  style={{
                    height: Dimensions.get("window").width * 0.4,
                  }}
                >
                  <Image style={style.image} source={eachMarker.image} />
                </Text>
                <Text style={style.name}>{eachMarker.name}</Text>

                <View styles={{ height: 100 }}>
                  <Text style={{ fontWeight: "bold", color: "red" }}>
                    {eachMarker.rating}
                  </Text>
                </View>
              </View>
            </Callout>
          </Marker>
        ))}

        {/*   {console.log("HE ENTRADO AL SEGUNDO RENDER")}
        {geoLocaton.map((marker) => {
          <Marker
            key={marker._id}
            coordinate={{
              latitude: 11.18998,
              longitude: -11.18998,
            }}
            title={marker.name}
            description={"Showld draw Ainguras"}
          ></Marker>;
        })} */}
      </MapView>
    );
  }
}
const style = StyleSheet.create({
  bubble: {
    flexDirection: "column",
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 6,
    borderColor: "#ccc",
    borderWidth: 0.5,
    padding: 15,
  },
  name: {
    fontSize: 16,
    marginBottom: 5,
  },
  image: {
    width: 220,
    height: 100,
  },
  body: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },

  map: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
  },
});
