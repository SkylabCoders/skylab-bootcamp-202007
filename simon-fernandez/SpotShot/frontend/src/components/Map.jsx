import React, { useEffect, useState } from "react";
import {
  FlatList,
  TouchableOpacity,
  Image,
  Text,
  ActivityIndicator,
} from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import spotStore from "../stores/spotStore";
import stylesMap from "../styles/map-style";

export default function Map({ navigation }) {
  const [spotList, setSpotList] = useState(null);
  const [spotSuggestion, setSpotSuggestion] = useState(null);
  const [userLocation, setUserLocation] = useState({
    latitude: undefined,
    longitude: undefined,
  });
  const deltaCoords = {
    latDelta: 0.07,
    lngDelta: 0.07,
  };

  function onChange() {
    setSpotList(spotStore.getCoordenates());
    setSpotSuggestion(spotStore.getSuggestions());
  }

  useEffect(() => {
    spotStore.addChangeListener(onChange);
    setSpotList(spotStore.getCoordenates());
    setSpotSuggestion(spotStore.getSuggestions());
    navigator.geolocation.getCurrentPosition(function (pos) {
      setUserLocation({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
    });
    return () => spotStore.removeChangeListener(onChange);
  }, []);
  return (
    <>
      {spotList && userLocation.latitude && userLocation.longitude ? (
        <MapView
          style={stylesMap.mapContainer}
          showsUserLocation
          showsMyLocationButton
          followsUserLocation
          initialRegion={{
            latitude: userLocation.latitude,
            longitude: userLocation.longitude,
            latitudeDelta: deltaCoords.latDelta,
            longitudeDelta: deltaCoords.lngDelta,
          }}
        >
          {spotList.map((element) => {
            return (
              <Marker
                coordinate={{
                  latitude: element.lat,
                  longitude: element.lgn,
                }}
                title={element.title}
                key={element._id}
              >
                <Image
                  source={require("../Images/SpotShotlogo2.png")}
                  style={stylesMap.mapIcon}
                />
                <Callout
                  onPress={() => {
                    navigation.navigate("Spot", { id: element._id });
                  }}
                  style={stylesMap.mapCallout}
                >
                  <Image
                    style={stylesMap.mapCalloutImage}
                    source={element.image}
                  />
                  <Text style={stylesMap.mapCalloutText}>{element.title}</Text>
                  <Text>{element.rating}</Text>
                </Callout>
              </Marker>
            );
          })}
        </MapView>
      ) : (
        <ActivityIndicator />
      )}
      {spotSuggestion ? (
        <>
          <FlatList
            data={spotSuggestion}
            horizontal
            style={stylesMap.suggestionContainer}
            keyExtractor={(item) => item._id}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={stylesMap.suggestionChild}
                  onPress={() => {
                    navigation.navigate("Spot", { id: item._id });
                  }}
                >
                  {item.render()}
                </TouchableOpacity>
              );
            }}
          />
        </>
      ) : (
        <ActivityIndicator style={stylesMap.activityIndicator} />
      )}
    </>
  );
}
